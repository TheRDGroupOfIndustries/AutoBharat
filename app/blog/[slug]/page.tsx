import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";

const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  excerpt,
  mainImage,
  body,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post = await client.fetch(query, { slug });

    // Fallback for malformed slugs (e.g., those with spaces that got encoded)
    if (!post) {
        const decodedSlug = decodeURIComponent(slug);
        post = await client.fetch(query, { slug: decodedSlug });

        // Final fallback: check all posts if still not found (handles hidden characters or complex encoding)
        if (!post) {
            const allPosts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
            const matchedSlug = allPosts.find((p: any) => p.slug === decodedSlug || p.slug === slug)?.slug;
            if (matchedSlug) {
                post = await client.fetch(query, { slug: matchedSlug });
            }
        }
    }

    if (!post) {
        notFound();
    }

    const imageUrl = post.mainImage?.asset?._ref
        ? urlFor(post.mainImage).url()
        : null;

    return <BlogPostContent post={post} imageUrl={imageUrl} />;
}
