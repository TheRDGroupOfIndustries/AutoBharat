'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

interface BlogCardProps {
    post: any;
    featured?: boolean;
}

export function BlogCard({ post, featured }: BlogCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

    function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRel = event.clientX - rect.left;
        const mouseYRel = event.clientY - rect.top;

        const xPct = mouseXRel / width - 0.5;
        const yPct = mouseYRel / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const imageUrl = post.mainImage?.asset?._ref
        ? urlFor(post.mainImage).url()
        : (post.imageUrl || "https://via.placeholder.com/600x400");

    const slug = post.slug?.current || '';
    const encodedSlug = encodeURIComponent(slug);

    const toPlainText = (blocks: any[] = []) => {
        return blocks
            .map(block => {
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                return block.children.map((child: any) => child.text).join('')
            })
            .join(' ')
    };

    if (featured) {
        const bodyText = toPlainText(post.body);

        return (
            <Link href={`/blog/${encodedSlug}`} className="block perspective-1000">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="group relative bg-[#020617] border border-white/10 md:border-2 md:border-blue-600/50 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)] transition-all duration-500 flex flex-col min-h-[220px] md:h-[850px]"
                >
                    <div className="relative h-[140px] md:h-[40%] overflow-hidden border-b border-white/5 " style={{ transform: "translateZ(30px)" }}>
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 md:p-8 flex flex-col justify-between flex-grow gap-2 md:gap-0" style={{ transform: "translateZ(20px)" }}>
                        <div className="space-y-2 md:space-y-4">
                            <h3 className="text-base md:text-4xl font-bold md:font-black mb-0 md:mb-4 leading-tight text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1 md:line-clamp-none">
                                {post.title}
                            </h3>
                            <p className="text-gray-500 md:text-gray-400 text-[10px] md:text-lg line-clamp-1 md:line-clamp-2 font-semibold md:font-bold leading-relaxed">
                                {post.excerpt || post.description}
                            </p>
                            {/* Body Preview - Desktop Only */}
                            <p className="hidden md:line-clamp-12 text-gray-400 text-base leading-relaxed font-medium">
                                {bodyText}
                            </p>
                        </div>
                        <div className="mt-auto md:mt-6">
                            <motion.span
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:inline-block bg-red-600 group-hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-300 shadow-lg shadow-red-600/20"
                            >
                                Read More
                            </motion.span>
                            <span className="md:hidden text-red-500 font-bold text-sm tracking-wider group-hover:text-red-400 transition-colors">
                                Read More
                            </span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        );
    }

    return (
        <Link href={`/blog/${encodedSlug}`} className="block">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group flex flex-col bg-[#020617] border border-white/10 overflow-hidden rounded-2xl hover:border-blue-500/40 transition-all duration-500 min-h-[220px] md:h-[260px]"
            >
                <div className="relative h-[140px] md:h-[60%] overflow-hidden border-b border-white/5" style={{ transform: "translateZ(20px)" }}>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow gap-2" style={{ transform: "translateZ(10px)" }}>
                    <div>
                        <h4 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 leading-snug">
                            {post.title}
                        </h4>
                        <p className="text-gray-500 text-[10px] md:text-xs mt-1 line-clamp-1 leading-relaxed">
                            {post.excerpt || post.description}
                        </p>
                    </div>
                    <span className="text-red-500 font-bold text-sm md:text-md tracking-wider group-hover:text-red-400 transition-colors text-left">
                        Read More
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
