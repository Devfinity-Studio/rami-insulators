import Image from "next/image"

export function HeroSection() {
    return (
        <main className="relative">
            {/* 1. The Fixed Background & Hero Layer */}
            {/* Everything inside this div stays perfectly pinned to the screen */}
            <div className="fixed inset-0 w-full h-screen -z-10">
                <Image
                    src={"/heroBg.webp"}
                    alt="Background"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />

                {/* The Black Overlay (Using natural DOM rendering order to stack it over the image) */}
                <div className="absolute inset-0 w-full h-screen bg-black/30" />

                {/* The Hero Content */}
                <div className="relative z-0 flex items-center justify-center w-full h-full">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold">Hero Layer</h1>
                        <p className="mt-4 text-xl">Keep scrolling down</p>
                    </div>
                </div>
            </div>

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
                    <div className="text-center px-4">
                        <h2 className="text-4xl font-bold text-black">
                            Double Sloped Content!
                        </h2>
                        <p className="mt-4 text-gray-600">
                            This layer stops at the top. Keep scrolling!
                        </p>
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
                    <div className="text-center px-4">
                        <h2 className="text-4xl font-bold text-black">
                            Next Stacked Layer!
                        </h2>
                        <p className="mt-4 text-gray-600">
                            This acts exactly like the first one, stacking right over it.
                        </p>
                    </div>
                </section>
            </div>
            {/* Add more sticky layers here as needed! Just keep incrementing the z-index */}
        </main>
    )
}