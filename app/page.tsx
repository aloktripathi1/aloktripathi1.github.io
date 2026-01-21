"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaEnvelope, FaLinkedin, FaCheck, FaFileArrowDown } from "react-icons/fa6";
import { SiLeetcode, SiKaggle, SiHashnode } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/aloktripathi1",
    icon: FaGithub,
    hoverColor: "#9333EA",
  },
  {
    name: "X",
    url: "https://x.com/im_aloktripathi",
    icon: FaXTwitter,
    hoverColor: "#1DA1F2",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aloktripathi1",
    icon: FaLinkedin,
    hoverColor: "#0077B5",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/aloktripathi/",
    icon: SiLeetcode,
    hoverColor: "#FFA116",
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/aloktripathi1",
    icon: SiKaggle,
    hoverColor: "#20BEFF",
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@aloktripathi",
    icon: SiHashnode,
    hoverColor: "#2962FF",
  },
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
    <div className="max-w-2xl mx-auto flex flex-col justify-start pt-20 md:pt-28 pb-16 px-6 md:px-8 relative z-10">
      <section className="space-y-8 md:space-y-10">
        {/* Hero Section */}
        <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            hi, i&apos;m alok tripathi.
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm text-muted-foreground">
            {["python", "ai ml", "data science", "backend systems"].map((skill, index) => (
              <span
                key={skill}
                className={`px-2.5 py-1 border border-muted/30 rounded-sm glass backdrop-blur-sm 
                  hover:border-accent/50 hover:text-accent hover:scale-105 hover:shadow-lg
                  transition-all duration-300 cursor-default
                  ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p className={`${mounted ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
            pursuing bachelor&apos;s in data science and applications at{" "}
            <span className="text-accent font-medium hover:text-accent/80 transition-colors">iit madras</span>.
          </p>

          <p className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
            learning by thinking from first principles and digging into the details until
            things make sense. mostly working with{" "}
            <span className="text-accent font-medium hover:text-accent/80 transition-colors">python</span> and{" "}
            <span className="text-accent font-medium hover:text-accent/80 transition-colors">backend frameworks</span>,
            building intelligent systems that bridge ai capabilities with practical applications—
            focusing on data processing, model deployment, and system design.
          </p>

          <p className={`text-sm md:text-base text-muted-foreground/80 italic ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "700ms" }}>
            btw, i use fedora.
          </p>

          {/* Tools Section */}
          <div className={`pt-2 space-y-2 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "800ms" }}>
            <p className="text-sm font-medium text-foreground">tools</p>
            <div className="text-sm text-muted-foreground/90 space-y-0.5 font-mono glass rounded-lg p-3 border border-muted/20 hover:border-accent/30 transition-all duration-300">
              <p className="hover:text-accent/90 transition-colors">python · pytorch · scikit-learn · langchain</p>
              <p className="hover:text-accent/90 transition-colors">flask · fastapi · sql · docker · git · linux</p>
            </div>
          </div>

          <p className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "900ms" }}>
            i also write{" "}
            <Link
              href="/blog"
              className="text-accent hover:text-accent/90 underline decoration-accent/40 underline-offset-4 font-medium 
                hover:decoration-accent/80 transition-all"
            >
              technical blogs
            </Link>{" "}
            about what i build and learn along the way.
          </p>

          <p className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "1000ms" }}>
            you can find my resume{" "}
            <a
              href="/alok_tripathi_resume.pdf"
              download="alok_tripathi_resume.pdf"
              className="inline-flex items-center gap-1.5 text-accent hover:text-accent/90 underline 
                decoration-accent/40 underline-offset-4 font-medium hover:decoration-accent/80 
                hover:gap-2 transition-all duration-300"
            >
              here
              <FaFileArrowDown className="text-xs" />
            </a>
            .
          </p>
        </div>
      </section>

      {/* Social Icons Section */}
      <div className={`flex gap-4 pt-12 border-t border-muted/20 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "1100ms" }}>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 
                hover:scale-125 hover:-translate-y-1 glow-accent-hover
                relative group"
              aria-label={social.name}
              style={{
                animationDelay: `${1200 + index * 50}ms`
              }}
            >
              <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-accent/90 text-background 
                text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                whitespace-nowrap">
                {social.name}
              </span>
            </a>
          );
        })}
        <button
          onClick={copyEmail}
          className="text-muted-foreground hover:text-accent transition-all duration-300 cursor-pointer 
            flex items-center bg-transparent border-none p-0 hover:scale-125 hover:-translate-y-1 
            glow-accent-hover relative group"
          aria-label={emailCopied ? "Email copied" : "Copy email"}
        >
          {emailCopied ? (
            <FaCheck size={18} className="text-accent" />
          ) : (
            <FaEnvelope size={20} className="transition-transform duration-300 group-hover:rotate-12" />
          )}
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-accent/90 text-background 
            text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
            whitespace-nowrap">
            {emailCopied ? "Copied!" : "Copy Email"}
          </span>
        </button>
      </div>
    </div>
  );
}
