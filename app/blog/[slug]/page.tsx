import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { MDXContent } from "./MDXContent";

interface BlogPostPageProps {
  params: { slug: string };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="space-y-8 max-w-3xl mx-auto pt-20">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <time dateTime={post.date}>{format(new Date(post.date), "MMMM dd, yyyy")}</time>
        <span className="text-muted-foreground/60">•</span>
      </div>
      <MDXContent code={post.body.code} />
    </article>
  );
}

