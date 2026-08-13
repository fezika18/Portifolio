"use client";

import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { FiGlobe, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { language, theme, t, toggleLanguage, toggleTheme } = usePortfolio();

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
    { id: "home", label: t.nav.home },
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* NOME */}
        <h1 className="font-bold text-xl tracking-tight text-white">
          Felipe Rogério
        </h1>

        {/* LINKS E BOTÕES DE IDIOMA E TEMA NO TOPO DIREITO */}
        <div className="flex items-center gap-6">
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

          {/* BOTÕES DISCRETOS */}
          <div className="flex items-center gap-3">
            {/* BOTÃO IDIOMA */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition px-2.5 py-1 rounded-lg border border-white/10 hover:border-white/20 bg-white/5"
              title={language === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
              aria-label="Alternar idioma"
            >
              <FiGlobe size={14} className="text-cyan-400" />
              <span>{language === "pt" ? "PT" : "EN"}</span>
            </button>

            {/* BOTÃO TEMA */}
            <button
              onClick={toggleTheme}
              className="text-xs text-zinc-400 hover:text-white transition p-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 flex items-center justify-center"
              title={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <FiSun size={15} className="text-amber-400" />
              ) : (
                <FiMoon size={15} className="text-indigo-400" />
              )}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}