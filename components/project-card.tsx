import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Maximize2 } from "lucide-react";
import type { Projects } from "@/types/project.type";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import { GitHubLight } from "@ridemountainpig/svgl-react";
import { Button } from "./ui/button";

const getTypeColor = (type: string) => {
    switch (type) {
        case "Private":
            return {
                dot: "bg-red-500",
                text: "text-rose-600",
                bg: "bg-red-50",
            };
        case "Public":
            return {
                dot: "bg-emerald-500",
                text: "text-emerald-600",
                bg: "bg-emerald-50",
            };
        case "Work":
            return {
                dot: "bg-blue-500",
                text: "text-blue-600",
                bg: "bg-blue-50",
            };
        default:
            return {
                dot: "bg-zinc-400",
                text: "text-zinc-600",
                bg: "bg-zinc-100",
            };
    }
};

export const ProjectCard = ({
    project,
    setSelectedImage,
}: {
    project: Projects;
    setSelectedImage: (image: { src: string; alt: string }) => void;
}) => {
    const status = getTypeColor(project.type);

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg hover:shadow-black/[0.04]">
            {/* Image */}
            <button
                type="button"
                onClick={() =>
                    setSelectedImage({
                        src: project.image,
                        alt: project.title,
                    })
                }
                className="relative m-2 aspect-16/10 overflow-hidden rounded-xl bg-muted text-left"
                aria-label={`View ${project.title} image`}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.04]" />

                <div className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border border-white/30 bg-white/90 text-zinc-700 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <Maximize2 className="size-3.5" />
                </div>
            </button>

            {/* Content */}
            <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
                {/* Metadata */}
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    {project.type === "RottenDoge" ? (
                        <div className="flex items-center gap-2">
                            <Image
                                src="/experience/rottendoge.png"
                                alt="RottenDoge"
                                width={18}
                                height={18}
                                className="rounded object-contain"
                            />
                            <span>RottenDoge</span>
                        </div>
                    ) : (
                        <span className="flex items-center gap-1.5">
                            <span
                                className={cn(
                                    "size-1.5 rounded-full",
                                    status.dot
                                )}
                            />
                            <span className={status.text}>
                                {project.type}
                            </span>
                        </span>
                    )}

                    {project.year && (
                        <>
                            <span className="text-border">•</span>
                            <span>{project.year}</span>
                        </>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {project.stacks.slice(0, 4).map((tech) => (
                        <Badge
                            key={tech}
                            text={tech}
                            className="border-0 bg-transparent px-0 py-0 text-xs font-normal text-muted-foreground shadow-none"
                        />
                    ))}

                    {project.stacks.length > 4 && (
                        <span className="text-xs text-muted-foreground/60">
                            +{project.stacks.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                {(project.linkGithub ||
                    project.linkWebsite ||
                    project.linkRoblox) && (
                        <div className="mt-5 flex items-center gap-2 border-t border-border/50 pt-4">
                            {project.linkGithub && (
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-muted-foreground"
                                >
                                    <Link
                                        href={project.linkGithub as any}
                                        target="_blank"
                                    >
                                        <GitHubLight className="size-4" />
                                        Source
                                    </Link>
                                </Button>
                            )}

                            {project.linkWebsite && (
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-muted-foreground"
                                >
                                    <Link
                                        href={project.linkWebsite as any}
                                        target="_blank"
                                    >
                                        Website
                                        <ExternalLink className="size-3.5" />
                                    </Link>
                                </Button>
                            )}

                            {project.linkRoblox && !project.linkWebsite && (
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-muted-foreground"
                                >
                                    <Link
                                        href={project.linkRoblox as any}
                                        target="_blank"
                                    >
                                        Roblox
                                        <ExternalLink className="size-3.5" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}
            </div>
        </article>
    );
};
