"use client";

import * as React from "react";
import { createPortal } from "react-dom";

// tiny cn helper (swap for your own if you have one)
const cn = (...xs: Array<string | false | null | undefined>) =>
    xs.filter(Boolean).join(" ");

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "modal" | "drawer";

export type DialogProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (next: boolean) => void;
    variant?: Variant;                 // "modal" (center) or "drawer" (bottom sheet)
    size?: Size;                       // modal width / drawer max-width
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;        // main body
    footer?: React.ReactNode;          // actions row
    showClose?: boolean;
    closeOnOverlay?: boolean;
    closeOnEsc?: boolean;
    className?: string;                // wrapper
    contentClassName?: string;         // inner panel
    bodyClassName?: string;
};

export function Dialog({
                           open,
                           defaultOpen,
                           onOpenChange,
                           variant = "modal",
                           size = "md",
                           title,
                           description,
                           children,
                           footer,
                           showClose = true,
                           closeOnOverlay = true,
                           closeOnEsc = true,
                           className,
                           contentClassName,
                           bodyClassName
                       }: DialogProps) {
    const isControlled = open !== undefined;
    const [internal, setInternal] = React.useState(!!defaultOpen);
    const isOpen = isControlled ? !!open : internal;

    const setOpen = (v: boolean) => {
        if (!isControlled) setInternal(v);
        onOpenChange?.(v);
    };

    // SSR-safe portal mount
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    // Close on ESC
    React.useEffect(() => {
        if (!isOpen || !closeOnEsc) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, closeOnEsc]);

    // Lock scroll
    React.useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    // Focus first focusable
    const panelRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (!isOpen) return;
        const el = panelRef.current;
        if (!el) return;
        const focusable =
            el.querySelector<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) || el;
        focusable.focus();
    }, [isOpen]);

    if (!mounted) return null;
    if (!isOpen) return null;

    return createPortal(
        <div
            className={cn(
                "fixed inset-0 z-[60] flex",
                variant === "modal" && "items-center justify-center",
                variant === "drawer" && "items-end justify-center",
                className
            )}
            aria-modal="true"
            role="dialog"
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => {
                    if (closeOnOverlay) setOpen(false);
                }}
            />

            {/* Panel */}
            <div
                ref={panelRef}
                tabIndex={-1}
                className={cn(
                    "relative mx-4 w-full rounded-xl border border-slate-700 bg-slate-900 shadow-2xl outline-none",
                    "focus-visible:ring-2 focus-visible:ring-blue-500",
                    variant === "modal" && sizeStyles(size),
                    variant === "drawer" && drawerStyles(size),
                    " overflow-hidden flex flex-col", // <— added
                    contentClassName
                )}
            >

                {/* Header */}
                {(title) && (
                    <div className="flex items-start justify-between gap-4 p-5">
                        <div className="min-w-0">
                            {title ? (
                                <h2 id="dialog-title" className="text-white text-lg font-semibold">
                                    {title}
                                </h2>
                            ) : null}
                            {description ? (
                                <p id="dialog-desc" className="text-slate-400 text-sm mt-1">
                                    {description}
                                </p>
                            ) : null}
                        </div>
                    </div>
                )}

                {showClose && (
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close dialog"
                        className="absolute right-5 top-5 cursor-pointer"
                    >
                        <svg viewBox="0 0 20 20" className="h-7 w-7" aria-hidden>
                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"/>
                        </svg>
                    </button>
                )}

                {/* Body */}
                {children ? (
                    <div className={cn("p-5 text-slate-300 flex-1 min-h-0 overflow-auto", bodyClassName)}>
                        {children}
                    </div>
                ) : null}

                {/* Footer */}
                {footer ? (
                    <div className="flex items-center justify-end gap-2 p-4 pt-0 sm:px-5 sm:pb-5">
                        {footer}
                    </div>
                ) : null}
            </div>
        </div>,
        document.body
    );
}

function sizeStyles(size: Size) {
    switch (size) {
        case "sm":
            return "max-w-sm";
        case "md":
            return "max-w-lg";
        case "lg":
            return "max-w-2xl";
        case "xl":
            return "max-w-4xl";
        default:
            return "max-w-lg";
    }
}

function drawerStyles(size: Size) {
    const width =
        size === "sm"
            ? "max-w-md"
            : size === "md"
                ? "max-w-xl"
                : size === "lg"
                    ? "max-w-2xl"
                    : "max-w-3xl";
    return cn(width, "rounded-b-none rounded-t-2xl");
}
