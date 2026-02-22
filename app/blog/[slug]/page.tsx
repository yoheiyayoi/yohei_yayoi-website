import LinkIcon from "@/components/LinkIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon, Shapes, Tags } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Metadata } from "next/types";
import fs from "node:fs";
import path from "node:path";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(await params);
    return {
        title: post.metadata.title,
        description: post.metadata.description,
    };
}

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "data", "blogs");
    const files = fs.readdirSync(dir);
    return files
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => ({ slug: f.replace(".mdx", "") }));
}

async function getPost({ slug }: { slug: string }) {
    try {
        const mdxPath = path.join("data", "blogs", `${slug}.mdx`);
        if (!fs.existsSync(mdxPath)) {
            throw new Error(`MDX file for slug ${slug} does not exist`);
        }

        const { metadata } = await import(`@/data/blogs/${slug}.mdx`);

        const result: PostMetadata = {
            slug,
            metadata,
        };

        return result;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(`Unable to fetch the post for slug: ${slug}`);
    }
}

export default async function Page({
    params,
}: Readonly<{
    params: Promise<{ slug: string }>;
}>) {
    const { slug } = await params;
    const post = await getPost(await params);
    const { default: MDXContent } = await import(`@/data/blogs/${slug}.mdx`);

    return (
        <div className="container max-w-3xl mx-auto py-3">
            <div className="flex flex-col items-center justify-center px-6 ">
                <div className="max-w-custom flex flex-col gap-4 w-full">
                    <LinkIcon href="/blog" text="กลับไปที่ blog" />

                    {post.metadata.image && (
                        <div className="relative mb-6 h-60 w-full overflow-hidden rounded-lg border flex justify-center items-center">
                            <Image
                                src={post.metadata.image}
                                alt={post.metadata.title || ""}
                                className="object-cover"
                                fill
                            />
                        </div>
                    )}

                    <header className="w-full flex flex-col gap-2 pb-4">
                        <h1 className="text-inherit text-xl font-extrabold">
                            {post.metadata.title}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {formatDate(post.metadata.publishDate ?? "")}
                        </p>
                        {/* Category */}
                        {post.metadata.category && (
                            <div className="flex gap-2 justify-start items-center">
                                <Shapes
                                    className="size-5 text-gray-700 dark:text-gray-400"
                                    strokeWidth={1.5}
                                />
                                <p className="text-sm text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                    {post.metadata.category}
                                </p>
                            </div>
                        )}

                        {/* Tags */}
                        {post.metadata.tags && (
                            <div className="flex flex-wrap justify-start items-center gap-2 py-2">
                                <Tags className="size-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground ">Tags</span>
                                {post.metadata.tags.map((tag) => (
                                    <Badge
                                        variant={"secondary"}
                                        key={tag}
                                        className="text-xs shadow-none cursor-pointer font-normal"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </header>

                    <main className="prose dark:prose-invert prose-base">
                        <MDXContent />
                    </main>

                    <div className="border-b border-gray-300" />

                    <LinkIcon href="/blog" text="กลับไปที่ blog" />
                </div>
            </div>
        </div>
    );
}
