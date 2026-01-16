'use client';

import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';

interface BlogCardProps {
    post: any;
    featured?: boolean;
}

export function BlogCard({ post, featured }: BlogCardProps) {
    const imageUrl = post.mainImage?.asset?._ref
        ? urlFor(post.mainImage).url()
        : (post.imageUrl || "https://via.placeholder.com/600x400");

    if (featured) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.005 }}
                className="group relative bg-[#020617] border border-white/10 md:border-2 md:border-blue-600/50 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)] transition-all duration-500 flex flex-col min-h-[220px] md:h-[850px]"
            >
                <div className="relative h-[140px] md:h-[40%] overflow-hidden border-b border-white/5 ">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4 md:p-8 flex flex-col justify-between flex-grow gap-2 md:gap-0">
                    <div>
                        <h3 className="text-base md:text-4xl font-bold md:font-black mb-0 md:mb-4 leading-tight text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1 md:line-clamp-none">
                            {post.title}
                        </h3>
                        <p className="text-gray-500 md:text-gray-400 text-[10px] md:text-base mt-1 md:mt-0 line-clamp-1 md:line-clamp-4 font-medium leading-relaxed">
                            {post.excerpt || post.description}
                        </p>
                    </div>
                    <div className="mt-auto md:mt-6">
                        <a href={`/blog/${post.slug?.current}`} className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-300 transform active:scale-95 shadow-lg shadow-red-600/20">
                            Read More
                        </a>
                        <a href={`/blog/${post.slug?.current}`} className="md:hidden text-red-500 font-bold text-sm tracking-wider hover:text-red-400 transition-colors">
                            Read More
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="group flex flex-col bg-[#020617] border border-white/10 overflow-hidden rounded-2xl hover:border-blue-500/40 transition-all duration-500 min-h-[220px] md:h-[260px]"
        >
            <div className="relative h-[140px] md:h-[60%] overflow-hidden border-b border-white/5">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow gap-2">
                <div>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 leading-snug">
                        {post.title}
                    </h4>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1 line-clamp-1 leading-relaxed">
                        {post.excerpt || post.description}
                    </p>
                </div>
                <button className="text-red-500 font-bold text-sm md:text-md tracking-wider hover:text-red-400 transition-colors text-left">
                    Read More
                </button>
            </div>
        </motion.div>
    );
}
