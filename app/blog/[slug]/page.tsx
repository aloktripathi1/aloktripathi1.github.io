import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { MDXContent } from "./MDXContent";
import ReadModeToggle from "../../components/ReadModeToggle";

interface BlogPostPageProps {
  params: { slug: string };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-8">
      <header className="mb-12 animate-fade-in-up">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/60">
            <time dateTime={post.date}>{format(new Date(post.date), "MMM dd, yyyy")}</time>
            <span className="w-1 h-1 rounded-full bg-accent/40" />
          </div>
          <ReadModeToggle />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-gradient-subtle">{post.title}</h1>
        <div className="divider mt-8" />
      </header>
      <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <MDXContent code={post.body.code} />
      </div>
    </article>
  );
}

