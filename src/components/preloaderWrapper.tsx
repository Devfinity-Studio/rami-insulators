"use client";

import { useState, useEffect, ReactNode } from "react";
import Preloader from "./preloader"; // Adjust the path if needed

interface PreloaderWrapperProps {
    children: ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate a delay for testing
        const timer = setTimeout(() => setLoading(false), 1000);

        // Cleanup timeout on unmount to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <Preloader onComplete={() => setLoading(false)} />
    ) : (
        <>{children}</>
    );
}