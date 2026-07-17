'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Star {
    id: number
    top: string
    left: string
    size: number
    duration: number
    delay: number
}

const generateStars = (count: number): Star[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        size: Math.random() * 12 + 10,
        duration: Math.random() * 14 + 8,
        delay: Math.random() * 4,
    }))
}

export function StarsGenerator({
    count = 36,
    className,
    starClassName,
}: {
    count?: number
    className?: string
    starClassName?: string
}) {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        setStars(generateStars(count))
    }, [count])

    return (
        <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className={cn(
                        "absolute text-accent/50 drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]",
                        starClassName
                    )}
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        y: [0, -24, 16, 0],
                        x: [0, 18, -12, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.16, 0.8, 0.16],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    )
}