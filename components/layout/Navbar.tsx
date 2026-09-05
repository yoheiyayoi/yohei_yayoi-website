"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Roblox", href: "/roblox" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-width flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="yooo_ home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-4"
        >
          <span className="text-[30px] font-bold tracking-[-0.08em]">
            yooo<span className="text-primary">_</span>
          </span>
          <span className="hidden border-l border-border pl-4 text-[10px] leading-relaxed tracking-[0.16em] text-muted-foreground lg:block">
            DEVELOPER
            <br />
            &amp; CREATOR
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden h-full items-center gap-9 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex h-full items-center border-b-2 px-1 text-sm transition-colors hover:text-primary",
                isActive(link.href)
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* <a href="#contact" onClick={() => setOpen(false)} className="text-link hidden text-sm sm:inline-flex">
          Let's connect <ArrowUpRight className="size-4 text-primary" />
        </a> */}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
          className="site-width border-t border-border py-4 sm:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "block px-2 py-3 text-sm",
                isActive(link.href) ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          {/* <a href="#contact" onClick={() => setOpen(false)} className="text-link px-2 py-3 text-sm">
            Let's connect <ArrowUpRight className="size-4" />
          </a> */}
        </nav>
      )}
    </header>
  );
}
