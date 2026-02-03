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
    roblox: { label: 'Roblox', badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200/60' },
    school: { label: 'School', badgeClass: 'bg-zinc-50 text-zinc-700 border border-zinc-200/70' },
}

export default function Experiences() {
    const experiences = [
        {
            image: "/experience/rottendoge.png",
            title: "Game Developer",
            place: "RottenDoge",
            link: "https://www.roblox.com/communities/34121244/RottenDoge#!/about",
            date: "Oct 2024 - Now",
            platform: "roblox"
        },
        {
            image: "/experience/ghost.png",
            title: "Game Developer",
            place: "Ghost Extermination Company",
            link: "https://www.roblox.com/communities/14813831/Ghost-Extermination-Company#!/about",
            date: "Sept 2023 - July 2024",
            platform: "roblox"
        },
        {
            image: "/experience/ntun.png",
            title: "Student",
            place: "NTUN",
            link: "http://ntun.ac.th/",
            date: "2021 - Now",
            platform: "school"
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
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                    <div className="flex items-start gap-3 min-w-0">
                                        <div className="relative shrink-0 mt-0.5">
                                            <Image
                                                src={exp.image}
                                                alt={exp.place}
                                                height={40}
                                                width={40}
                                                className="rounded-xl border border-zinc-100 shadow-sm object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col min-w-0">
                                            <Link
                                                href={exp.link as any}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base md:text-lg font-semibold text-zinc-900 group-hover:text-blue-700 transition-colors inline-flex items-center gap-1 truncate"
                                            >
                                                {exp.place}
                                                <span className="text-[11px] opacity-50">↗</span>
                                            </Link>

                                            <h3 className="text-sm md:text-[15px] text-zinc-600 leading-snug">
                                                {exp.title}
                                            </h3>

                                            <div className="mt-2 flex flex-wrap gap-2">
                                                <Badge text={meta.label} className={cn('text-xs font-medium', meta.badgeClass)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-zinc-400 sm:pt-1">
                                        <Badge text={exp.date} className="bg-white text-zinc-700 font-semibold text-sm border border-zinc-200/70" />
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
