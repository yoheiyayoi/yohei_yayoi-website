import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer id="contact" className={cn("scroll-mt-24 border-t border-border bg-background", className)}>
      <div className="site-width flex flex-col gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/" className="font-bold text-foreground">yooo<span className="text-primary">_</span></Link>
          <p>© {new Date().getFullYear()} yohei_yayoi</p>
        </div>
        <nav aria-label="Social links" className="flex items-center gap-5">
          <a className="text-link" href="https://github.com/yoheiyayoi" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight className="size-3" />
          </a>
          <a className="text-link" href="https://discord.com/invite/qp7rTNMgUD" target="_blank" rel="noopener noreferrer">
            Discord <ArrowUpRight className="size-3" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
