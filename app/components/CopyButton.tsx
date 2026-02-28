"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/70 transition-all hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
    >
      <Copy
        size={14}
        strokeWidth={2}
        className={copied ? "text-accent" : undefined}
      />
      <span
        className={`pointer-events-none absolute -right-1 -top-8 whitespace-nowrap rounded-md border border-white/20 bg-black/70 px-2 py-1 text-xs font-medium text-foreground/90 shadow-sm transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied
      </span>
      <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
    </button>
  );
}
