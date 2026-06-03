"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false); // Track if it's client-side

    useEffect(() => {
        // Set isClient to true after the component mounts
        setIsClient(true);
    }, []);

    // This will only run if it's on the client side
    useEffect(() => {
        if (!isClient) return; // Skip this logic if not client-side

        const handleScroll = () => {
            // Toggle `isScrolled` based on scroll position
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]); // Only run this effect if it's client-side

    return (
        <>
            {/* Main Header (Below Topbar) */}
            <header
                className={`fixed top-0 left-0 w-full bg-white p-4 shadow-md z-40
            ${isScrolled ? "!bg-black/70 transition-all !w-[80vw] translate-x-10 translate-y-5 md:translate-x-40 rounded-4xl" : "opacity-100 transition-all translate-x-0"}
            `}
            >
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={200}
                            height={10}
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <nav
                        className={`hidden md:flex space-x-6 text-black text-md ${isScrolled ? "text-white" : ""}`}
                    >
                        <nav
                            className={`hidden md:flex items-center text-black uppercase ${isScrolled ? "text-white" : ""}`}
                        >
                            {/* Products with Dropdown */}
                            <div className="relative group">
                                <Link href="/products">
                                    <button className="hover:text-gray-400 px-4 uppercase whitespace-nowrap">
                                        Page 1
                                    </button>
                                </Link>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute mt-2 w-100 bg-white border p-2 border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-1 gap-4 ${isScrolled ? "!bg-black !text-white !border-black" : ""}`}
                                >
                                    <Link
                                        href="/products#product1"
                                        className={`px-4 py-2 border-b-2 border-black whitespace-nowrap ${isScrolled ? "hover:bg-yellow-300/50 hover:text-black" : "hover:bg-gray-200"}`}
                                    >
                                        product1
                                    </Link>
                                    <Link
                                        href="/products#product2"
                                        className={`px-4 py-2 border-b-2 border-black whitespace-nowrap ${isScrolled ? "hover:bg-yellow-300/50 hover:text-black" : "hover:bg-gray-200"}`}
                                    >
                                        product2
                                    </Link>
                                    <Link
                                        href="/products#product3"
                                        className={`px-4 py-2 border-b-2 border-black whitespace-nowrap ${isScrolled ? "hover:bg-yellow-300/50 hover:text-black" : "hover:bg-gray-200"}`}
                                    >
                                        product3
                                    </Link>
                                    <Link
                                        href="/products#product4"
                                        className={`px-4 py-2 border-b-2 border-black whitespace-nowrap ${isScrolled ? "hover:bg-yellow-300/50 hover:text-black" : "hover:bg-gray-200"}`}
                                    >
                                        product4
                                    </Link>
                                    <Link
                                        href="/products#product5"
                                        className={`px-4 py-2 border-b-2 border-black whitespace-nowrap ${isScrolled ? "hover:bg-yellow-300/50 hover:text-black" : "hover:bg-gray-200"}`}
                                    >
                                        product5
                                    </Link>
                                </div>
                            </div>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/end" className="hover:text-gray-400 px-4 whitespace-nowrap">
                                Page 2
                            </Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/supplies" className="hover:text-gray-400 px-4 whitespace-nowrap">
                                Page 3
                            </Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/contact" className="hover:text-gray-400 px-4 whitespace-nowrap">
                                Contact Us
                            </Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/events" className="hover:text-gray-400 px-4 whitespace-nowrap">
                                Events Gallery
                            </Link>
                        </nav>
                    </nav>
                    {/* Hamburger Menu Button */}
                    <button
                        className={`md:hidden p-2 focus:outline-none
                        ${isScrolled ? "!text-white" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Side Menu (Appears Below Topbar) */}
            <div
                className={`fixed top-[52px] z-50 right-0 h-full w-64 bg-white shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full z-50"
                } transition-transform duration-300 z-30`}
            >
                {/* Close Button & Logo */}
                <div className="flex items-center justify-between p-4 border-b border-black">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={40}
                    />
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} color="black" />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col p-4 space-y-4 text-black">
                    <Link href="/products" className="hover:text-gray-400 px-4">
                        Products
                    </Link>
                    <Link href="/end" className="hover:text-gray-400 px-4">
                        End-End Systems
                    </Link>
                    <Link href="/supplies" className="hover:text-gray-400 px-4">
                        Project Supplies
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400 px-4">
                        Contact Us
                    </Link>
                    <Link href="/events" className="hover:text-gray-400 px-4">
                        Events & Updates
                    </Link>
                </nav>
            </div>
        </>
    );
}