"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectRow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScroll();
    el.addEventListener("scroll", updateScroll);

    return () => el.removeEventListener("scroll", updateScroll);
  }, []);

  const smoothScrollTo = (target: number) => {
    const el = containerRef.current;
    if (!el) return;

    const start = el.scrollLeft;
    const distance = target - start;
    const duration = 500;

    let startTime: number | null = null;

    const ease = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);

      el.scrollLeft = start + distance * ease(progress);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;

    const cardWidth = 420;

    smoothScrollTo(
      el.scrollLeft + (dir === "left" ? -cardWidth : cardWidth)
    );
  };

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;

    const el = containerRef.current;
    if (!el) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    el.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDown.current = false;
  };

  return (
    <section className="px-6 py-14">
      <h2 className="text-5xl font-bold mb-10 tracking-tight">
        Projetos
      </h2>

      <div className="relative group">

        {/* LEFT BUTTON */}
        {canLeft && (
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              z-20
              w-12 h-12
              rounded-full
              bg-white/10 hover:bg-white/20
              backdrop-blur-md
              transition
            "
          >
            ‹
          </button>
        )}

        {/* RIGHT BUTTON */}
        {canRight && (
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              z-20
              w-12 h-12
              rounded-full
              bg-white/10 hover:bg-white/20
              backdrop-blur-md
              transition
            "
          >
            ›
          </button>
        )}

        {/* SCROLL AREA */}
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="
            flex
            gap-6
            overflow-x-auto
            px-12
            py-4
            snap-mandatory
            scrollbar-hide
            cursor-grab
            active:cursor-grabbing
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-[380px] md:min-w-[420px] snap-center"
            >
              <ProjectCard {...project} />
            </div>
          ))}

          <div className="min-w-[380px] md:min-w-[420px] snap-center">
            <div className="
              h-full rounded-3xl
              border border-dashed border-white/20
              flex items-center justify-center
              text-zinc-400
              bg-white/5
              transition
            ">
              Mais projetos em breve...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}