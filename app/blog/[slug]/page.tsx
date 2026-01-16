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
    const post = await client.fetch(query, { slug });

    if (!post) {
        notFound();
    }

    const imageUrl = post.mainImage?.asset?._ref
        ? urlFor(post.mainImage).url()
        : null;

    return <BlogPostContent post={post} imageUrl={imageUrl} />;
}
