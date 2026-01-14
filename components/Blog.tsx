import { client } from "@/sanity/lib/client";
import { BlogCard } from "./BlogCard";

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

    return (
        <section className="relative bg-[#020617] py-24 overflow-hidden">
            {/* Background Aesthetic Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black inline-block relative text-white tracking-tighter">
                        Automotive <span className="text-white">Blog</span>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F97316] rounded-full shadow-[0_0_15px_#F97316]" />
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[400px]">
                    {/* Featured Post - Takes 2 columns */}
                    <div className="lg:col-span-2 h-full">
                        {featuredPost && (
                            <BlogCard post={featuredPost} featured={true} />
                        )}
                    </div>

                    {/* Sidebar / List - Takes 1 column */}
                    <div className="flex flex-col justify-start h-full gap-8">
                        {otherPosts.slice(0, 3).map((post: any) => (
                            <BlogCard key={post._id || post.title} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

