'use client'
import { image_path } from "@/constants/image"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function About({ isInsideContainer, mousePos, maskSize, setIsHovered }: { isInsideContainer: boolean, mousePos: { x: number, y: number }, maskSize: number, setIsHovered: (hovered: boolean) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [textLayout, setTextLayout] = useState({ top: 0, left: 0, width: 0 })

  useEffect(() => {
    const updateLayout = () => {
      if (textRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const textRect = textRef.current.getBoundingClientRect()
        setTextLayout({
          top: textRect.top - sectionRect.top,
          left: textRect.left - sectionRect.left,
          width: textRect.width,
        })
      }
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full h-full justify-center items-center px-32 space-y-8" id="about">
      <h3 ref={textRef} className="w-4/5 text-[3rem] text-justify">
        The name is Krishna, but most people call me Gung Hendra, you can call me either way. As of now, I'm a university student at Udayana University, majoring in Information Technology. I do a little competitive programming, mostly because of the fun of it, and I enjoy building full-stack applications.
      </h3>
      <div>
        Card Here
      </div>

      {/* Mask Part — no flex centering; mask h3 is absolutely pinned to the real h3's measured position */}
      <motion.div
        className="absolute inset-0 z-40 overflow-hidden text-foreground pointer-events-none"
        style={{
          maskImage: `url(${image_path.mouse_mask})`,
          WebkitMaskImage: `url(${image_path.mouse_mask})`,
          background: `var(--color-accent)`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: `0% 0%`,
          WebkitMaskPosition: `0% 0%`,
          maskSize: `40px`,
          WebkitMaskSize: `40px`,
        }}
        animate={{
          maskPosition: `${mousePos.x - maskSize / 2}px ${mousePos.y - maskSize / 2}px`,
          webkitMaskPosition: `${mousePos.x - maskSize / 2}px ${mousePos.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
          webkitMaskSize: `${maskSize}px`,
          opacity: isInsideContainer ? 1 : 0,
        }}
        transition={{
          type: "tween",
          ease: "backOut"
        }}
      >
        <h3
          className="absolute text-[3rem] text-justify"
          style={{
            top: textLayout.top,
            left: textLayout.left,
            width: textLayout.width,
          }}
        >
          Do I use AI when building things? Well yes, I do. But I follow one principle that I got from a random YouTube video (it was a seminar), and that is &quot;Never outsource the thinking.&quot;. And I encourage you to do the same, trust me, it goes a long way. And my favorite color is green.
        </h3>
      </motion.div>

      <div className="absolute inset-0 z-50">
        {/* Hover zone*/}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  )
}