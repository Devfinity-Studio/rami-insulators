import {HeroSection} from "@/components/HeroSection";

export default function Home() {
  return (
      <main>
          <HeroSection />
          {/* 2. The Scroll Spacer */}
          {/* This empty block forces the browser to let you scroll past the
                first screen to reveal the sloped layers below. */}
          <div className="w-full h-screen pointer-events-none"></div>

          {/* 3. Layer 1: First Sticky Sloped Layer */}
          {/* 'sticky top-0' tells this container to pin to the top of the browser when it gets there */}
          <div className="sticky top-0 z-10 w-full flex flex-col h-screen">
              {/* Orange Border */}
              <section
                  className="relative w-full h-[17vw] bg-[#ed8221]/70"
                  style={{
                      clipPath: "polygon(0 11.5vw, 100% 0, 100% 100%, 0 100%)"
                  }}
              ></section>

              {/* White Content (Using h-screen ensures it covers the bottom after being pulled up) */}
              <section
                  className="relative w-full h-screen bg-white flex flex-col items-center justify-center -mt-[12vw]"
                  style={{ clipPath: "polygon(0 8vw, 100% 0, 100% 100%, 0 100%)" }}
              >
                  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh] pb-32">
                      {/* Left Side: Service Details */}
                      <div className="space-y-6 text-left">
                            <span className="text-xs font-bold tracking-widest text-[#ed8221] uppercase border-l-2 border-[#ed8221] pl-2">
                                High-Temperature Systems
                            </span>
                          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                              Hot Insulation & <br />Thermal Retention
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                              We engineer and install premium thermal barriers designed to minimize heat loss, optimize energy efficiency, and guarantee personnel protection across industrial piping, boilers, and exhaust setups.
                          </p>

                          {/* Technical Specifications Sub-grid */}
                          <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                                  <h4 className="font-bold text-slate-800">Applications</h4>
                                  <p className="text-sm text-slate-600">Steam piping, refineries, turbines, and processing plants.</p>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                  <h4 className="font-bold text-slate-800">Materials Used</h4>
                                  <p className="text-sm text-slate-600">Rockwool, ceramic fiber, and calcium silicate blankets.</p>
                              </div>
                          </div>
                      </div>

                      {/* Right Side: Animated Thermal SVG Pipeline */}
                      <div className="relative flex justify-center items-center">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#ed8221]/10 to-amber-500/5 rounded-3xl blur-2xl"></div>
                          <svg className="w-full max-w-[420px] h-auto drop-shadow-xl bg-slate-50 p-6 rounded-2xl border border-slate-200" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="60" y="180" width="280" height="40" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="3" />
                              <rect x="100" y="170" width="200" height="60" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                              <line x1="140" y1="170" x2="140" y2="230" stroke="#94a3b8" strokeWidth="2" />
                              <line x1="260" y1="170" x2="260" y2="230" stroke="#94a3b8" strokeWidth="2" />
                              <path d="M 120 140 Q 130 120 120 100 T 120 60" stroke="#ed8221" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" />
                              <path d="M 200 140 Q 210 120 200 100 T 200 60" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                              <path d="M 280 140 Q 290 120 280 100 T 280 60" stroke="#ed8221" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                              <circle cx="200" cy="200" r="12" fill="#ef4444" className="animate-ping" style={{ animationDuration: '3s' }} />
                              <circle cx="200" cy="200" r="8" fill="#ed8221" />
                          </svg>
                      </div>
                  </div>
              </section>
          </div>

          {/* 4. Layer 2: Second Sticky Sloped Layer */}
          {/* A higher z-index (z-20) ensures this slides over Layer 1 before pinning itself */}
          <div className="sticky top-0 z-20 w-full flex flex-col h-screen">
              {/* A Blue Border for contrast */}
              <section
                  className="relative w-full h-[17vw] bg-blue-600/70"
                  style={{ clipPath: "polygon(0 0, 100% 11.5vw, 100% 100%, 0 100%)" }}
              ></section>

              {/* Gray Content */}
              <section
                  className="relative w-full h-screen bg-gray-100 flex flex-col items-center justify-center -mt-[12vw]"
                  style={{ clipPath: "polygon(0 0, 100% 8vw, 100% 100%, 0 100%)" }}
              >
                  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh] pb-32">
                      {/* Left Side: Animated Cryogenic Loop SVG */}
                      <div className="relative order-2 md:order-1 flex justify-center items-center">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20"></div>
                          <svg className="w-full max-w-[420px] h-auto rounded-xl shadow-2xl bg-slate-950 p-6 border border-slate-800" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="200" cy="200" r="110" stroke="#1e293b" strokeWidth="2" />
                              <circle cx="200" cy="200" r="85" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite]" />
                              <circle cx="200" cy="200" r="60" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 12" className="animate-[spin_20s_linear_infinite_reverse]" />
                              <circle cx="200" cy="200" r="25" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
                              <path d="M190 200 L210 200 M200 190 L200 210" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" className="animate-spin" style={{ animationDuration: '8s' }} />
                              <rect x="130" y="310" width="140" height="30" rx="6" fill="#020617" stroke="#1e293b" />
                              <text x="200" y="330" fill="#22d3ee" fontSize="14" fontFamily="monospace" textAnchor="middle" className="animate-pulse">CRYOSAFE // OK</text>
                          </svg>
                      </div>

                      {/* Right Side: Service Details */}
                      <div className="space-y-6 text-left order-1 md:order-2">
                            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase border-l-2 border-cyan-400 pl-2">
                                Sub-Zero Systems
                            </span>
                          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                              Cold & Cryogenic <br />Insulation Specialist
                          </h2>
                          <p className="text-lg text-slate-500 leading-relaxed">
                              Crucial moisture barriers combined with elite thermal resistance. We construct highly durable polyisocyanurate (PIR) and cellular glass installations to counter condensation, frost formation, and corrosion under insulation (CUI).
                          </p>

                          <ul className="space-y-3 text-slate-500">
                              <li className="flex items-center space-x-3">
                                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                  <span>Flawless vapor barrier jackets to combat moisture pooling.</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                  <span>Specially built for LNG, chilled water lines, and chemical processing.</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </section>
          </div>

          <div className="sticky top-0 z-30 w-full flex flex-col h-screen">
              {/* Orange Border */}
              <section
                  className="relative w-full h-[17vw] bg-[#ed8221]/70"
                  style={{
                      clipPath: "polygon(0 11.5vw, 100% 0, 100% 100%, 0 100%)"
                  }}
              ></section>

              {/* White Content (Using h-screen ensures it covers the bottom after being pulled up) */}
              <section
                  className="relative w-full h-screen bg-white flex flex-col items-center justify-center -mt-[12vw]"
                  style={{ clipPath: "polygon(0 8vw, 100% 0, 100% 100%, 0 100%)" }}
              >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,130,33,0.05),transparent_60%)]"></div>

                  <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                      <div className="space-y-4">
                          <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Allied Industrial Frameworks</h3>
                          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-slate-600 to-black">
                              Complete Cladding & Acoustic Solutions
                          </h2>
                          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                              Beyond core temperatures, we handle dynamic industrial protection assets, providing turnkey engineering from assessment to installation.
                          </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                          <div className="p-6 bg-slate-200/50 rounded-xl border border-slate-800/80">
                              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#ed8221] flex items-center justify-center font-bold mb-4">M</div>
                              <h4 className="text-lg font-bold mb-2">Metal Cladding</h4>
                              <p className="text-sm text-slate-400">Weatherproof aluminum, stainless steel, or GI cladding jackets to guard systems from extreme physical stress.</p>
                          </div>
                          <div className="p-6 bg-slate-200/50 rounded-xl border border-slate-800/80">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">A</div>
                              <h4 className="text-lg font-bold mb-2">Acoustic Insulation</h4>
                              <p className="text-sm text-slate-400">Sound absorption and acoustic barrier installations to dampen heavy industrial machinery decibels.</p>
                          </div>
                          <div className="p-6 bg-slate-200/50 rounded-xl border border-slate-800/80">
                              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4">R</div>
                              <h4 className="text-lg font-bold mb-2">Removable Jackets</h4>
                              <p className="text-sm text-slate-400">Customized, reusable thermal insulation mattresses for valves, flanges, and equipment needing frequent service checks.</p>
                          </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ed8221] to-orange-600 hover:from-orange-600 hover:to-[#ed8221] text-white font-semibold rounded-xl shadow-lg shadow-orange-500/10 transform hover:-translate-y-0.5 transition-all duration-200">
                              Request a Technical Consultation
                          </button>
                          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-800 transition-colors">
                              Explore Past Projects
                          </button>
                      </div>
                  </div>
              </section>
              </div>

          <div className="sticky top-0 z-10 w-full flex flex-col h-screen">
              {/* Orange Border */}
              <section
                  className="relative w-full h-[17vw] bg-[#ed8221]/70"
                  style={{
                      clipPath: "polygon(0 11.5vw, 100% 0, 100% 100%, 0 100%)"
                  }}
              ></section>

              {/* White Content (Using h-screen ensures it covers the bottom after being pulled up) */}
              <section
                  className="relative w-full h-screen bg-white flex flex-col items-center justify-center -mt-[12vw]"
                  style={{ clipPath: "polygon(0 8vw, 100% 0, 100% 100%, 0 100%)" }}
              >
                  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh] pb-32">
                      {/* Left Side: Service Details */}
                      <div className="space-y-6 text-left">
                            <span className="text-xs font-bold tracking-widest text-[#ed8221] uppercase border-l-2 border-[#ed8221] pl-2">
                                High-Temperature Systems
                            </span>
                          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                              Hot Insulation & <br />Thermal Retention
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                              We engineer and install premium thermal barriers designed to minimize heat loss, optimize energy efficiency, and guarantee personnel protection across industrial piping, boilers, and exhaust setups.
                          </p>

                          {/* Technical Specifications Sub-grid */}
                          <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                                  <h4 className="font-bold text-slate-800">Applications</h4>
                                  <p className="text-sm text-slate-600">Steam piping, refineries, turbines, and processing plants.</p>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                  <h4 className="font-bold text-slate-800">Materials Used</h4>
                                  <p className="text-sm text-slate-600">Rockwool, ceramic fiber, and calcium silicate blankets.</p>
                              </div>
                          </div>
                      </div>

                      {/* Right Side: Animated Thermal SVG Pipeline */}
                      <div className="relative flex justify-center items-center">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#ed8221]/10 to-amber-500/5 rounded-3xl blur-2xl"></div>
                          <svg className="w-full max-w-[420px] h-auto drop-shadow-xl bg-slate-50 p-6 rounded-2xl border border-slate-200" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="60" y="180" width="280" height="40" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="3" />
                              <rect x="100" y="170" width="200" height="60" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                              <line x1="140" y1="170" x2="140" y2="230" stroke="#94a3b8" strokeWidth="2" />
                              <line x1="260" y1="170" x2="260" y2="230" stroke="#94a3b8" strokeWidth="2" />
                              <path d="M 120 140 Q 130 120 120 100 T 120 60" stroke="#ed8221" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" />
                              <path d="M 200 140 Q 210 120 200 100 T 200 60" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                              <path d="M 280 140 Q 290 120 280 100 T 280 60" stroke="#ed8221" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                              <circle cx="200" cy="200" r="12" fill="#ef4444" className="animate-ping" style={{ animationDuration: '3s' }} />
                              <circle cx="200" cy="200" r="8" fill="#ed8221" />
                          </svg>
                      </div>
                  </div>
              </section>
          </div>
      </main>
  );
}
