import Image from 'next/image'
import { cn, formatDate } from '@/lib/utils';
import { PostMetadata } from '@/lib/posts';
import Badge from '../Badge';
import { Link } from 'next-view-transitions';

export const BlogCard = ({ blog }: { blog: PostMetadata }) => {
    return (
        <Link
            href={`/blog/${blog.slug}` as any}
            key={blog.metadata.title}
            className="group flex flex-col md:flex-row gap-4 md:gap-6 p-4 rounded-2xl ring-1 ring-black/5 bg-white/40 backdrop-blur-sm hover:bg-slate-50 hover:ring-black/10 hover:scale-[101%] transition"
        >

            {/* Image */}
            <div className="shrink-0">
                <Image
                    src={blog.metadata.image}
                    alt={blog.metadata.title}
                    width={800}
                    height={600}
                    className="w-full md:w-48 md:h-32 object-cover rounded-xl transition-transform duration-300 group-hover/image:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between min-w-0 relative">
                <div>
                    <h3 className="text-gray-500 text-sm">
                        <span>{formatDate(blog.metadata.publishDate)}</span>
                    </h3>

                    <h3 className="font-semibold text-lg">
                        <span>{blog.metadata.title}</span>
                    </h3>

                    <p className="mt-1 text-base text-muted-foreground mb-3">
                        {blog.metadata.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {blog.metadata.tags.map((tag, i) => (
                            <Badge key={i} text={tag} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
