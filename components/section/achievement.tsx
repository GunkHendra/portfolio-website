"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { image_path } from "@/constants/image"

const achivementData = [
  {
    image: image_path.unity,
    title: "UNY IT Competition - 3rd Place Programming Competition",
    year: "2023",
    description: "Participated in the programming competition held at Universitas Negeri Yogyakarta. Collaborated with 2 teammates to solve problems within the time limit. Won 3rd Place overall.",
    orientation: "portrait"
  },
  {
    image: image_path.pnbit1,
    title: "PNB IT Competition - 3rd Place Programming Competition",
    year: "2024",
    description: "Competed in a individual programming competition held at Politeknik Negeri Bali. It was fun and challenging at the same time! Won 3rd Place overall.",
    orientation: "landscape"
  },
  {
    image: image_path.hology,
    title: "HOLOGY - 5th Place Programming Competition",
    year: "2024",
    description: "HOLOGY is an IT Competition held by Brawijaya University. I participated in the programming competition and won 5th Place overall.",
    orientation: "landscape"
  },
  {
    image: image_path.pnbit2,
    title: "PNB IT Competition - 1st Place Programming Competition",
    year: "2025",
    description: "Once again, competed in a individual programming competition held at Politeknik Negeri Bali. Managed to get 1st Place overall!",
    orientation: "landscape"
  },
  {
    image: image_path.innovillage,
    title: "Innovillage - Top 180 Finalist",
    year: "2025",
    description: "Participated in a Innovation Competition held by collaboration of Telkom University, Telkom Indonesia, and Danantara. Competed against teams from all around Indonesia. Made it to Top 180 Finalists",
    orientation: "landscape"
  },
  {
    image: image_path.isc,
    title: "International Student Competition - Silver Medal Technology Subtheme",
    year: "2026",
    description: "Participated in a International Student Competition held in Malaysia. Competed against students from all around the world. Managed to get Silver Medal in Technology Subtheme!",
    orientation: "portrait"
  },
]


export default function Achievement() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        const isAtStart = el.scrollLeft === 0;
        const isAtEnd = Math.ceil(el.scrollLeft) >= el.scrollWidth - el.clientWidth - 1;

        if (e.deltaY > 0 && !isAtEnd) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        } else if (e.deltaY < 0 && !isAtStart) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-x-auto pb-4 custom-scrollbar flex flex-col"
    >
      <div className="flex flex-row gap-8 px-4 h-full w-max min-w-full">
        {achivementData.filter((data, index) => (index % 2 == 0)).map((data, index) => (
          <div
            key={index}
            className={`flex flex-col h-full w-1/${achivementData.length / 2} shrink-0`}
          >
            <div className="w-full flex flex-row gap-4 h-1/3">
              <div className={`relative flex ${data.orientation === 'portrait' ? 'w-1/6' : 'w-1/2'} h-full`}>
                <Image
                  alt={data.title}
                  src={data.image}
                  fill
                  className="object-contain w-full h-full object-top"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl lg:text-2xl font-bold">{data.title}</h1>
                <h2 className="text-base lg:text-lg">{data.year}</h2>
                <p className="text-sm lg:text-base text-balance">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-8 px-4 h-full w-max min-w-full pl-60">
        {achivementData.filter((data, index) => (index % 2 == 1)).map((data, index) => (
          <div
            key={index}
            className={`flex flex-col h-full w-1/${achivementData.length / 2} shrink-0`}
          >
            <div className="w-full flex flex-row gap-4 h-1/3">
              <div className={`relative flex ${data.orientation === 'portrait' ? 'w-1/6' : 'w-1/2'} h-full`}>
                <Image
                  alt={data.title}
                  src={data.image}
                  fill
                  className="object-contain w-full h-full object-top"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl lg:text-2xl font-bold">{data.title}</h1>
                <h2 className="text-base lg:text-lg">{data.year}</h2>
                <p className="text-sm lg:text-base text-balance">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
