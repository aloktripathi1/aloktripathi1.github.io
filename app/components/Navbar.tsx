"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "home", path: "/" },
  { name: "now", path: "/now" },
  { name: "blog", path: "/blog" },
  { name: "projects", path: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div className="mt-5 px-1.5 py-1.5 rounded-2xl glass-strong">
        <ul className="flex gap-1">
          {navItems.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li
                key={item.path}
                className={`${mounted ? "animate-fade-in-down" : "opacity-0"}`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <Link
                  href={item.path}
                  className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 block
                    ${isActive
                      ? "text-background bg-accent shadow-[0_0_20px_-4px_var(--glow-primary)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
