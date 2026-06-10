import React from 'react'
import { TypeScript, JavaScript, Lua, Python, Nextjs, Bun, ReactDark, TailwindCSS, ShadcnUiLight, TanStack, PrismaLight, RobloxLight, VisualStudioCode, ZedLight, Tauri, GoLight, Java, Hono, ElysiaJS, Cloudflare, VercelDark, VercelLight } from "@ridemountainpig/svgl-react";
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import SkillBadge from './SkillBadge';

export default function TechStack() {
    const techStacks: Record<string, { name: string; icon: any }[]> = {
        "Languages & Runtime": [
            { name: "Luau", icon: <Lua /> },
            { name: "Python", icon: <Python /> },
            { name: "TypeScript", icon: <TypeScript /> },
            { name: "JavaScript", icon: <JavaScript /> },
            { name: "Bun", icon: <Bun /> },
        ],

        Frontend: [
            { name: "Next.js", icon: <Nextjs /> },
            { name: "React", icon: <ReactDark /> },
            { name: "TailwindCSS", icon: <TailwindCSS /> },
            { name: "shadcn/ui", icon: <ShadcnUiLight /> },
            { name: "Tanstack", icon: <TanStack /> },
            { name: "Vercel", icon: <VercelLight /> },
        ],

        Backend: [
            { name: "Elysia.js", icon: <ElysiaJS /> },
            { name: "Hono", icon: <Hono /> },
        ],

        "Database & ORM": [
            { name: "Prisma", icon: <PrismaLight /> }
        ],

        Tools: [
            { name: "Roblox Studio", icon: <RobloxLight /> },
            { name: "VSCode", icon: <VisualStudioCode /> },
            { name: "Zed", icon: <ZedLight /> },
        ],

        "Currently Exploring": [
            { name: "Go", icon: <GoLight /> },
            { name: "Java", icon: <Java /> },
            { name: "Tauri", icon: <Tauri /> },
            { name: "Cloudflare", icon: <Cloudflare /> },
        ]
    }

    return (
        <div className="w-full mt-16">
            <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                    Tech Stack
                </h2>
                <p className="monkey-font text-lg md:text-xl gradient-text">Tools ที่ใช้</p>
                <p className="text-muted-foreground text-md">
                    Technologies and tools I work with
                </p>
            </div>

            <div>
                {Object.keys(techStacks).map((category) => (
                    <div key={category} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 mb-4 items-start">
                        <span className="font-semibold pt-1">{category}:</span>
                        <div className="flex flex-wrap gap-1">
                            {techStacks[category].map((item) => (
                                <SkillBadge key={item.name} text={item.name} icon={item.icon} className="bg-white cursor-default" />
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
