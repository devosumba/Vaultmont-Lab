"use client";
import React from "react";

const TypingResources: React.FC = () => {
  const text = "{ RESOURCES }";
  const [displayed, setDisplayed] = React.useState("");
  const [charIdx, setCharIdx] = React.useState(0);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIdx <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, text]);

  return (
    <div className="text-[#13db7a] text-lg font-semibold tracking-wide text-center w-full min-h-6">
      {displayed || "\u00A0"}
    </div>
  );
};

export default TypingResources;
