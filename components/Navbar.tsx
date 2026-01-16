'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Blogs", href: "#blogs" },
        { name: "Contact", href: "#contact" }
    ];

    const overlayVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-pacifico text-white cursor-pointer relative z-50"
                    >
                        TheAutoBharat
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ y: -2 }}
                                href={link.href}
                                className="text-gray-300 hover:text-red-500 font-medium transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Lifted out of motion.nav to avoid stacking context issues */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        className="fixed inset-0 bg-black z-[100] flex flex-col md:hidden"
                    >
                        {/* Overlay Header to keep Logo and Close button visible */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <div className="text-2xl font-pacifico text-white">TheAutoBharat</div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Centered Links */}
                        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    variants={linkVariants}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-bold text-white hover:text-red-500 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
