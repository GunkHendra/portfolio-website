"use client";
import Navbar from "@/components/navigation_bar";
import About from "@/components/section/about";
import Achievement from "@/components/section/achievement";
import Contact from "@/components/section/contact";
import Experience from "@/components/section/experience";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import { StarsGenerator } from "@/components/star_generator";
import { useCallback, useEffect, useRef, useState } from "react";

const SectionList = [
  "hero",
  "about",
  "achievement",
  "project",
  "experience",
  "contact",
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    (typeof SectionList)[number] | string
  >(SectionList[0]);

  const updateActiveSection = (idx: number) => {
    setActiveSection(SectionList[idx]);
  };

  // Mouse Mask
  const [isHovered, setIsHovered] = useState(false);
  const [isInsideContainer, setIsInsideContainer] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const maskSize = isHovered ? 500 : 40;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    SectionList.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-100 text-foreground">
        <Navbar
          activeSection={activeSection}
          handleUpdateActiveSection={updateActiveSection}
        />
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-full overflow-hidden">
        <div
          className="flex w-full min-h-screen justify-center items-center px-32"
          id="hero"
        >
          <div className="w-full h-[85vh] bg-foreground overflow-hidden text-background border-t-4 border-r-4 border-accent">
            {/* <StarsGenerator className="z-5" /> */}
            {/* Hero Section */}
            <Hero />
          </div>
        </div>

        <div
          className="flex w-full min-h-screen justify-center items-center"
          id="about"
          ref={containerRef}
          onMouseEnter={() => setIsInsideContainer(true)}
          onMouseLeave={() => {
            setIsInsideContainer(false);
            setIsHovered(false);
          }}
        >
          {/* About Section */}
          <About
            isInsideContainer={isInsideContainer}
            mousePos={mousePos}
            maskSize={maskSize}
            setIsHovered={setIsHovered}
          />
        </div>

        <div
          className="flex w-full min-h-screen justify-center items-center"
          id="achievement"
        >
          {/* Achievement Section */}
          <Achievement />
        </div>
        <div
          className="flex w-full min-h-screen justify-center items-center"
          id="project"
        >
          {/* Project Section */}
          <Project />
        </div>
        <div
          className="flex w-full min-h-screen justify-center items-center"
          id="experience"
        >
          {/* Experience Section */}
          <Experience />
        </div>
        <div
          className="flex w-full min-h-screen justify-center items-center"
          id="contact"
        >
          {/* Contact Section */}
          <Contact />
        </div>
      </main >
    </div >
  );
}
