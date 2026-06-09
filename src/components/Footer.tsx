'use client'

export function Footer() {
    return(
        <footer className="relative z-30 bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t border-slate-900">
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

                {/* Brand Column with Logo Image */}
                <div className="space-y-5 md:col-span-1">
                    <div className="flex items-center space-x-3 text-white">
                        <img
                            src="/logo.png"
                            alt="Company Logo"
                            className="h-20 w-auto object-contain brightness-110"
                        />
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Precision industrial insulation frameworks engineering hot, cold, acoustic, and defensive cladding environments globally.
                    </p>
                    {/* Elegant Social Row */}
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="hover:text-[#ed8221] transition-colors p-2 bg-slate-900/60 rounded-lg border border-slate-800/80" aria-label="LinkedIn">
                            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-[#ed8221] transition-colors p-2 bg-slate-900/60 rounded-lg border border-slate-800/80" aria-label="Twitter X">
                            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" className=" hover:text-[#ed8221] transition-colors p-2 bg-slate-900/60 rounded-lg border border-slate-800/80" aria-label="YouTube">
                            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold tracking-wider text-white uppercase">Services</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Hot Thermal Systems</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cryogenic Isolation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Acoustic Attenuation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Removable Blankets</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Corrosion Protection (CUI)</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold tracking-wider text-white uppercase">Company</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">HSE Safety Commitment</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Technical Estimator</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Engineering</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-4 md:col-span-1">
                    <h4 className="text-sm font-bold tracking-wider text-white uppercase">Technical Briefings</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Subscribe to receive updates on evolving energy insulation standards, thermal calculation methodologies, and project analysis.
                    </p>
                    <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="engineering@firm.com"
                            className="w-full bg-slate-900 border border-slate-800 focus:border-[#ed8221] text-white text-sm px-4 py-2.5 rounded-lg focus:outline-none transition-colors placeholder:text-slate-600"
                        />
                        <button className="w-full text-xs font-bold tracking-wider text-white bg-slate-800 hover:bg-[#ed8221] py-2.5 rounded-lg transition-colors uppercase">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Metadata Bar with Devfinity Credit */}
            <div className="max-w-6xl w-full mx-auto pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
                    <span>&copy; 2026 Rami Insulators Pvt. Ltd. All rights reserved.</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span className="inline-flex items-center gap-1">
              Built with <span className="text-rose-500 animate-pulse">♥</span> by{" "}
                        <a href="#" className="text-slate-400 hover:text-white font-medium transition-colors">Devfinity</a>
            </span>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-slate-400 transition-colors">Regulatory Compliance</a>
                    <a href="#" className="hover:text-slate-400 transition-colors">Privacy Charter</a>
                    <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}