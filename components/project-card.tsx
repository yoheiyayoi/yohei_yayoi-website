import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, MousePointerClick } from 'lucide-react'
import type { Projects } from "@/types/project.type";
import { cn } from '@/lib/utils';
import Badge from './Badge';
import { GitHubLight } from '@ridemountainpig/svgl-react';
import { Button } from './ui/button';

const getTypeColor = (type: string) => {
    switch (type) {
        case "Private":
            return { dot: "bg-red-500", text: "text-rose-600", bg: "bg-red-50", border: "border-red-100" };
        case "Public":
            return { dot: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" };
        case "Work":
            return { dot: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" };
        default:
            return { dot: "bg-gray-500", text: "text-gray-600", bg: "bg-gray-50", border: "border-gray-100" };
    }
};

export const ProjectCard = ({ project, setSelectedImage }: { project: Projects, setSelectedImage: (image: { src: string, alt: string }) => void }) => {
    const isPrivate = project.type === "Private";
    const status = getTypeColor(project.type);

    return (
        <div
            className="group relative flex flex-col h-full rounded-2xl border border-black/5 bg-white/40 backdrop-blur-xl hover:bg-white/70 hover:border-black/10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
        >
            {/* Image Container */}
            <div className="relative aspect-16/10 overflow-hidden m-2 rounded-xl shadow-sm">
                <div
                    className="absolute inset-0 z-10 cursor-pointer"
                    onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient when hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 z-20 flex gap-2">
                    {project.type === "RottenDoge" ? (
                        <Image
                            src="/experience/rottendoge.png"
                            alt="RottenDoge"
                            height={25}
                            width={25}
                            className="rounded-lg shadow-sm object-contain"
                        />
                    ) : (
                        <span className={cn(
                            "px-3 py-1 rounded-lg text-xs font-bold tracking-wider backdrop-blur-md border shadow-sm",
                            status.bg, status.text, status.border
                        )}>
                            {project.type}
                        </span>
                    )}

                    {project.year && (
                        <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/80 text-gray-600 backdrop-blur-md border border-white/20 shadow-sm">
                            {project.year}
                        </span>
                    )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-zinc-900 text-sm font-bold shadow-xl border border-white">
                        <MousePointerClick size={16} className="text-blue-500" />
                        <span>กดคลิกเพื่อซูม</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 px-6 pb-2 pt-2">
                <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-zinc-900">
                        {project.title}
                    </h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-500 line-clamp-2 md:line-clamp-3 mb-4 group-hover:text-zinc-600 transition-colors">
                    {project.description}
                </p>

                {/* Tech Stacks */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stacks.slice(0, 4).map((tech, i) => (
                        <Badge
                            key={i}
                            text={tech}
                            className="bg-zinc-100/30 border-zinc-200/50 text-zinc-500 py-1"
                        />
                    ))}
                    {project.stacks.length > 4 && (
                        <span className="text-[10px] text-zinc-400 self-center px-1">
                            +{project.stacks.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                    {project.linkGithub && (
                        <Link
                            href={project.linkGithub as any}
                            target="_blank"
                            className="w-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Button variant="secondary" className="w-full cursor-pointer">
                                <GitHubLight className="w-5 h-5" /> Source
                            </Button>
                        </Link>
                    )}
                    {project.linkWebsite && (
                        <Link
                            href={project.linkWebsite as any}
                            target="_blank"
                            className="w-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Button className="w-full cursor-pointer">
                                <ExternalLink className="w-5 h-5" /> Website
                            </Button>
                        </Link>
                    )}
                    {project.linkRoblox && !project.linkWebsite && (
                        <Link
                            href={project.linkRoblox as any}
                            target="_blank"
                            className="w-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Button variant="secondary" className="w-full cursor-pointer">
                                <ExternalLink className="w-5 h-5" /> Roblox
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
