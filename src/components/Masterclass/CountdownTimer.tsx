"use client";
import React, { useEffect, useState } from "react";

// July 14, 2026, 00:00:00 EAT (UTC+3). The explicit +03:00 offset in the ISO
// string makes JS resolve this to a fixed UTC instant at parse time, so the
// countdown is correct for every visitor regardless of their local timezone
// — no manual offset math against the visitor's clock is needed.
const TARGET_TIME = new Date("2026-07-14T00:00:00+03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  reached: boolean;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_TIME - Date.now());
  const totalSecs = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    mins: Math.floor((totalSecs % 3600) / 60),
    secs: totalSecs % 60,
    reached: diff <= 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const UNITS: { key: keyof Pick<TimeLeft, "days" | "hours" | "mins" | "secs">; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
];

const CountdownTimer: React.FC = () => {
  // Start null so the server-rendered markup and the first client render
  // match exactly (avoids a hydration mismatch from clock-dependent output).
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Recompute from the fixed target on every tick rather than decrementing
    // a stored counter, so a throttled/backgrounded tab (setInterval delays)
    // or a long idle period can't cause drift — the next tick always
    // reflects the true remaining time.
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const display = timeLeft ?? { days: 0, hours: 0, mins: 0, secs: 0, reached: false };

  return (
    <div className="mb-10 text-center">
      <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">
        {display.reached ? "Registration Closed" : "Registration Closes In"}
      </p>

      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {UNITS.map((unit, i) => (
          <React.Fragment key={unit.key}>
            <div className="w-16 sm:w-20 py-3 rounded-2xl border border-primary border-opacity-30 bg-dark_grey">
              <div className="text-primary text-24 sm:text-30 font-bold leading-tight">
                {pad(display[unit.key])}
              </div>
              <div className="text-muted text-opacity-60 text-xs uppercase tracking-wide mt-1">
                {unit.label}
              </div>
            </div>
            {i < UNITS.length - 1 && <span className="text-muted text-opacity-60 text-24 font-bold">:</span>}
          </React.Fragment>
        ))}
      </div>

      {display.reached && (
        <p className="text-muted text-opacity-60 text-18 mt-6">
          Registration for Cohort 01 has closed.
        </p>
      )}

      <div className="inline-block mt-8 border border-primary border-opacity-30 rounded-lg px-6 py-3">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          Limited to 20 traders · 12 seats remaining
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
