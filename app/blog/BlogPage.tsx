import { Book, InfoIcon, X } from 'lucide-react'
import React from 'react'
import Image from "next/image";
import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts';
import { BlogCard } from '@/components/blog/blog-card';

export default async function BlogPage() {
    const posts = await getAllPosts();
    const publishedPosts = posts.filter((post) => post.metadata.published);

    return (
        <div className="container max-w-3xl mx-auto py-10">
            <div className="mb-5">
                <h1 className="font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
                    <Book className="w-7 h-7 text-blue-500" />
                    Blogs
                </h1>

                <p className="monkey-font text-lg md:text-xl gradient-text">เรื่องเล่าและเรื่องราว</p>

                <p className="text-md text-zinc-500">
                    พื้นที่เล่าเรื่องราว ความคิด และบันทึกการเดินทาง หรือการระบาย หรืออะไรอีกดี ไม่รู้
                </p>
            </div>

            {publishedPosts.length === 0 ? (
                <Alert>
                    <InfoIcon />
                    <AlertTitle className="font-semibold">ไม่มี Blog อะไรในขณะนี้</AlertTitle>
                </Alert>
            ) : (
                <div className="flex flex-col gap-6">
                    {publishedPosts.map((post) => (
                        <BlogCard key={post.slug} blog={post} />
                    ))}
                </div>
            )}
        </div>
    )
}
