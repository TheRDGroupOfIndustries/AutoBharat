'use client';

import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';

interface BlogContentProps {
    featuredPost: any;
    otherPosts: any[];
}

export function BlogContent({ featuredPost, otherPosts }: BlogContentProps) {
    const sidebarPosts = otherPosts.slice(0, 3);
    const gridPosts = otherPosts.slice(3);

    return (
        <section className="relative bg-[#020617] py-24 overflow-hidden">
            {/* Background Aesthetic Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        animate={{
                            scale: [1, 1.02, 1],
                            opacity: [1, 0.9, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl md:text-6xl font-black inline-block relative text-white tracking-tighter"
                    >
                        Automotive <span className="text-white">Blog</span>
                        <motion.div
                            animate={{ width: ["100%", "120%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F97316] rounded-full shadow-[0_0_15px_#F97316]"
                        />
                    </motion.h2>
                </div>

                {/* Primary Row: 1 Featured + 3 Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
                    <div className="lg:col-span-2">
                        {featuredPost && (
                            <BlogCard post={featuredPost} featured={true} />
                        )}
                    </div>

                    <div className="flex flex-col justify-start gap-8">
                        {sidebarPosts.map((post: any) => (
                            <BlogCard key={post._id || post.title} post={post} featured={false} />
                        ))}
                    </div>
                </div>

                {/* Secondary Grid: Remaining Posts */}
                {gridPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridPosts.map((post: any) => (
                            <BlogCard key={post._id || post.title} post={post} featured={false} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
