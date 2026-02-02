import { ComponentExample } from "@/components/component-example";
import Experiences from "@/components/experiences";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { GitHubLight } from "@ridemountainpig/svgl-react";
import { CornerLeftUp } from "lucide-react";
import Image from "next/image";
import { Link } from 'next-view-transitions'

export default function Page() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2009; // i was born in 2008 btw

    return (
        <div className="container max-w-3xl mx-auto">
            <div className="w-full py-8 md:py-16 flex items-center justify-center">
                <div className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16">
                    <div className="relative mx-auto md:mx-0">
                        <div className="relative size-40 overflow-hidden rounded-3xl border-2 bg-muted transition hover:scale-105 hover:-rotate-3 hover:shadow-xl">
                            <Image
                                src="/silly_cat3.jpg"
                                alt="yooo_ profile picture"
                                width={160}
                                height={160}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="space-y-2">
                            <p className="font-mono text-sm text-muted-foreground">
                                Game Developer
                            </p>
                            <h1 className="text-3xl font-semibold tracking-tight">
                                yohei_yayoi <span className="text-gray-500">, yooo_</span>
                            </h1>
                        </div>
                        <p className="max-w-md text-muted-foreground md:max-w-lg text-lg">
                            I'm {age} who started with Roblox in 2020. Now I'm a scripter at a Roblox studio and make random projects on the side websites, Minecraft mods, Discord bots. Love coding, space, and comics!
                        </p>

                        <div className="flex items-center justify-center gap-2 md:justify-start">
                            <Button className="hover:scale-105 hover:-rotate-3 transition" asChild>
                                <Link href="/work"><CornerLeftUp /> View my works</Link>
                            </Button>
                            <Button className="hover:scale-105 hover:-rotate-3 transition" variant="outline" asChild>
                                <Link href="/blog"><GitHubLight /> View my github</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about-me" className="">
                <Experiences />
                <TechStack />
            </div>
        </div>
    )
}
