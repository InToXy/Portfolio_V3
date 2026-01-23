"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
    duration?: number
    isDark: boolean
    toggleTheme: () => void
    className?: string
}

export const AnimatedThemeToggler = ({
    className,
    duration = 400,
    isDark,
    toggleTheme,
    ...props
}: AnimatedThemeTogglerProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleToggle = useCallback(async () => {
        try {
            if (!buttonRef.current) {
                toggleTheme()
                return
            }

            // Fallback for browsers that don't support View Transitions or if checking fails
            if (!document.startViewTransition) {
                toggleTheme()
                return
            }

            await document.startViewTransition(() => {
                flushSync(() => {
                    toggleTheme()
                })
            }).ready

            const { top, left, width, height } =
                buttonRef.current.getBoundingClientRect()
            const x = left + width / 2
            const y = top + height / 2
            const maxRadius = Math.hypot(
                Math.max(left, window.innerWidth - left),
                Math.max(top, window.innerHeight - top)
            )

            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            )
        } catch (error) {
            console.error("Theme toggle animation failed:", error)
            toggleTheme()
        }
    }, [isDark, duration, toggleTheme])

    return (
        <button
            ref={buttonRef}
            onClick={handleToggle}
            className={cn("relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", className)}
            {...props}
        >
            {isDark ? <Moon size={24} /> : <Sun size={24} />}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
