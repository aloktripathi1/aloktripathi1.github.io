import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { ExternalLink, Book } from "lucide-react";
import type { Metadata } from "next";

function calculateReadTime(content: string): number {
  // Remove markdown syntax, code blocks, and HTML tags
  const text = content
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]+`/g, "") // Remove inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Replace links with just text
    .replace(/[#*_~`]/g, "") // Remove markdown formatting
    .replace(/<[^>]+>/g, "") // Remove HTML tags
    .trim();

  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordsPerMinute = 200;
  const readTime = Math.ceil(words.length / wordsPerMinute);

  return readTime || 1; // Minimum 1 minute
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aloktripathi.vercel.app";

export const metadata: Metadata = {
  title: "blog",
  description: "Blog posts about backend systems, distributed systems, and developer tools",
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: "blog | Alok Tripathi",
    description: "Blog posts about backend systems, distributed systems, and developer tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alok Tripathi blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "blog | Alok Tripathi",
    description: "Blog posts about backend systems, distributed systems, and developer tools",
    images: ["/og-image.png"],
    creator: "@im_aloktripathi",
  },
};

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gradient-subtle">blog</h1>
          <p className="text-sm text-muted-foreground/60 mt-1">thoughts on building and learning</p>
        </div>
        <a
          href="https://hashnode.com/@aloktripathi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-muted-foreground/60 hover:text-accent transition-colors 
            inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 hover:border-accent/20"
        >
          hashnode
          <ExternalLink size={12} />
        </a>
      </div>
      
      <div className="space-y-4">
        {posts.map((post, index) => {
          const readTime = calculateReadTime(post.body.raw);
          return (
            <Link 
              key={post.slug}
              href={post.url}
              className="group card block p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/60">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  <span className="flex items-center gap-1.5">
                    <Book size={12} />
                    {readTime} min
                  </span>
                </div>
                <h2 className="text-base md:text-lg font-bold group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

