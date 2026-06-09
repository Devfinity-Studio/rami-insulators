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
            {/* Add more sticky layers here as needed! Just keep incrementing the z-index */}
        </main>
    )
}