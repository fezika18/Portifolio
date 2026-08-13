"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Theme, translations } from "@/data/translations";

interface PortfolioContextType {
  language: Language;
  theme: Theme;
  t: typeof translations["pt"];
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language | null;
    if (savedLang === "pt" || savedLang === "en") {
      setLanguageState(savedLang);
    }

    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setThemeState("light");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio-lang", language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const t = translations[language];

  return (
    <PortfolioContext.Provider
      value={{
        language,
        theme,
        t,
        toggleLanguage,
        toggleTheme,
        setLanguage,
        setTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
