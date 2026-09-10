"use client";
import { image_path } from "@/constants/image";
import { motion } from "framer-motion";

export default function About({
  isInsideContainer,
  mousePos,
  maskSize,
  setIsHovered,
  className,
}: {
  isInsideContainer: boolean;
  mousePos: { x: number; y: number };
  maskSize: number;
  setIsHovered: (hovered: boolean) => void;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-full ${className}`} id="about">
      <div className="flex flex-col w-full h-full justify-center items-center px-32">
        <h3 className="w-4/5 text-[3rem] text-justify">
          The name is Krishna, but most people call me Gung Hendra, you can call
          me either way. As of now, I'm a university student at Udayana
          University, majoring in Information Technology. I do a little
          competitive programming, mostly because of the fun of it, and I enjoy
          building full-stack applications.
        </h3>
      </div>

      {/* Mask Part */}
      <motion.div
        className="absolute inset-0 z-40 overflow-hidden text-foreground pointer-events-none"
        style={{
          maskImage: `url(${image_path.mouse_mask})`,
          WebkitMaskImage: `url(${image_path.mouse_mask})`,
          background: `var(--color-accent)`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
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
          ease: "backOut",
        }}
      >
        <div className="flex flex-col w-full h-full justify-center items-center px-32">
          <h3 className="w-4/5 text-[3rem] text-justify">
            Do I use AI when building things? Well yes, of course I do. But I
            follow one principle that I got from a random YouTube video (it was
            a seminar), and that principle is "Never outsource the thinking.".
            Well, I encourage you to do the same, trust me, it goes a long way.
          </h3>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-50">
        {/* Hover zone*/}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/6 h-1/2 cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
