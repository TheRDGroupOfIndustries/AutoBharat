'use client';

import { motion, Variants } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPostContentProps {
    post: any;
    imageUrl: string | null;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20
        }
    }
};

export default function BlogPostContent({ post, imageUrl }: BlogPostContentProps) {

    return (
        <article className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30">
            {/* Navigation Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="fixed top-0 w-full z-50 p-6"
            >
                <Link
                    href="/#blogs"
                    replace
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold text-sm">Back to Blogs</span>
                </Link>
            </motion.header>

            {/* Hero Image Section */}
            {imageUrl && (
                <div className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
            )}

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-20 md:-mt-32 relative z-20 pb-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-[#0b1120]/90 md:bg-[#0b1120]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 shadow-2xl"
                >
                    {/* Meta Tags */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 text-[10px] md:text-sm text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 bg-white/5 rounded-full">
                            <Calendar className="w-3.5 h-3.5 text-red-500" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        {post.categories?.map((cat: string) => (
                            <div key={cat} className="px-2.5 py-1 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">
                                {cat}
                            </div>
                        ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight md:leading-[1.1] tracking-tighter"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Excerpt */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-gray-300 font-medium mb-8 md:mb-12 leading-relaxed italic border-l-4 border-red-600 pl-4 md:pl-6"
                    >
                        {post.excerpt}
                    </motion.p>

                    {/* Divider */}
                    <motion.hr variants={itemVariants} className="border-white/10 mb-8 md:mb-12" />

                    {/* Body Content */}
                    <motion.div
                        variants={itemVariants}
                        className="prose prose-invert prose-red max-w-none 
                        prose-p:text-gray-300 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed 
                        prose-headings:font-black prose-headings:tracking-tighter
                        prose-strong:text-white prose-strong:font-bold
                        prose-img:rounded-2xl md:prose-img:rounded-3xl prose-img:border prose-img:border-white/10"
                    >
                        <PortableText value={post.body} />
                    </motion.div>
                </motion.div>

                {/* Footer / CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/#contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-600/30"
                    >
                        Share Your Thoughts
                    </Link>
                </motion.div>
            </div>
        </article>
    );
}
