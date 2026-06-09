"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLSectionElement>(null);
    const quotesRef = useRef<HTMLSectionElement>(null);
    const milestonesRef = useRef<HTMLSectionElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Cinematic Entry for Hero Area
            const heroTl = gsap.timeline();
            heroTl.fromTo(
                ".animate-hero-tag",
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
            ).fromTo(
                ".animate-hero-title",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            ).fromTo(
                ".animate-hero-desc",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            ).fromTo(
                ".animate-stat-card",
                { opacity: 0, scale: 0.95, y: 15 },
                { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
                "-=0.4"
            );

            // 2. Sequential Cascade for Director Quotes
            gsap.fromTo(
                ".director-card",
                { opacity: 0, y: 40, rotateX: -5 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: quotesRef.current,
                        start: "top 75%",
                    }
                }
            );

            // 3. Staggered Timeline Track Reveal
            gsap.fromTo(
                ".timeline-node",
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: milestonesRef.current,
                        start: "top 70%",
                    }
                }
            );

            // 4. Operational Pillars Smooth Slide-in
            gsap.fromTo(
                ".pillar-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".pillars-section",
                        start: "top 75%",
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden selection:bg-[#ed8221] selection:text-white antialiased">

            {/* ========================================================= */}
            {/* 1. EXPANDED SPACE HEADER ZONE (Premium Structural Spacing) */}
            {/* ========================================================= */}
            <section ref={heroRef} className="relative pt-44 pb-32 px-6 bg-white border-b border-slate-200/80">
                {/* Architectural Subtle Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>

                <div className="max-w-6xl w-full mx-auto relative z-10 text-center space-y-8">
                    <div className="animate-hero-tag inline-flex items-center space-x-2 bg-orange-50 border border-orange-200/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-[#ed8221] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed8221] animate-pulse"></span>
                        <span>Est. 1970 // Heavy Engineering Corridors</span>
                    </div>

                    <h1 className="animate-hero-title text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-950 leading-[1.05]">
                        Over 50 Years of <br className="hidden md:inline" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed8221] via-amber-600 to-[#ed8221] bg-[size:200%_auto] animate-pulse">
              Thermal Defenses.
            </span>
                    </h1>

                    <p className="animate-hero-desc text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed pt-2">
                        Engineering structural insulation cladding matrices, sub-zero cryogenic wraps, and heavy-duty acoustic suppression installations across India's foundational industrial sectors.
                    </p>

                    {/* Large Architectural Data Scorecard */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12">
                        <div className="animate-stat-card p-6 bg-slate-50/50 rounded-2xl border border-slate-200 backdrop-blur-sm text-left">
                            <div className="text-4xl font-black text-slate-950">50+</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pt-1">Years of History</div>
                        </div>
                        <div className="animate-stat-card p-6 bg-slate-50/50 rounded-2xl border border-slate-200 backdrop-blur-sm text-left">
                            <div className="text-4xl font-black text-slate-950">1987</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pt-1">Rami Incorporation</div>
                        </div>
                        <div className="animate-stat-card p-6 bg-slate-50/50 rounded-2xl border border-slate-200 backdrop-blur-sm text-left">
                            <div className="text-4xl font-black text-slate-950">26+</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pt-1">MD Yrs Experience</div>
                        </div>
                        <div className="animate-stat-card p-6 bg-slate-50/50 rounded-2xl border border-slate-200 backdrop-blur-sm text-left">
                            <div className="text-4xl font-black text-slate-950">GIDC</div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pt-1">Nandesari Facility</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* 2. CHRONOLOGICAL MILESTONES (Expanded Corporate Track) */}
            {/* ========================================================= */}
            <section ref={milestonesRef} className="py-32 px-6 max-w-5xl mx-auto">
                <div className="text-center space-y-3 mb-20">
                    <span className="text-xs font-mono tracking-widest text-[#ed8221] uppercase font-bold">Historical Audits</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">Evolutionary Track & Milestones</h2>
                </div>

                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-16">

                    {/* Milestone 1: 1970 */}
                    <div className="timeline-node relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-[#ed8221] shadow group-hover:scale-125 transition-transform"></div>
                        <div className="absolute left-[-130px] top-0 hidden md:block text-right w-24">
                            <span className="text-2xl font-black text-slate-950">1970</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xl font-bold text-slate-950 block md:hidden">1970 // Core Origins</span>
                            <h3 className="text-xl font-bold text-slate-900 hidden md:block">Core Origins & Founding</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                                Fulabhai Gohil builds initial localized thermal containment arrays, serving the region's emerging steam lines, boilers, and basic processing facilities.
                            </p>
                        </div>
                    </div>

                    {/* Milestone 2: 1987 */}
                    <div className="timeline-node relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-[#ed8221] shadow group-hover:scale-125 transition-transform"></div>
                        <div className="absolute left-[-130px] top-0 hidden md:block text-right w-24">
                            <span className="text-2xl font-black text-slate-950">1987</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xl font-bold text-slate-950 block md:hidden">1987 // Rami Operations</span>
                            <h3 className="text-xl font-bold text-slate-900 hidden md:block">Rami Operations Infrastructure</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                                Expansion of public enterprise contracting capabilities. Integrating mineral rockwool and specialized insulation configurations to meet scaling petrochemical facility specifications.
                            </p>
                        </div>
                    </div>

                    {/* Milestone 3: 2000 */}
                    <div className="timeline-node relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow group-hover:scale-125 transition-transform"></div>
                        <div className="absolute left-[-130px] top-0 hidden md:block text-right w-24">
                            <span className="text-2xl font-black text-blue-600">2000</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xl font-bold text-blue-600 block md:hidden">2000 // Technological Shift</span>
                            <h3 className="text-xl font-bold text-slate-900 hidden md:block">Technological Shift & Cryogenics</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                                Raghuvir Gohil steps in, launching specialized dual-barrier polyisocyanurate (PIR) layouts for ultra-low temperature, sub-zero liquid gas lines.
                            </p>
                        </div>
                    </div>

                    {/* Milestone 4: Modern Era */}
                    <div className="timeline-node relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-slate-950 shadow group-hover:scale-125 transition-transform"></div>
                        <div className="absolute left-[-130px] top-0 hidden md:block text-right w-24">
                            <span className="text-2xl font-black text-slate-950">Present</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xl font-bold text-slate-950 block md:hidden">Present // Multi-Corridor Systems</span>
                            <h3 className="text-xl font-bold text-slate-900 hidden md:block">Multi-Corridor Pre-Insulated Frameworks</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                                Running automated high-speed aluminum cladding mills out of Nandesari GIDC to serve chemical, pharmaceutical, and energy networks pan-India.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* 3. CINEMATIC DIRECTORS' QUOTES SECTION (GSAP Driven) */}
            {/* ========================================================= */}
            <section ref={quotesRef} className="py-32 px-6 bg-white border-y border-slate-200/60 perspective-1000">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center space-y-2 mb-20">
                        <span className="text-xs font-mono tracking-widest text-[#ed8221] uppercase font-bold">Executive Council</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">Directorate Insights</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                        {/* Director Card 1 */}
                        <div className="director-card p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-200/80 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-4 right-6 text-8xl font-serif text-slate-200 pointer-events-none select-none group-hover:text-orange-200 transition-colors">“</div>
                            <div className="space-y-6 relative z-10">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-slate-950">Fulabhai Gohil</h3>
                                    <p className="text-xs font-mono tracking-widest text-[#ed8221] uppercase font-bold">Founder Director</p>
                                </div>
                                <p className="text-base text-slate-700 leading-relaxed italic font-normal">
                                    &ldquo;For over 50 years, our principle has stayed uncompromised: true thermal insulation protection isn't merely an energy asset—it is the foundational core that shields operational staff, preserves resources, and drives optimal safety across volatile environments.&rdquo;
                                </p>
                            </div>
                            <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Inception Anchor // 1970</span>
                                <span className="bg-orange-100 text-[#ed8221] px-2.5 py-1 rounded-md font-bold">50+ Yrs Track Record</span>
                            </div>
                        </div>

                        {/* Director Card 2 */}
                        <div className="director-card p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-200/80 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-4 right-6 text-8xl font-serif text-slate-200 pointer-events-none select-none group-hover:text-blue-200 transition-colors">“</div>
                            <div className="space-y-6 relative z-10">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-slate-950">Raghuvir Gohil</h3>
                                    <p className="text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">Managing Director</p>
                                </div>
                                <p className="text-base text-slate-700 leading-relaxed italic font-normal">
                                    &ldquo;Stepping into the industry in 2000, our focus has been bringing advanced technological parity to cold insulation and cryogenic setups. Today, we mix legacy reliability with smart automated cladding structures to withstand severe logistical parameters.&rdquo;
                                </p>
                            </div>
                            <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Modern Track Launch // 2000</span>
                                <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md font-bold">26 Yrs Experience</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* 4. NEW ADDITION: OPERATIONAL PILLARS SECTION */}
            {/* ========================================================= */}
            <section className="pillars-section py-32 px-6 max-w-6xl mx-auto">
                <div className="text-center space-y-3 mb-20">
                    <span className="text-xs font-mono tracking-widest text-amber-600 uppercase font-bold">Strategic Standards</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">Our Operational Pillars</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="pillar-card p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ed8221] flex items-center justify-center font-black">01</div>
                        <h4 className="text-lg font-bold text-slate-950">Material Authenticity</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Sourcing certified high-density polyisocyanurate and raw glass blankets to match international ASTM standards.</p>
                    </div>

                    <div className="pillar-card p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">02</div>
                        <h4 className="text-lg font-bold text-slate-950">Safety Frameworks</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Rigorous HSE containment routines protecting on-site technicians across elevated or confined high-temp setups.</p>
                    </div>

                    <div className="pillar-card p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">03</div>
                        <h4 className="text-lg font-bold text-slate-950">Cladding Precision</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Precision-engineered locking joints that protect underlying materials from severe weather and rust build-up.</p>
                    </div>

                    <div className="pillar-card p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-950 flex items-center justify-center font-black">04</div>
                        <h4 className="text-lg font-bold text-slate-950">Turnkey Velocity</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Fast on-site deployment, minimizing plant shutdown delays during maintenance turnarounds.</p>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* 5. INDUSTRIAL LOGISTICS & GEOLOCATION INFO */}
            {/* ========================================================= */}
            <section className="py-32 px-6 bg-white border-t border-slate-200/80">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                    <div className="md:col-span-2 space-y-6 text-left">
                        <div className="inline-flex items-center space-x-2 text-[#ed8221]">
                            <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="font-mono text-xs font-bold tracking-wider uppercase">Strategic Dispatches Corridor</span>
                        </div>

                        <h3 className="text-3xl font-black text-slate-950 tracking-tight">The Manufacturing Hub</h3>
                        <p className="text-base text-slate-700 leading-relaxed">
                            Based directly within Western India's primary heavy chemicals node, allowing fast raw material dispatch and dynamic on-site engineering setup.
                        </p>

                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                            <p className="text-lg font-mono font-bold text-slate-950 tracking-tight">
                                PLOT NO. 226, NEAR RAILWAY CROSSING,<br />
                                GIDC Industrial Estate, Nandesari,<br />
                                Vadodara, Gujarat 391340
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Logistical Advantages</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ed8221] mt-2 flex-shrink-0"></span>
                                <span>Immediate GIDC highway access for rapid heavy cargo hauling.</span>
                            </div>
                            <div className="flex items-start space-x-3 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                <span>Direct rail-head side pathing for bulk materials distribution.</span>
                            </div>
                            <div className="flex items-start space-x-3 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                                <span>Turnkey engineering project capabilities pan-India.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}