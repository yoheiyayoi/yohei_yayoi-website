import Image from 'next/image'
import { formatDate } from '@/lib/utils';
import { PostMetadata } from '@/lib/posts';
import Badge from '../Badge';
import { Link } from 'next-view-transitions';

export const BlogCard = ({ blog }: { blog: PostMetadata }) => {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            key={blog.metadata.title}
            className="group flex flex-col gap-6 border-b border-border pb-8 transition-colors hover:text-primary md:flex-row md:gap-9"
        >

            {/* Image */}
            <div className="shrink-0">
                <Image
                    src={blog.metadata.image}
                    alt={blog.metadata.title}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover md:h-44 md:w-64"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between min-w-0 relative">
                <div>
                    <h3 className="text-gray-500 text-sm">
                        <span>{formatDate(blog.metadata.publishDate)}</span>
                    </h3>

                    <h3 className="font-semibold text-xl">
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
