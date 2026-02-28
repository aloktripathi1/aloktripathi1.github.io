"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaEnvelope, FaLinkedin, FaCheck, FaFileArrowDown } from "react-icons/fa6";
import { SiLeetcode, SiKaggle } from "react-icons/si";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

const socials = [
  { name: "GitHub", url: "https://github.com/aloktripathi1", icon: FaGithub },
  { name: "X", url: "https://x.com/im_aloktripathi", icon: FaXTwitter },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aloktripathi1", icon: FaLinkedin },
  { name: "LeetCode", url: "https://leetcode.com/u/aloktripathi/", icon: SiLeetcode },
  { name: "Kaggle", url: "https://www.kaggle.com/aloktripathi1", icon: SiKaggle },
];

const tools = [
  { category: "ml & ai", items: ["pytorch", "scikit-learn", "langchain"] },
  { category: "backend", items: ["flask", "fastapi", "sql", "docker"] },
  { category: "core", items: ["python", "git", "linux"] },
];

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const email = "aloktripathe@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-start pt-24 md:pt-32 pb-20 px-6 md:px-8 relative z-10">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.1]">
            hi, i&apos;m{" "}
            <span className="text-gradient">alok tripathi</span>
          </h1>
        </div>

        {/* Skill pills */}
        <div className={`flex flex-wrap gap-2 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}>
          {["python", "ai / ml", "data science", "backend systems"].map((skill, index) => (
            <span
              key={skill}
              className="tag cursor-default"
              style={{ animationDelay: `${300 + index * 80}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider my-10" />

      {/* About Section */}
      <section className="space-y-6">
        <div className={`space-y-5 text-sm md:text-base text-muted-foreground/90 leading-relaxed ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}>
          <p>
            pursuing bachelor&apos;s in data science and applications at{" "}
            <span className="text-accent font-semibold">iit madras</span>.
          </p>

          <p>
            i learn by thinking from first principles and digging into the details until
            things actually make sense. mostly working with{" "}
            <span className="text-accent font-semibold">python</span> and{" "}
            <span className="text-accent font-semibold">backend frameworks</span>,
            building intelligent systems that bridge ai capabilities with practical applications—
            focusing on data processing, model deployment, and system design.
          </p>

          <p className="text-sm text-muted-foreground/60 italic font-mono">
            btw, i use fedora.
          </p>
        </div>

        {/* Tools Section - terminal style */}
        <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}>
          <div className="card p-0 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <Terminal size={14} className="text-accent" />
              <span className="text-xs font-mono text-muted-foreground">~/tools</span>
              <div className="flex gap-1.5 ml-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>
            {/* Terminal content */}
            <div className="p-4 space-y-3 font-mono text-sm">
              {tools.map((group) => (
                <div key={group.category} className="flex items-start gap-3">
                  <span className="text-accent-secondary shrink-0">{group.category}</span>
                  <span className="text-muted-foreground/40">→</span>
                  <span className="text-foreground/80">
                    {group.items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Links */}
        <div className={`flex flex-col sm:flex-row gap-3 pt-2 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
              bg-accent/10 border border-accent/20 text-accent text-sm font-medium
              hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_24px_-4px_var(--glow-primary)]
              transition-all duration-300"
          >
            <Sparkles size={14} />
            read my blog
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/alok_tripathi_resume.pdf"
            download="alok_tripathi_resume.pdf"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
              border border-white/10 text-foreground/80 text-sm font-medium
              hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <FaFileArrowDown size={13} />
            download resume
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Social Section */}
      <div className="divider my-10" />

      <section className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "1000ms" }}>
        <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider mb-4">
          find me on
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center rounded-xl
                  border border-white/8 bg-white/3 text-muted-foreground
                  hover:text-accent hover:border-accent/30 hover:bg-accent/8
                  hover:shadow-[0_0_20px_-4px_var(--glow-primary)]
                  transition-all duration-300"
                aria-label={social.name}
              >
                <Icon size={18} />
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 
                  bg-white/10 backdrop-blur-md text-foreground text-[10px] font-mono rounded-lg
                  border border-white/10 opacity-0 group-hover:opacity-100 
                  transition-all duration-200 pointer-events-none whitespace-nowrap
                  translate-y-1 group-hover:translate-y-0">
                  {social.name}
                </span>
              </a>
            );
          })}
          <button
            onClick={copyEmail}
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer
              border border-white/8 bg-white/3 text-muted-foreground
              hover:text-accent hover:border-accent/30 hover:bg-accent/8
              hover:shadow-[0_0_20px_-4px_var(--glow-primary)]
              transition-all duration-300"
            aria-label={emailCopied ? "Email copied" : "Copy email"}
          >
            {emailCopied ? (
              <FaCheck size={16} className="text-accent-secondary" />
            ) : (
              <FaEnvelope size={18} />
            )}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 
              bg-white/10 backdrop-blur-md text-foreground text-[10px] font-mono rounded-lg
              border border-white/10 opacity-0 group-hover:opacity-100 
              transition-all duration-200 pointer-events-none whitespace-nowrap
              translate-y-1 group-hover:translate-y-0">
              {emailCopied ? "Copied!" : "Copy Email"}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
