import { cn } from "@/lib/utils";
import { Discord, GitHubLight } from "@ridemountainpig/svgl-react";

import Image from "next/image";

interface FooterProps {
    className?: string;
}

export default function Footer({
    className,
}: FooterProps) {
    return (
        <footer className={cn("bg-white w-full border-t border-border", className)}>
            <div className="mx-auto max-w-4xl px-6 w-full">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-[12px] sm:text-[13px] tracking-wide text-center sm:text-left pb-6 border-t border-black/4 pt-4">
                    <p>
                        <Image src="/yooo_.png" width={45} height={45} alt="yooo_" />
                        พัฒนาโดย{" "}
                        <span className="text-gray-600 dark:text-white/45 font-medium">
                            yooo_ (yohei_yayoi)
                        </span>{" "}

                        <span>
                            <br />
                            &copy; {new Date().getFullYear()} yooo_. All Rights Reserved.
                        </span>
                    </p>

                    <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
                        <a href="https://github.com/yoheiyayoi" target="_blank" className="size-6"><GitHubLight /></a>
                        <a href="https://discord.com/invite/qp7rTNMgUD" target="_blank" className="size-6"><Discord /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
}
