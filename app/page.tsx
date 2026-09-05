import Experiences from "@/components/experiences";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { websiteProjects } from "@/data/projects/website";
import { GitHubLight } from "@ridemountainpig/svgl-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import SealWalker from "@/components/seal-walker";

export default function Page() {
    const selectedWork = [8, 7, 6].flatMap((id) =>
        websiteProjects.filter((project) => project.id === id)
    );

    return (
        <main className="mx-auto w-full max-w-3xl px-6">
            <section className="py-16 md:py-24">
                <div className="grid items-center gap-10 md:grid-cols-[140px_1fr] md:gap-14">
                    <div className="mx-auto md:mx-0">
                        <div className="relative size-32 overflow-hidden rounded-2xl border border-border bg-muted md:size-40 transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl">
                            <Image
                                src="/yoheiyayoi_body_avatar.png"
                                alt="yooo_ profile picture"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Game Developer
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            yohei_yayoi
                            <span className="ml-2 font-normal text-muted-foreground">
                                yooo_
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground md:text-base">
                            I started coding in Roblox back in 2020 and now work
                            as a studio scripter. I enjoy turning random ideas
                            into real projects, whether it's games, websites,
                            Minecraft mods, or Discord bots.
                        </p>

                        <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground md:text-base">
                            Outside of coding, I'm usually learning something
                            new, reading comics, or nerding out about space.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            <Button asChild>
                                <Link href="/work">
                                    View my work
                                    <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>

                            <Button variant="outline" asChild>
                                <a
                                    href="https://github.com/yoheiyayoi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHubLight className="size-4" />
                                    GitHub
                                </a>
                            </Button>
                        </div>

                        <SealWalker />
                    </div>
                </div>
            </section>

            <section
                id="about-me"
                className="py-2 mb-10"
            >
                <Experiences />
                <TechStack />
            </section>
        </main>
    );
}
