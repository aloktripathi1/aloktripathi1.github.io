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
    <div className="space-y-10 max-w-6xl mx-auto pt-20 px-6 md:px-8 relative z-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight">projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative border border-muted/20 rounded-lg p-6 hover:border-accent hover:bg-muted/5 hover:shadow-[0_0_20px_-5px_rgba(240,160,192,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Title */}
            <h2 className="font-semibold text-base mb-2.5 group-hover:text-accent transition-colors">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 grow leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-0.5 border border-muted/30 rounded-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.repoLink && (
                <Link
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/90 transition-colors inline-flex items-center gap-1.5"
                >
                  github
                  <ExternalLink size={13} />
                </Link>
              )}
              {project.sourceLink && (
                <Link
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/90 transition-colors inline-flex items-center gap-1.5"
                >
                  live link
                  <ExternalLink size={13} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
