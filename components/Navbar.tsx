"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Seleciona as seções correspondentes aos IDs dos botões
    const sectionIds = ["home", "projects", "about", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando a seção ocupar o centro/maior parte da tela visível, ativa ela
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Ajusta o gatilho para ativar quando a seção estiver bem visível no meio da tela
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.offsetTop - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "projects", label: "Projetos" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* NOME */}
        <h1 className="font-bold text-xl tracking-tight text-white">
          Felipe Rogério
        </h1>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400 font-semibold scale-105" // Cor ativa combinando com seus badges
                    : "text-zinc-400 hover:text-white"        // Cor padrão
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}