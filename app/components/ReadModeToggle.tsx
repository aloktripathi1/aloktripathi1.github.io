"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ReadModeToggle() {
  const [readMode, setReadMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("read-mode");
    if (saved === "true") {
      setReadMode(true);
      document.documentElement.classList.add("read-mode");
    }
  }, []);

  const toggle = () => {
    const next = !readMode;
    setReadMode(next);
    if (next) {
      document.documentElement.classList.add("read-mode");
    } else {
      document.documentElement.classList.remove("read-mode");
    }
    localStorage.setItem("read-mode", String(next));
  };

  // Clean up on unmount (leaving blog post)
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("read-mode");
    };
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono
        border transition-all duration-300 cursor-pointer
        ${readMode 
          ? "border-amber-700/30 text-amber-400/80 bg-amber-900/20 hover:bg-amber-900/30" 
          : "border-white/10 text-muted-foreground hover:text-accent hover:border-accent/30"
        }`}
      aria-label={readMode ? "Switch to default mode" : "Switch to study mode"}
    >
      {readMode ? (
        <>
          <Sun size={14} />
          <span>default</span>
        </>
      ) : (
        <>
          <Moon size={14} />
          <span>study</span>
        </>
      )}
    </button>
  );
}
