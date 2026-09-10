"use client";
import Image from "next/image";
import { image_path } from "@/constants/image";

const SWAP_PAIRS: [string, string][] = [
  ["K", "A"],
  ["ri", "n"],
  ["s", "a"],
  ["h", "k"],
  ["na ", " Ag"],
  [" M", "un"],
  ["a", "g"],
  ["he", " M"],
  ["n", "a"],
  ["d", "d"],
  ["r", "e"],
  ["a", ""],
  ["y", ""],
  ["a", ""],
  ["n", ""],
  ["a", ""],
];

const STAGGER_S = 0.12; // stagger delay between columns in seconds

export default function Hero({ className }: { className?: string }) {
  return (
    <div className={`relative flex w-full h-full ${className}`} id="hero">
      <div
        className="absolute inset-0 z-20"
        style={{
          WebkitMaskImage: `url(${image_path.profile})`,
          maskImage: `url(${image_path.profile})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          // filter: "blur(8px)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 z-0 flex"
          style={{ height: "16.5rem" }}
        >
          {SWAP_PAIRS.map(([top, bottom], i) => (
            <span
              key={i}
              className="inline-flex flex-col overflow-hidden h-full"
            >
              <span
                className="shrink-0 text-[15rem] text-transparent [-webkit-text-stroke:2px_var(--accent)] leading-none whitespace-pre animate-text-up-and-down"
                style={{ height: "15rem", animationDelay: `${i * STAGGER_S}s` }}
              >
                {top}
              </span>
              <span
                className="shrink-0 text-[15rem] text-transparent [-webkit-text-stroke:2px_var(--accent)] leading-none whitespace-pre animate-text-up-and-down"
                style={{ height: "15rem", animationDelay: `${i * STAGGER_S}s` }}
              >
                {bottom}
              </span>
            </span>
          ))}
        </div>
      </div>

      <Image
        alt="Krishna's Picture"
        src={image_path.profile}
        fill
        className="relative object-contain w-full h-full z-10"
        loading="eager"
      />

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 z-0 flex"
        style={{ height: "16.5rem" }}
      >
        {SWAP_PAIRS.map(([top, bottom], i) => (
          <span key={i} className="inline-flex flex-col overflow-hidden h-full">
            <span
              className="shrink-0 text-[15rem] leading-none whitespace-pre animate-text-up-and-down"
              style={{ height: "15rem", animationDelay: `${i * STAGGER_S}s` }}
            >
              {top}
            </span>
            <span
              className="shrink-0 text-[15rem] leading-none whitespace-pre animate-text-up-and-down"
              style={{ height: "15rem", animationDelay: `${i * STAGGER_S}s` }}
            >
              {bottom}
            </span>
          </span>
        ))}
      </div>

      <div className="absolute top-10 left-10 flex flex-row space-x-2 z-30">
        <h2 className="text-[3rem] whitespace-nowrap leading-none font-bold">
          //
        </h2>
        <div>
          <h2 className="whitespace-nowrap">Udayana University Student</h2>
          <h2 className="whitespace-nowrap">Competitive Programmer</h2>
        </div>
      </div>
      <div className="absolute top-10 right-10 flex flex-row space-x-2 z-30">
        <h2 className="text-[3rem] whitespace-nowrap leading-none font-bold">
          //
        </h2>
        <div>
          <h2 className="whitespace-nowrap">Full-stack Developer</h2>
          <h2 className="whitespace-nowrap">
            Yes, I do have a life outside of coding
          </h2>
        </div>
      </div>
    </div>
  );
}
