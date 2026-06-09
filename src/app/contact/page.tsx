"use client";

import React from "react";

export default function ContactUs() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden selection:bg-[#ed8221] selection:text-white antialiased">

            {/* ========================================================= */}
            {/* 1. EXPANDED SPACE HEADER ZONE                              */}
            {/* ========================================================= */}
            <section className="relative pt-44 pb-20 px-6 bg-white border-b border-slate-200/80 text-center">
                {/* Subtle Engineering Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>

                <div className="max-w-4xl w-full mx-auto space-y-6 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-[#ed8221] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed8221]"></span>
                        <span>Global Projects & Tenders Allocation</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950">
                        Connect With Our <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed8221] via-amber-600 to-[#ed8221]">
              Engineering Office.
            </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
                        Initiate high-specification estimates, submit tender requests, or arrange an on-site evaluation with our insulation experts.
                    </p>
                </div>
            </section>

            {/* ========================================================= */}
            {/* 2. MAIN COMMUNICATIONS CORE GRID (Perfect Equal Sizing)   */}
            {/* ========================================================= */}
            <section className="py-24 px-6 max-w-6xl w-full mx-auto">
                <div className="lg:flex lg:items-stretch lg:gap-12 space-y-12 lg:space-y-0">

                    {/* Left Column: Equal Height Structured Panels (5 Columns footprint) */}
                    <div className="lg:w-[41.666667%] flex flex-col justify-between space-y-6 lg:space-y-0">
                        <div className="space-y-2 mb-2 lg:mb-4">
                            <h2 className="text-3xl font-black tracking-tight text-slate-950">Inquiry Channels</h2>
                            <p className="text-sm text-slate-500">Reach out directly to relevant technical subdivisions.</p>
                        </div>

                        {/* Direct Flex Container Child Elements designed to stretch equally */}
                        <div className="flex-1 flex flex-col justify-between gap-4">

                            {/* Plant HQ Details Card */}
                            <div className="flex-1 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-center space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ed8221] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke="black" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Manufacturing Facility & HQ</h4>
                                    <p className="text-sm md:text-base font-bold text-slate-950 leading-snug">
                                        PLOT NO. 226, NEAR RAILWAY CROSSING,<br />
                                        GIDC Industrial Estate, Nandesari,<br />
                                        Vadodara, Gujarat 391340
                                    </p>
                                </div>
                            </div>

                            {/* Direct Line / Telecommunications */}
                            <div className="flex-1 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-center space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke="black" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Direct Technical Desk</h4>
                                    <p className="text-lg font-bold text-slate-950 hover:text-[#ed8221] transition-colors">
                                        <a href="tel:+912652840226">+91 265 2840226</a>
                                    </p>
                                    <p className="text-xs text-slate-500">Available Monday through Saturday: 09:00 - 18:00 IST</p>
                                </div>
                            </div>

                            {/* Secure Mailing Links */}
                            <div className="flex-1 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-center space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke="black" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Electronic Documentation & RFPs</h4>
                                    <p className="text-base font-bold text-slate-950 hover:text-[#ed8221] transition-colors">
                                        <a href="mailto:estimates@ramiinsulators.com">estimates@ramiinsulators.com</a>
                                    </p>
                                    <p className="text-xs text-slate-500">Send schematic designs, CAD outlines, and tender specifications here.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: High-Grade Estimation Form (7 Columns footprint) */}
                    <div className="lg:w-[58.333333%] bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
                        <div className="space-y-2 mb-6">
                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Project Estimate Request</h3>
                            <p className="text-sm text-slate-500">Provide high-level metrics below to initiate our calculation workflow.</p>
                        </div>

                        <form className="space-y-5 flex-1 flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Corporate Representative</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Rajan Devansh"
                                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#ed8221] text-slate-950 text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Company Designation</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Procurement Lead"
                                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#ed8221] text-slate-950 text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Secure Email Endpoint</label>
                                        <input
                                            type="email"
                                            placeholder="name@enterprise.com"
                                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#ed8221] text-slate-950 text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Primary Service Scope</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 focus:border-[#ed8221] text-slate-600 text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors appearance-none">
                                            <option>Hot Insulation Frameworks</option>
                                            <option>Cryogenic Sub-Zero Barriers</option>
                                            <option>Acoustic Dampening Arrays</option>
                                            <option>Metal Cladding & Weather Defense</option>
                                            <option>Turnkey Industrial Maintenance</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Project Specification Requirements & Structural Scope</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Detail pipe operational temperatures, geometric layout scales, cladding materials, or specific plant operating conditions..."
                                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ed8221] text-slate-950 text-sm px-4 py-3 rounded-xl focus:outline-none transition-colors resize-none placeholder:text-slate-400 flex-1"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full font-mono text-xs font-bold tracking-widest text-white bg-slate-950 hover:bg-[#ed8221] py-4 rounded-xl transition-colors uppercase shadow-sm">
                                    Submit Engineering Allocation request
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* 3. INTERACTIVE IMMERSIVE MAP BLOCK                        */}
            {/* ========================================================= */}
            <section className="w-full bg-white border-t border-slate-200/80 py-24 px-6">
                <div className="max-w-6xl w-full mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="space-y-2">
                            <span className="text-xs font-mono tracking-widest text-[#ed8221] uppercase font-bold">On-Site Logistics</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Geospatial Routing & Access Point</h2>
                        </div>
                        <p className="text-sm text-slate-500 max-w-md md:text-right">
                            Hover over the terminal map layer below to lift the diagnostic grayscale filter and unlock complete multi-color vector coordinates.
                        </p>
                    </div>

                    {/* Map Frame Container with Custom Hover Animations requested */}
                    <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-inner group relative">

                        {/* Overlay to catch interactions and enforce pure smooth transition */}
                        <div className="w-full h-[450px] transition-all duration-700 ease-out grayscale filter group-hover:grayscale-0 scale-100 group-hover:scale-[1.015]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.2705974154574!2d73.08900777613398!3d22.41883877960149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcbc04bb597c3%3A0x81a59c4572488195!2sRAMI%20INSULATORS!5e0!3m2!1sen!2sin!4v1781003920687!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Rami Insulators Plant Geolocation Coordinate Map"
                            />
                        </div>

                        {/* Floating Blueprint Design Element */}
                        <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white backdrop-blur-md border border-slate-800 p-4 rounded-xl text-xs font-mono space-y-1 pointer-events-none opacity-100 group-hover:opacity-90 transition-opacity hidden sm:block">
                            <div className="text-[#ed8221] font-bold">NODE REFERENCE: RAMI INSULATORS</div>
                            <div className="text-slate-400">LAT: 22.418839&deg; N // LNG: 73.089008&deg; E</div>
                            <div className="text-slate-500">Nandesari Rail Terminal Crossing Sector</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}