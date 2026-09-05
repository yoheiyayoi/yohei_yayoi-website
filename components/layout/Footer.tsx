import { cn } from "@/lib/utils";
import { Discord, GitHubLight } from "@ridemountainpig/svgl-react";
import { Mail } from "lucide-react";
import Image from "next/image";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer
            className={cn(
                "w-full border-t border-border/50 bg-white",
                className,
            )}
        >
            <div className="mx-auto w-full max-w-4xl px-6">
                {/* Main footer */}
                <div className="grid gap-10 py-10 sm:grid-cols-2 sm:py-12">
                    {/* About */}
                    <div className="flex flex-col items-start gap-3">
                        <Image
                            src="/yooo_.png"
                            width={50}
                            height={50}
                            alt="yooo_"
                        />

                        <div>
                            <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-gray-500">
                                Software developer who loves building cool
                                things and turning ideas into reality.
                            </p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="sm:justify-self-end sm:max-w-xs">
                        <h3 className="text-sm font-medium text-gray-900">
                            Contact Me
                        </h3>

                        <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                            Have a question or want to work together? Feel free
                            to reach out!
                        </p>

                        <p
                            className="mt-4 flex w-fit items-center gap-2 text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                        >
                            <Mail className="size-4" />
                            shonoyohei@email.com
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-gray-500">
                            <a
                                href="https://github.com/yoheiyayoi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-gray-900"
                            >
                                <GitHubLight className="size-5" />
                                GitHub
                            </a>

                            <a
                                href="https://discord.com/invite/qp7rTNMgUD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-gray-900"
                            >
                                <Discord className="size-5" />
                                Discord
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-black/5 py-5">
                    <p className="text-center text-[12px] tracking-wide text-gray-400 sm:text-left">
                        &copy; {new Date().getFullYear()} yooo_. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
