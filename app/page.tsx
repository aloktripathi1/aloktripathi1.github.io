"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaEnvelope, FaLinkedin, FaCheck, FaFileArrowDown } from "react-icons/fa6";
import { SiLeetcode, SiKaggle } from "react-icons/si";

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
];

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "aloktripathe@gmail.com";

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
    <div className="max-w-3xl mx-auto flex flex-col justify-start pt-16 md:pt-20 pb-10 px-4 md:px-8 animate-in fade-in duration-700">
      <section className="space-y-6 md:space-y-8">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">
          hi, i&apos;m alok tripathi.
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-sm font-medium">
          <span className="bg-accent/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded border border-accent/20 text-accent/90">
            python
          </span>
          <span className="text-muted-foreground/30">•</span>
          <span className="bg-accent/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded border border-accent/20 text-accent/90">
            ai ml
          </span>
          <span className="text-muted-foreground/30">•</span>
          <span className="bg-accent/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded border border-accent/20 text-accent/90">
            data science
          </span>
          <span className="text-muted-foreground/30">•</span>
          <span className="bg-accent/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded border border-accent/20 text-accent/90">
            backend systems
          </span>
        </div>

        <div className="space-y-5 text-base md:text-lg text-muted-foreground/90 leading-relaxed">
          <p>
            pursuing bachelor&apos;s in data science and applications at{" "}
            <span className="text-accent font-medium">iit madras</span>.
          </p>

          <p>
            learning by thinking from first principles and digging into the details until
            things make sense. mostly working with{" "}
            <span className="text-accent font-medium">python</span> and{" "}
            <span className="text-accent font-medium">backend frameworks</span>,
            building intelligent systems that bridge ai capabilities with practical applications—
            focusing on data processing, model deployment, and system design.
          </p>

          <p className="text-sm md:text-base text-muted-foreground/70 italic">
            btw, i use fedora.
          </p>

          <div className="pt-4 space-y-3">
            <p className="text-muted-foreground/80">
              <span className="font-semibold text-foreground">tools</span>
            </p>
            <div className="text-sm md:text-base text-muted-foreground/80 space-y-1">
              <p>python · pytorch · scikit-learn · langchain</p>
              <p>flask · fastapi · sql · docker · git · linux</p>
            </div>
          </div>

          <p className="pt-2">
            i also write{" "}
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 underline decoration-accent/50 hover:decoration-accent underline-offset-4 transition-all font-medium"
            >
              technical blogs
            </Link>{" "}
            about what i build and learn along the way.
          </p>

          <p>
            you can find my resume{" "}
            <a
              href="/alok_tripathi_resume.pdf"
              download="alok_tripathi_resume.pdf"
              className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 underline decoration-accent/50 hover:decoration-accent underline-offset-4 transition-all font-medium group"
            >
              here
              <FaFileArrowDown className="text-sm group-hover:translate-y-0.5 transition-transform" />
            </a>
            .
          </p>
        </div>
      </section>

      <div className="flex gap-5 pt-8 md:pt-10">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              style={{
                color: "currentColor",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f0a0c0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
              onFocus={(e) => {
                e.currentTarget.style.color = "#f0a0c0";
              }}
              onBlur={(e) => {
                e.currentTarget.style.color = "";
              }}
              aria-label={social.name}
            >
              <Icon size={25} />
            </a>
          );
        })}
        <button
          onClick={copyEmail}
          className="text-muted-foreground transition-all duration-300 hover:scale-110 focus:scale-110 cursor-pointer flex items-center bg-transparent border-none p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          style={{
            color: emailCopied ? "#f0a0c0" : "currentColor",
          }}
          onMouseEnter={(e) => {
            if (!emailCopied) {
              e.currentTarget.style.color = "#f0a0c0";
            }
          }}
          onMouseLeave={(e) => {
            if (!emailCopied) {
              e.currentTarget.style.color = "currentColor";
            }
          }}
          aria-label={emailCopied ? "Email copied" : "Copy email"}
        >
          {emailCopied ? (
            <span className="flex items-center gap-1.5 text-accent">
              <FaCheck size={19} />
            </span>
          ) : (
            <FaEnvelope size={25} />
          )}
        </button>
      </div>
    </div>
  );
}
