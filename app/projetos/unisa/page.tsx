"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { FiGlobe, FiSun, FiMoon } from "react-icons/fi";

export default function UnisaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const router = useRouter();
  const { language, theme, toggleLanguage, toggleTheme } = usePortfolio();

  return (
    <main className="min-h-screen text-white bg-[#0a0a0a]">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/projetos/unisa/images/login.png"
            alt="Unisa App"
            fill
            priority
            className="object-contain object-center opacity-40"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />

        {/* FADE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#0a0a0a]" />

        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="
            absolute top-6 left-6
            text-zinc-300 hover:text-white
            transition
            z-20
          "
        >
          {language === "pt" ? "← Voltar" : "← Back"}
        </button>

        {/* CONTROLES DISCRETOS NO TOPO DIREITO */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition px-2.5 py-1 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md"
            title={language === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
            aria-label="Alternar idioma"
          >
            <FiGlobe size={14} className="text-cyan-400" />
            <span>{language === "pt" ? "PT" : "EN"}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="text-xs text-zinc-400 hover:text-white transition p-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center"
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

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">

          <span className="text-cyan-400 font-semibold bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30 text-sm">
            {language === "pt" ? "Projeto Pessoal" : "Personal Project"}
          </span>

          <h1 className="text-7xl font-bold mt-4">
            Unisa App
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            {language === "pt"
              ? "Aplicativo mobile desenvolvido para repensar a experiência acadêmica dos alunos da universidade, tornando o acesso às informações mais rápido, intuitivo e organizado."
              : "Mobile application developed to rethink university student academic experience, making information access faster, intuitive, and organized."}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => {
                const element = document.getElementById("details");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition text-center"
            >
              {language === "pt" ? "Ver detalhes" : "View details"}
            </button>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section
        id="details"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        {/* STACK */}
        <span className="text-cyan-400 font-semibold">
          {language === "pt" ? "Visão Geral" : "Overview"}
        </span>

        <div className="mt-6 flex gap-4 flex-wrap text-sm text-zinc-300">

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            FlutterFlow
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Dart
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Mobile
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            UX Design
          </span>

        </div>

        {/* PROBLEMA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Problema" : "Problem"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Muitos alunos relatavam dificuldade para encontrar informações importantes no sistema acadêmico atual."
              : "Many students reported difficulty finding essential information in the existing academic portal system."}
            <br /><br />
            {language === "pt"
              ? "Além da navegação complexa, a grande quantidade de seções e informações distribuídas em diferentes áreas tornava a experiência pouco intuitiva e mais lenta do que o necessário."
              : "Beyond complex navigation, numerous sections spread across disparate areas made user experience unintuitive and slower than necessary."}
          </p>
        </section>

        {/* SOLUÇÃO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Solução" : "Solution"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "O Unisa App foi desenvolvido com foco em experiência do usuário, reorganizando as funcionalidades mais utilizadas pelos estudantes em uma interface simples e moderna."
              : "Unisa App was created focusing on user experience, reorganizing frequently used student features into a sleek, simple interface."}
            <br /><br />
            {language === "pt"
              ? "O objetivo foi reduzir a quantidade de cliques necessários para acessar informações acadêmicas importantes e melhorar a clareza da navegação."
              : "The objective was reducing required clicks to access key academic data and improving overall navigation clarity."}
          </p>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Funcionalidades" : "Features"}
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ {language === "pt" ? "Login do aluno" : "Student authentication login"}</li>
            <li>✓ {language === "pt" ? "Consulta de notas" : "Grades and transcript viewing"}</li>
            <li>✓ {language === "pt" ? "Visualização de horários" : "Class timetable schedule"}</li>
            <li>✓ {language === "pt" ? "Informações financeiras" : "Financial statement info"}</li>
            <li>✓ {language === "pt" ? "Acesso rápido aos serviços acadêmicos" : "Quick access to academic services"}</li>
            <li>✓ {language === "pt" ? "Navegação simplificada" : "Simplified navigation"}</li>
            <li>✓ {language === "pt" ? "Interface responsiva" : "Responsive mobile interface"}</li>
            <li>✓ {language === "pt" ? "Organização por prioridade de uso" : "Usage-priority layout organization"}</li>
          </ul>
        </section>

        {/* GALERIA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Telas do Aplicativo" : "App Screenshots"}
          </h2>

          <div className="relative">

            <button
              onClick={() => {
                document
                  .getElementById("unisa-gallery")
                  ?.scrollBy({
                    left: -350,
                    behavior: "smooth",
                  });
              }}
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                z-10

                w-10
                h-10

                rounded-full
                bg-black/70
                hover:bg-black

                transition
              "
            >
              ←
            </button>

            <div
              id="unisa-gallery"
              className="
                flex
                gap-6
                overflow-x-auto
                scrollbar-hide
                px-12
                py-2
              "
            >

              {[
                "/projetos/unisa/images/aluno.png",
                "/projetos/unisa/images/academico.png",
                "/projetos/unisa/images/canais.png",
                "/projetos/unisa/images/eventos.png",
                "/projetos/unisa/images/financeiro.png",
                "/projetos/unisa/images/avaliacoes.png",
                "/projetos/unisa/images/atividades.png",
              ].map((img) => (
                <div
                  key={img}
                  onClick={() => openImage(img)}
                  className="
                    relative
                    min-w-62.5
                    h-130

                    bg-zinc-900

                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10

                    cursor-pointer
                    group
                  "
                >
                  <Image
                    src={img}
                    alt="Unisa App"
                    fill
                    className="
                      object-contain
                      group-hover:scale-105
                      transition
                      duration-300
                    "
                  />
                </div>
              ))}

            </div>

            <button
              onClick={() => {
                document
                  .getElementById("unisa-gallery")
                  ?.scrollBy({
                    left: 350,
                    behavior: "smooth",
                  });
              }}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                z-10

                w-10
                h-10

                rounded-full
                bg-black/70
                hover:bg-black

                transition
              "
            >
              →
            </button>

          </div>
        </section>

        {/* DESAFIO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Desafio de UX" : "UX Challenge"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "O principal desafio foi reorganizar uma grande quantidade de funcionalidades acadêmicas sem comprometer a simplicidade da navegação."
              : "The primary challenge was reorganizing a massive set of academic features without sacrificing simplicity."}
            <br /><br />
            {language === "pt"
              ? "Foi necessário identificar quais informações eram mais acessadas pelos alunos e estruturar a interface priorizando rapidez e facilidade de uso."
              : "It required identifying which data points students accessed most frequently and structuring the UI to prioritize speed and usability."}
          </p>
        </section>

        {/* APRENDIZADOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Aprendizados" : "Learnings"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Este projeto reforçou a importância de compreender as dores reais dos usuários antes de iniciar o desenvolvimento de uma solução."
              : "This project reinforced the importance of understanding actual user pain points before architecting a digital solution."}
            <br /><br />
            {language === "pt"
              ? "Durante sua construção aprofundei conhecimentos sobre UX, arquitetura de informação, organização de interfaces e desenvolvimento de aplicações mobile."
              : "During development, I deepened my skills in UX design, information architecture, interface layout, and mobile app building."}
          </p>
        </section>

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={closeImage}
          className="
            fixed inset-0
            z-50
            bg-black/90
            flex items-center justify-center
          "
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Imagem expandida"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </main>
  );
}