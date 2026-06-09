"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Review {
    id: number;
    name: string;
    role: string;
    company: string;
    rating: number;
    text: string;
    initials: string;
    bgClass: string;
}

const reviewsData: Review[] = [
    { id: 1, name: "Arvind Mehta", role: "Plant Operations Chief", company: "Gujarat Petrochem", rating: 5, text: "The high-temperature rockwool insulation setup delivered on Plot 226 completely stabilized our steam distribution grid loop. Excellent work on the aluminum cladding joints.", initials: "AM", bgClass: "bg-orange-500" },
    { id: 2, name: "Sarah D'Souza", role: "Procurement Manager", company: "Matrix Pharma Systems", rating: 5, text: "Incredibly impressed with their sterile acoustic barriers and pipe wrap application. They completed the cleanroom maintenance shutdown turn ahead of schedule.", initials: "SD", bgClass: "bg-blue-600" },
    { id: 3, name: "K. Raghunath", role: "Cryogenics Lead Engineer", company: "IndoGas Logistics", rating: 5, text: "Their cellular glass cold insulation execution is exceptional. Vapor barriers are flawlessly structured, effectively eliminating sub-zero moisture accumulation entirely.", initials: "KR", bgClass: "bg-cyan-600" },
    { id: 4, name: "Vikram Shah", role: "HSE Safety Inspector", company: "Western Refineries", rating: 5, text: "Top-tier personnel protection insulation blankets. Surface heat metrics plummeted immediately to completely safe touch margins. Absolute compliance guaranteed.", initials: "VS", bgClass: "bg-slate-700" },
    { id: 5, name: "Nisha Patel", role: "Infrastructure Director", company: "Apex Chemicals India", rating: 4, text: "High quality materials used for our storage tank cladding infrastructure. The turnkey velocity minimized standard chemical processing layout delays.", initials: "NP", bgClass: "bg-amber-600" },
    { id: 6, name: "Rajesh Gaekwad", role: "Chief Operating Officer", company: "Baroda Fertilizer Corp", rating: 5, text: "Legacy reliability is clearly evident in their work. The removable insulation mattresses they fabricated for our high-wear valves make regular inspection cycles a breeze.", initials: "RG", bgClass: "bg-emerald-600" },
    { id: 7, name: "David Miller", role: "Project Lead", company: "EuroThermal Engineering", rating: 5, text: "Superb alignment with ASTM structural standards. Their technical estimator team provided precision metric breakdowns that matched our CAD profiles perfectly.", initials: "DM", bgClass: "bg-indigo-600" },
    { id: 8, name: "Ananya Iyer", role: "EHS Manager", company: "Sun Pharma Sectors", rating: 4, text: "The acoustic attenuation arrays installed around our heavy power-generation turbines dropped ambient decibels down to regulatory comfort tiers.", initials: "AI", bgClass: "bg-rose-600" },
    { id: 9, name: "Hitesh Amin", role: "Maintenance Supervisor", company: "Nandesari Utilities", rating: 5, text: "Operating right in the local GIDC cluster makes dispatch incredibly swift. They countered a massive pipeline condensation crisis for us in less than 24 hours.", initials: "HA", bgClass: "bg-teal-600" },
    { id: 10, name: "Marcus Vance", role: "Lead Auditor", company: "Global Energy Assessors", rating: 5, text: "Rigorous thermal retention capabilities. The PIR insulation tracking metrics show a direct reduction in overhead carbon emissions due to diminished energy bleed.", initials: "MV", bgClass: "bg-purple-600" },
    { id: 11, name: "Pranav Joshi", role: "VP Operations", company: "GACL Industrial", rating: 5, text: "Superb execution on the protective weather jackets. The stainless steel cladding withstands the harsh ambient chemical vapor environment without any corrosion signs.", initials: "PJ", bgClass: "bg-sky-600" },
    { id: 12, name: "Elena Rostova", role: "Supply Chain Manager", company: "Vanguard Cryo-Tech", rating: 5, text: "Elite cryogenic thermal defense performance. The liquid gas pipeline lines stayed completely free of ice-crust buildup over months of intense operation.", initials: "ER", bgClass: "bg-violet-600" },
    { id: 13, name: "Sanjay Singhania", role: "Chief Architect", company: "Sanjay Structural Hub", rating: 4, text: "Excellent pre-insulated framework deliveries. Joint interlocking structural features were crafted beautifully to seamlessly match complex spatial isometric angles.", initials: "SS", bgClass: "bg-fuchsia-600" },
    { id: 14, name: "Clara Wong", role: "Technical Director", company: "Pacific Energy Corp", rating: 5, text: "Their customized, reusable thermal insulation jackets are phenomenal. Easily detachable and perfectly tight, reducing standard facility check durations significantly.", initials: "CW", bgClass: "bg-lime-700" },
    { id: 15, name: "Devendra Amin", role: "Senior Consultant", company: "Baroda Thermal Power", rating: 5, text: "Over 50 years of family field experience clearly reflects in their on-site operations layout. They understand the structural stress dynamics of boilers better than anyone.", initials: "DA", bgClass: "bg-orange-600" },
];

