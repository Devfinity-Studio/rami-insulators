'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    // Handle entry stagger animation for desktop nav items
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".nav-item", {
                opacity: 0,
                y: -10,
                stagger: 0.1,
                duration: 1,
                ease: "expo.out"
            });
        });
        return () => ctx.revert();
    }, []);

    // Monitor scroll position to handle layout transitions
    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const pages = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#2b6495] to-[#d35422] z-[999]"
                style={{ width: scaleProgress }}
            />

            {/* Main Header Container */}
            <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none flex justify-center">
                <motion.header
                    animate={{
                        y: isScrolled ? 16 : 0,
                        width: isScrolled ? "80%" : "100%",
                        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(229, 229, 229, 1)",
                        color: isScrolled ? "#ffffff" : "#444444",
                        borderRadius: isScrolled ? "24px" : "0px",
                        boxShadow: isScrolled ? "0px 10px 30px rgba(0, 0, 0, 0.3)" : "0px 0px 0px rgba(0, 0, 0, 0)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="pointer-events-auto backdrop-blur-xl border-b border-[#2c4468]/30 font-orbitron"
                >
                    {/* Inner wrapper handles vertical shrinking via dynamic padding */}
                    <motion.div
                        animate={{
                            paddingTop: isScrolled ? "0.5rem" : "1rem",   // py-2 vs py-4
                            paddingBottom: isScrolled ? "0.5rem" : "1rem"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
                    >
                        {/* Shrunk Logo Wrapper */}
                        <motion.div
                            className="inline-block text-left origin-left"
                            animate={{ scale: isScrolled ? 0.8 : 1 }} // Shrinks logo size smoothly down to 80%
                            whileHover={{ scale: isScrolled ? 0.85 : 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Link href="/" className="block">
                                <Image
                                    src="/logo.png"
                                    alt="Rami Insulators"
                                    width={250}
                                    height={200}
                                    className={`w-auto h-auto transition-all duration-300 ${isScrolled ? 'brightness-0 invert' : ''}`}
                                    priority
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase">
                            {pages.map((link) => (
                                <motion.div
                                    key={link.href}
                                    className="nav-item"
                                    whileHover={{ scale: 1.15, rotate: -1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`px-4 py-1 rounded-xl transition-all duration-300 ${
                                            pathname === link.href
                                                ? 'bg-[#d35422] text-black shadow-md'
                                                : isScrolled ? 'hover:text-[#2b6495] text-white' : 'hover:text-[#2b6495] text-[#444444]'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="md:hidden focus:outline-none"
                            onClick={() => setIsOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu className={`w-7 h-7 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-black'}`} />
                        </motion.button>
                    </motion.div>

                    {/* Mobile Drawer Container */}
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                <motion.div
                                    initial={{ x: '100%', opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: '100%', opacity: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#111111] to-[#1c1c1c] backdrop-blur-md shadow-2xl z-50 flex flex-col border-l border-[#2e486d]/20 rounded-l-xl"
                                >
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex items-center justify-between p-4 border-b border-[#2e486d]/20"
                                    >
                                        <span className="text-lg font-semibold text-white">Navigation</span>
                                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                                            <X className="w-6 h-6 text-white" />
                                        </button>
                                    </motion.div>

                                    <nav className="flex flex-col mt-6 px-6 space-y-6 text-base font-medium">
                                        {pages.map((link, i) => (
                                            <motion.div
                                                key={link.href}
                                                initial={{ x: 40, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1, type: 'spring' }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`block py-2 px-3 rounded-lg transition-all duration-300 ${pathname === link.href ? 'bg-[#d35422] text-black' : 'text-white hover:text-[#e0842d]'}`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black z-40 md:hidden"
                                    onClick={() => setIsOpen(false)}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </motion.header>
            </div>
        </>
    );
}