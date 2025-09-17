"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        Calendly?: {
            initInlineWidget(opts: { url: string; parentElement: HTMLElement }): void;
        };
    }
}

export default function CalendlyInline({
                                           url,
                                           height = 700,
                                       }: {
    url: string;
    height?: number | string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If Calendly isn't on window yet (slow networks), poll briefly.
        let tries = 0;
        const maxTries = 40; // ~4s
        const interval = setInterval(() => {
            if (window.Calendly) {
                window.Calendly.initInlineWidget({ url, parentElement: el });
                clearInterval(interval);
            } else if (++tries >= maxTries) {
                clearInterval(interval);
            }
        }, 100);

        return () => {
            // Cleanup container so a fresh iframe is created next open
            el.innerHTML = "";
            clearInterval(interval);
        };
    }, [url]);

    return <div ref={ref} style={{ minWidth: 320, height: typeof height === "number" ? `${height}px` : height }} />;
}
