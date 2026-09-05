"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import type { Projects } from "@/types/project.type";

export const ProjectCard = ({
  project,
  setSelectedImage,
}: {
  project: Projects;
  setSelectedImage: (image: { src: string; alt: string }) => void;
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        disabled={imageError}
        onClick={() =>
          setSelectedImage({ src: project.image, alt: project.title })
        }
        className="relative block aspect-[4/3] w-full cursor-zoom-in disabled:cursor-default overflow-hidden bg-muted text-left"
        aria-label={
          imageError
            ? `Preview unavailable for ${project.title}`
            : `Enlarge image of ${project.title}`
        }
      >
        {imageError ? (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary px-6 text-center">
            <span className="text-2xl font-bold text-primary">
              {project.title}
            </span>
            <span className="text-xs text-muted-foreground">
              Preview unavailable
            </span>
          </span>
        ) : (
          <Image
            onError={() => setImageError(true)}
            src={project.image}
            alt={project.title}
            // unoptimized={project.image.startsWith("https://")}
            fill
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 360px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {!imageError && (
          <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center bg-background/95 text-primary">
            <Maximize2 className="size-4" />
          </span>
        )}
      </button>
      <div className="mt-5 flex items-center justify-between gap-3 text-[10px] tracking-wider text-muted-foreground">
        <span>
          {project.category.toUpperCase()} / {project.year}
        </span>
        <span>{project.type}</span>
      </div>
      <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-4 mb-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {project.stacks.map((stack) => (
          <span key={stack}>{stack}</span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-5 border-t border-border pt-4 text-sm text-primary">
        {project.linkGithub && (
          <a
            className="text-link"
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source <ArrowUpRight className="size-4" />
          </a>
        )}
        {project.linkWebsite && (
          <a
            className="text-link"
            href={project.linkWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website <ArrowUpRight className="size-4" />
          </a>
        )}
        {project.linkRoblox && !project.linkWebsite && (
          <a
            className="text-link"
            href={project.linkRoblox}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Roblox <ArrowUpRight className="size-4" />
          </a>
        )}
        {!project.linkGithub &&
          !project.linkWebsite &&
          !project.linkRoblox && (
            <span className="text-xs text-muted-foreground">
              {project.type === "Private"
                ? "Private project"
                : "Project showcase"}
            </span>
          )}
      </div>
    </article>
  );
};
