import type { ReactNode } from 'react'
import { TypeScript, JavaScript, Lua, Python, Nextjs, Bun, ReactDark, TailwindCSS, ShadcnUiLight, TanStack, PrismaLight, RobloxLight, VisualStudioCode, ZedLight, Tauri, GoLight, Java, Hono, ElysiaJS, Cloudflare, VercelLight } from "@ridemountainpig/svgl-react";


import SkillBadge from './SkillBadge';

export default function TechStack() {
    const techStacks: Record<string, { name: string; icon: ReactNode }[]> = {
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
        <section aria-labelledby="tools-title" className="mt-20 grid gap-10 border-t border-border pt-16 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div><p className="eyebrow">04 / THE TOOLKIT</p><h2 id="tools-title" className="section-title">The right tools.<br />Endless possibilities.</h2><p className="mt-5 text-sm text-muted-foreground">A few things I enjoy working with.</p></div>
            <div className="space-y-6">
                {Object.entries(techStacks).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="mb-3 text-xs text-muted-foreground">{category}</h3>
                        <div className="flex flex-wrap gap-2">{items.map((item) => <SkillBadge key={item.name} text={item.name} icon={item.icon} className="rounded-none border-border bg-transparent px-3 py-2 text-xs font-normal" />)}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
