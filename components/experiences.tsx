import { Briefcase } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import Badge from './Badge'
import { cn } from '@/lib/utils'

const platformMeta: Record<
    string,
    { label: string; badgeClass: string }
> = {
    Roblox: { label: 'Roblox', badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200/60' },
    School: { label: 'School', badgeClass: 'bg-zinc-50 text-zinc-700 border border-zinc-200/70' },
}

export default function Experiences() {
    const experiences = [
        {
            image: "/experience/nit_logo.jpg",
            title: "Full-Stack Developer",
            place: "NTUNISo",
            link: "https://ntuniso.net/",
            date: "May 2026 - Now",
            platform: "School",
            description: "Improved school ecosystem efficiency by creating tools for academic and administrative use."
        },
        {
            image: "/experience/rottendoge.png",
            title: "Game Developer",
            place: "RottenDoge",
            link: "https://www.roblox.com/communities/34121244/RottenDoge#!/about",
            date: "Oct 2024 - Now",
            platform: "Roblox",
            description: "Collaborated with the studio team to program core gameplay mechanics, and enhance user experience."
        },
        {
            image: "/experience/ghost.png",
            title: "Game Developer",
            place: "Ghost Extermination Company",
            link: "https://www.roblox.com/communities/14813831/Ghost-Extermination-Company#!/about",
            date: "Sept 2023 - July 2024",
            platform: "Roblox",
            description: "Collaborated with the studio team to program core gameplay mechanics, and enhance user experience."
        },
        {
            image: "/experience/ntun.png",
            title: "Student",
            place: "NTUN",
            link: "http://ntun.ac.th/",
            date: "2021 - Now",
            platform: "School",
        },
    ]

    return (
        <div>
            <div className="mb-6">
                <h1 className="font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
                    <Briefcase className="w-7 h-7 text-blue-500" />
                    Experience
                </h1>

                <p className="monkey-font text-lg md:text-xl gradient-text">ประสบการณ์สุดเจ๋ง</p>

                <p className="text-md text-zinc-500">
                    A quick timeline of what I've been doing recently.
                </p>
            </div>

            <div className="space-y-2 border-l border-blue-200/70 ml-2 mb-12">
                {experiences.map((exp, i) => {
                    const meta = platformMeta[exp.platform] ?? {
                        label: exp.platform,
                        badgeClass: 'bg-white text-zinc-700 border border-zinc-200/70',
                    }

                    return (
                        <div key={i} className="relative pl-6 pb-6 last:pb-0">
                            <div className="absolute -left-1.25 top-6 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />

                            <div className="group rounded-xl p-3 -ml-3 ring-1 ring-black/5 bg-white/40 backdrop-blur-sm hover:bg-white/60 hover:ring-black/10 transition">
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0 mt-0.5">
                                        <Image
                                            src={exp.image}
                                            alt={exp.place}
                                            height={40}
                                            width={40}
                                            className="rounded-xl border border-zinc-100 shadow-sm object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col min-w-0 flex-1">
                                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                                            <h1 className="text-base md:text-lg font-semibold text-zinc-900 leading-snug">
                                                {exp.title}
                                            </h1>

                                            <Badge
                                                text={exp.date}
                                                className="shrink-0 bg-white text-zinc-700 font-semibold text-xs border border-zinc-200/70 whitespace-nowrap"
                                            />
                                        </div>

                                        <Link
                                            href={exp.link as any}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-0.5 text-sm md:text-[15px] text-zinc-800 leading-snug hover:text-blue-700 transition-colors inline-flex items-center gap-1 truncate"
                                        >
                                            {exp.place}
                                            <span className="opacity-50">↗</span>
                                        </Link>

                                        {exp.description && (
                                            <p className="mt-1.5 text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}

                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <Badge text={meta.label} className={cn('text-xs font-medium', meta.badgeClass)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
