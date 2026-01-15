import { client } from "@/sanity/lib/client";
import { BlogContent } from "./BlogContent";

export const revalidate = 60; // Revalidate every minute

const query = `*[_type == "post"] | order(featured desc, publishedAt desc) {
  _id,
  title,
  excerpt,
  featured,
  slug,
  mainImage,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`;

export async function Blog() {
    let posts = [];
    try {
        posts = await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch posts from Sanity", error);
    }

    const displayPosts = posts.length > 0 ? posts : [];
    const featuredPost = displayPosts[0];
    const otherPosts = displayPosts.slice(1);

    return <BlogContent featuredPost={featuredPost} otherPosts={otherPosts} />;
}