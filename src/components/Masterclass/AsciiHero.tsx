"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Character cell size is picked from the *measured container* width, not the
// viewport — this is what lets the grid recalculate for the actual box it's
// filling rather than assuming a fixed breakpoint block.
function getFontSizePx(containerWidth: number): number {
  if (containerWidth >= 900) return 14;
  if (containerWidth >= 640) return 12;
  if (containerWidth >= 400) return 10;
  return 8;
}

// Builds one animation frame as a dense cols x rows grid of characters. Each
// column's height follows a slow sine wave (phase-shifted by `tick`) so the
// whole chart gently rises/falls over time — a "living" market chart even
// with no cursor interaction. Deterministic (no Math.random), so it never
// causes an SSR/client hydration mismatch.
function buildFrame(cols: number, rows: number, tick: number): string {
  if (cols <= 0 || rows <= 0) return "";
  const bodyRows = Math.max(1, rows - 1); // last row reserved for the baseline
  const colHeights: number[] = new Array(cols);
  for (let c = 0; c < cols; c++) {
    const wave = Math.sin((c / cols) * Math.PI * 4 + tick * 0.18) * 0.5 + 0.5;
    const ripple = Math.sin(c * 1.7 + tick * 0.05) * 0.15;
    colHeights[c] = Math.max(1, Math.min(bodyRows, Math.round((wave + ripple) * bodyRows)));
  }

  const lines: string[] = [];
  for (let row = 0; row < bodyRows; row++) {
    const rowFromBottom = bodyRows - row;
    let line = "";
    for (let c = 0; c < cols; c++) {
      const h = colHeights[c];
      if (rowFromBottom > h) line += " ";
      else if (rowFromBottom > h * 0.55) line += "#";
      else line += "|";
    }
    lines.push(line);
  }
  lines.push("-".repeat(cols));
  return lines.join("\n");
}

const IDLE_TICK_MS = 180;
const CHAR_WIDTH_RATIO = 0.62;
const LINE_HEIGHT_RATIO = 1.15;

// Interactive, edge-to-edge ASCII market chart. A dim base layer sits under
// a bright glow layer; the glow layer is revealed only near the cursor via a
// CSS mask whose position is driven by two custom properties written
// directly to the element ref (no React state/re-render on mousemove), so
// hover tracking stays cheap. The idle wave animation is driven by a single
// throttled tick (~5.5 updates/sec) rather than a per-frame rAF loop, so the
// whole grid re-renders only a few times a second instead of every frame.
const AsciiHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLPreElement>(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0, fontSize: 10 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const recalc = (width: number, height: number) => {
      if (width <= 0 || height <= 0) return;
      const fontSize = getFontSizePx(width);
      const cellW = fontSize * CHAR_WIDTH_RATIO;
      const cellH = fontSize * LINE_HEIGHT_RATIO;
      // Ceil + a small buffer over-generates slightly; the container's
      // overflow-hidden clips the excess so the grid always covers every
      // pixel of the box with no under-filled edge.
      const cols = Math.max(1, Math.ceil(width / cellW) + 2);
      const rows = Math.max(1, Math.ceil(height / cellH) + 2);
      setGrid({ cols, rows, fontSize });
    };

    recalc(el.clientWidth, el.clientHeight);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      recalc(entry.contentRect.width, entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), IDLE_TICK_MS);
    return () => clearInterval(id);
  }, []);

  const art = useMemo(() => buildFrame(grid.cols, grid.rows, tick), [grid.cols, grid.rows, tick]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = glowRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    el.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = () => {
    glowRef.current?.style.setProperty("--glow-opacity", "0");
  };

  const preStyle: React.CSSProperties = {
    fontSize: `${grid.fontSize}px`,
    lineHeight: LINE_HEIGHT_RATIO,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[26rem] overflow-hidden rounded-2xl border border-border border-opacity-20 bg-darklight bg-opacity-30 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <pre
        aria-hidden="true"
        className="absolute inset-0 m-0 whitespace-pre font-mono text-muted text-opacity-30"
        style={preStyle}
      >
        {art}
      </pre>
      <pre
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 m-0 whitespace-pre font-mono text-primary pointer-events-none transition-opacity duration-150 ease-out"
        style={{
          ...preStyle,
          opacity: "var(--glow-opacity, 0)",
          WebkitMaskImage:
            "radial-gradient(110px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 75%)",
          maskImage:
            "radial-gradient(110px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 75%)",
          textShadow: "0 0 6px #13db7a, 0 0 14px #13db7a",
        }}
      >
        {art}
      </pre>
      <span className="sr-only">Animated candlestick-style chart representing market trend</span>
    </div>
  );
};

export default AsciiHero;