const chunkReviews = (arr: Review[], size: number): Review[][] => {
    const chunks: Review[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

export default function ReviewScroller() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAnimating = useRef(false);
    const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

    const reviewPairs = chunkReviews(reviewsData, 2);
    const totalPairs = reviewPairs.length;

    // Primary animation slide driver code
    const slideTo = (targetIndex: number) => {
        if (!sliderRef.current) return;
        isAnimating.current = true;

        gsap.to(sliderRef.current, {
            xPercent: -(targetIndex * 100),
            duration: 1.2,
            ease: "back.out(1.1)",
            onComplete: () => {
                setCurrentIndex(targetIndex);
                isAnimating.current = false;
            },
        });
    };

    // Helper handling automatic timeline forwarding mechanics
    const moveNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex < totalPairs - 1 ? prevIndex + 1 : 0;
            slideTo(nextIndex);
            return nextIndex;
        });
    };

    const movePrev = () => {
        setCurrentIndex((prevIndex) => {
            const prevTarget = prevIndex > 0 ? prevIndex - 1 : totalPairs - 1;
            slideTo(prevTarget);
            return prevTarget;
        });
    };

    // Setup the primary 5-second automatic rotation loop layout
    const startAutoPlay = () => {
        stopAutoPlay(); // Insurance clear-out
        autoPlayTimer.current = setInterval(() => {
            if (!isAnimating.current) {
                moveNext();
            }
        }, 5000); // 5000ms custom intervals
    };

    const stopAutoPlay = () => {
        if (autoPlayTimer.current) {
            clearInterval(autoPlayTimer.current);
            autoPlayTimer.current = null;
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay(); // Unmount cleaner cycle
    }, []);

    // Intercepting manual click sequences to reset timer loop cleanly
    const handleNextClick = () => {
        if (isAnimating.current) return;
        stopAutoPlay();
        moveNext();
        startAutoPlay();
    };

    const handlePrevClick = () => {
        if (isAnimating.current) return;
        stopAutoPlay();
        movePrev();
        startAutoPlay();
    };

    const handleDotClick = (index: number) => {
        if (isAnimating.current || index === currentIndex) return;
        stopAutoPlay();
        setCurrentIndex(index);
        slideTo(index);
        startAutoPlay();
    };

    return (
        <section className="bg-slate-50 py-24 px-6 border-b border-slate-200 overflow-hidden">
            <div className="max-w-6xl w-full mx-auto space-y-12">

                {/* Navigation Headings Panel */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-2 text-left">
                        <span className="text-xs font-mono tracking-widest text-[#ed8221] uppercase font-bold">Field Assessments</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Industrial Endorsements</h2>
                    </div>

                    {/* Button Interactive Controls */}
                    <div className="flex items-center space-x-3 flex-shrink-0">
                        <button
                            onClick={handlePrevClick}
                            className="p-3 bg-white border border-slate-200 text-slate-800 rounded-xl hover:border-[#ed8221] hover:text-[#ed8221] active:scale-95 transition-all shadow-sm"
                            aria-label="Previous pair of reviews"
                        >
                            <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="black" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNextClick}
                            className="p-3 bg-white border border-slate-200 text-slate-800 rounded-xl hover:border-[#ed8221] hover:text-[#ed8221] active:scale-95 transition-all shadow-sm"
                            aria-label="Next pair of reviews"
                        >
                            <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="black" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Outer Masking Bounds */}
                <div className="w-full overflow-hidden">
                    {/* Horizontal Multi-Pair Sliding Track */}
                    <div ref={sliderRef} className="flex w-full whitespace-nowrap">

                        {reviewPairs.map((pair, pairIdx) => (
                            <div
                                key={pairIdx}
                                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 whitespace-normal normal-case"
                            >
                                {pair.map((review) => (
                                    <div
                                        key={review.id}
                                        className="w-full bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
                                    >
                                        <div className="space-y-4">
                                            {/* Rating Array Layout */}
                                            <div className="flex space-x-1">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className={`w-4 h-4 ${index < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Review Copy text */}
                                            <p className="text-slate-700 text-sm md:text-base leading-relaxed italic font-normal text-left">
                                                &ldquo;{review.text}&rdquo;
                                            </p>
                                        </div>

                                        {/* Metadata Footprint Row */}
                                        <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                                            <div className={`w-12 h-12 rounded-xl text-white font-mono font-bold text-sm flex items-center justify-center shadow-inner flex-shrink-0 ${review.bgClass}`}>
                                                {review.initials}
                                            </div>

                                            <div className="text-left overflow-hidden">
                                                <h4 className="text-base font-black text-slate-950 truncate leading-snug">{review.name}</h4>
                                                <p className="text-xs text-slate-500 font-medium truncate uppercase tracking-wider">
                                                    {review.role} &bull; <span className="text-slate-400">{review.company}</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                                {/* Grid placeholder layout balancing block if odd element trail happens */}
                                {pair.length === 1 && (
                                    <div className="w-full bg-slate-100/40 border border-dashed border-slate-200 rounded-3xl p-8 hidden md:flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-wider">
                                        End of Ledger Index
                                    </div>
                                )}

                            </div>
                        ))}

                    </div>
                </div>

                {/* Lower Pagination Dots Indicators Grid Layout */}
                <div className="flex justify-center items-center space-x-2 pt-2">
                    {Array.from({ length: totalPairs }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#ed8221]" : "w-2 bg-slate-200 hover:bg-slate-300"}`}
                            aria-label={`Jump directly to page layout pair index ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}