"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/app/globals.css";

interface PreloaderProps {
    onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const logoRef = useRef<SVGSVGElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!logoRef.current || !textRef.current) return;

        const paths = logoRef.current.querySelectorAll<SVGPathElement>(".stroke-path");

        paths.forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                fillOpacity: 0,
            });
        });

        gsap.set(textRef.current, { opacity: 0 });

        const tl = gsap.timeline({
            repeat: 1,
            onComplete: () => onComplete?.(),
        });

        tl.to(paths, {
            strokeDashoffset: 0,
            duration: (_, el) => (el as SVGPathElement).getTotalLength() / 100, // Faster animation
            stagger: 0.1,
            ease: "power1.out",
        })
            .to(
                paths,
                {
                    fillOpacity: 1,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=1"
            )
            .to(
                textRef.current,
                {
                    opacity: 1,
                    duration: 0.5,
                    onStart: () => {
                        if (textRef.current) simulateTyping(textRef.current);
                    },
                },
                "+=0.3"
            )
            .call(() => {
                if (textRef.current) eraseTyping(textRef.current);
            }, [], "+=1.5")
            .to(textRef.current, { opacity: 0, duration: 0.3 }, "+=0.8")
            .to(
                paths,
                { fillOpacity: 0, duration: 0.3, stagger: 0.1, ease: "power2.in" },
                "-=1"
            )
            .to(paths, {
                strokeDashoffset: (_, el) => (el as SVGPathElement).getTotalLength(),
                duration: (_, el) => (el as SVGPathElement).getTotalLength() / 100, // Faster animation
                stagger: 0.1,
                ease: "power1.in",
            });
    }, [onComplete]);

    function simulateTyping(element: HTMLDivElement) {
        if (!element) {
            console.warn("simulateTyping called with null element");
            return;
        }

        const text = "RAMI INSULATORS";
        element.innerHTML = "";
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text[index];
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 70);
    }

    function eraseTyping(element: HTMLDivElement) {
        if (!element) return;

        const text = element.innerHTML;
        let index = text.length;
        const erasingInterval = setInterval(() => {
            if (index > 0) {
                element.innerHTML = text.substring(0, index - 1);
                index--;
            } else {
                clearInterval(erasingInterval);
            }
        }, 70);
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white">
            <div className="relative">
                <svg
                    ref={logoRef}
                    width="400"
                    height="184"
                    viewBox="0 0 72 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_2)" strokeWidth={2} fill="none">
                        <path
                            className="stroke-path"
                            d="M30.7074 26.1396L48.1331 0.25H59.5121L30.4966 40.5766L0.497563 0.25H11.8711L30.2963 26.1449L30.5057 26.4392L30.7074 26.1396Z"
                            stroke="#0DB4B2"
                            fill="#0DB4B2"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M63.25 43.75V36.25H70.75V43.75H63.25Z"
                            stroke="#BE5C33"
                            fill="#BE5C33"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M45.25 35.772V25.085L54.75 12.735V35.772H45.25Z"
                            stroke="#4B5DA8"
                            fill="#4B5DA8"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M3.20399 4.75H0.25V0.758117L3.20399 4.75Z"
                            stroke="#056463"
                            fill="#056463"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M59.75 0.775081V4.75H56.8881L59.75 0.775081Z"
                            stroke="#056463"
                            fill="#056463"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M14.7506 35.75H5.25V12.725L14.7784 24.8991L14.7506 35.75Z"
                            stroke="#4B5DA8"
                            fill="#4B5DA8"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M15.4286 36.272L15.4298 36.272L19.75 36.2512V43.75H0.25V36.272H5.65714L15.4286 36.272Z"
                            stroke="#2A3568"
                            fill="#2A3568"
                            strokeWidth="0.5"
                        />
                        <path
                            className="stroke-path"
                            d="M40.25 43.75V36.25H59.75V43.75H40.25Z"
                            stroke="#2A3568"
                            fill="#2A3568"
                            strokeWidth="0.5"
                        />
                    </g>
                </svg>

                {/* Typing Animation Text */}
                <div
                    ref={textRef}
                    className="text-custom mt-5 mr-10 text-6xl min-h-[35px]"
                >
                    &nbsp;
                </div>
            </div>
        </div>
    );
}