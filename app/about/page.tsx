import Link from "next/link";
import { FaFileArrowDown } from "react-icons/fa6";
import { Terminal } from "lucide-react";
import { withBasePath } from "@/lib/site";

const tools = [
  { category: "ml & ai", items: ["pytorch", "scikit-learn", "langchain"] },
  { category: "backend", items: ["flask", "fastapi", "sql", "docker"] },
  { category: "core", items: ["python", "git", "linux"] },
];

export default function About() {
  return (
    <div className="max-w-2xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-8">
      <div className="animate-fade-in-up">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">
          hi, i&apos;m <span className="text-gradient">alok tripathi</span>.
        </h1>
      </div>
        
      <section className="space-y-6 md:space-y-8 mt-8">
        <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {["python", "ai / ml", "data science", "backend systems"].map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>

        <div className="space-y-5 text-sm md:text-base text-muted-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p>
            pursuing bachelor&apos;s in data science and applications at{" "}
            <span className="text-accent font-semibold">iit madras</span>.
          </p>

          <p>
            learning by thinking from first principles and digging into the details until
            things make sense. mostly working with{" "}
            <span className="text-accent font-semibold">python</span> and{" "}
            <span className="text-accent font-semibold">backend frameworks</span>,
            building intelligent systems that bridge ai capabilities with practical applications—
            focusing on data processing, model deployment, and system design.
          </p>

          <p className="text-sm text-muted-foreground/60 italic font-mono">
            btw, i use fedora.
          </p>

          <div className="card p-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <Terminal size={14} className="text-accent" />
              <span className="text-xs font-mono text-muted-foreground">~/tools</span>
              <div className="flex gap-1.5 ml-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>
            <div className="p-4 space-y-3 font-mono text-sm">
              {tools.map((group) => (
                <div key={group.category} className="flex items-start gap-3">
                  <span className="text-accent-secondary shrink-0">{group.category}</span>
                  <span className="text-muted-foreground/40">→</span>
                  <span className="text-foreground/80">{group.items.join(" · ")}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="pt-2 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            i also write{" "}
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent underline-offset-4 transition-all font-semibold"
            >
              technical blogs
            </Link>{" "}
            about what i build and learn along the way.
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            you can find my resume{" "}
            <a
              href={withBasePath("/alok_tripathi_resume.pdf")}
              download="alok_tripathi_resume.pdf"
              className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 underline 
                decoration-accent/30 hover:decoration-accent underline-offset-4 font-semibold group"
            >
              here
              <FaFileArrowDown className="text-sm group-hover:translate-y-0.5 transition-transform" />
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
