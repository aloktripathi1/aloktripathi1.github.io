"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { name: "about", path: "/" },
  { name: "now", path: "/now" },
  { name: "blog", path: "/blog" },
  { name: "projects", path: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollYRef = useRef(0);
  // Remove special effects for blog and projects
  const shouldUseScrollBehavior = false;
  const shouldBeTranslucent = false;

  useEffect(() => {
    // Mount animation
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Remove scroll behavior effect

  return (
    <nav
      className={`flex flex-col items-center transition-all duration-500 fixed top-0 left-0 right-0 z-50 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div
        className="w-full py-5 flex flex-col items-center transition-all duration-300 bg-background border-b border-muted/10"
      >
        <ul className="flex gap-8 text-sm">
          {navItems.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li
                key={item.path}
                className={`${mounted ? "animate-fade-in-down" : "opacity-0"}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={item.path}
                  className={`transition-all duration-300 relative group ${isActive
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
