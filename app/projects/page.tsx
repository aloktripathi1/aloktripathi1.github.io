import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aloktripathi.vercel.app";

export const metadata: Metadata = {
  title: "projects",
  description:
    "Projects built with Python, exploring ML systems and AI applications",
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "projects | Alok Tripathi",
    description:
      "Projects built with Python, exploring ML systems and AI applications",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alok Tripathi projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "projects | Alok Tripathi",
    description:
      "Projects built with Python, exploring ML systems and AI applications",
    images: ["/og-image.png"],
    creator: "@im_aloktripathi",
  },
};

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-8 relative z-10">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gradient-subtle">projects</h1>
        <p className="text-sm text-muted-foreground/50 mt-1">things i&apos;ve built and shipped</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group card p-6 flex flex-col animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Title & Links */}
            <div className="flex items-start justify-between mb-3">
              <h2 className="font-semibold text-base group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 shrink-0 ml-3">
                {project.repoLink && (
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg
                      border border-white/8 text-muted-foreground
                      hover:text-accent hover:border-accent/30 hover:bg-accent/8
                      transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </Link>
                )}
                {project.sourceLink && (
                  <Link
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg
                      border border-white/8 text-muted-foreground
                      hover:text-accent hover:border-accent/30 hover:bg-accent/8
                      transition-all duration-200"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground/80 mb-5 grow leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
