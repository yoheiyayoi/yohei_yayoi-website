import { ArrowUpRight, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/blog/blog-card";

export default async function BlogPage() {
  const posts = (await getAllPosts()).filter((post) => post.metadata.published);

  return (
    <div className="site-width section-space">
      <div className="mb-12 border-b border-border pb-10">
        <p className="eyebrow">NOTES / STORIES / THINGS I LEARN</p>
        <h1 className="mt-5 text-4xl tracking-tight md:text-6xl">A curious mind.</h1>
        <p className="mt-6 text-base text-muted-foreground">
          เรื่องเล่า เรื่องราว และสิ่งที่ได้เรียนรู้ระหว่างทาง
        </p>
      </div>

      {posts.length ? (
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} blog={post} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center border border-border px-6 py-14 text-center">
          <BookOpen className="mb-5 size-8 text-primary" strokeWidth={1} />
          <h2 className="text-2xl">More stories, soon.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            ยังไม่มีบทความในตอนนี้ ระหว่างนี้แวะไปดูผลงานของผมก่อนได้ครับ
          </p>
          <a href="/work" className="text-link mt-6 text-sm text-primary">
            Explore my work <ArrowUpRight className="size-4" />
          </a>
        </div>
      )}
    </div>
  );
}
