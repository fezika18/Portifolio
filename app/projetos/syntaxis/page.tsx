"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { FiGlobe, FiSun, FiMoon } from "react-icons/fi";

export default function SyntaxisPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);
  const router = useRouter();
  const { language, theme, toggleLanguage, toggleTheme } = usePortfolio();

  return (
    <main className="min-h-screen text-white bg-[#0a0a0a]">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/projetos/syntaxis/images/defrente.jpeg"
            alt="Apresentação do Syntaxis"
            fill
            priority
            className="object-cover object-center opacity-50"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />

        {/* BOTTOM FADE */}
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
            {language === "pt" ? "Projeto Acadêmico" : "Academic Project"}
          </span>

          <h1 className="text-7xl font-bold mt-4">
            Syntaxis
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            {language === "pt"
              ? "Sistema desktop para gestão de materiais e controle de estoque desenvolvido em Java, com foco em organização, rastreabilidade e validação de operações."
              : "Desktop system for material management and inventory control developed in Java, focused on organization, traceability, and operation validation."}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/fezika18/Projeto-Syntaxis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              {language === "pt" ? "Ver Código" : "View Code"}
            </a>

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

      {/* DETAILS */}
      <section id="details" className="max-w-5xl mx-auto px-6 py-24">

        <span className="text-cyan-400 font-semibold">
          {language === "pt" ? "Visão Geral" : "Overview"}
        </span>

        <div className="mt-6 flex gap-4 flex-wrap text-sm text-zinc-300">
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Java
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Java Swing
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            WindowBuilder
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            POO
          </span>
        </div>

        {/* PROBLEM */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Problema" : "Problem"}
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Empresas e departamentos frequentemente enfrentam dificuldades para controlar a entrada e saída de materiais, resultando em desperdícios, falta de itens essenciais e perda de organização."
              : "Companies and departments frequently face difficulties controlling material inflow and outflow, leading to waste, stockouts, and disorganization."}
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Solução" : "Solution"}
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "O Syntaxis foi desenvolvido para centralizar o gerenciamento de materiais, permitindo cadastro de produtos, controle de estoque, movimentações e acompanhamento das alterações realizadas pelos usuários."
              : "Syntaxis was developed to centralize material management, allowing product registration, inventory tracking, stock movements, and audit trails for user actions."}
          </p>
        </section>

        {/* FEATURES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Funcionalidades" : "Features"}
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ {language === "pt" ? "Login de usuários" : "User authentication login"}</li>
            <li>✓ {language === "pt" ? "Cadastro de materiais" : "Material registration"}</li>
            <li>✓ {language === "pt" ? "Atualização de estoque" : "Stock level updates"}</li>
            <li>✓ {language === "pt" ? "Controle de entradas e saídas" : "Inflow and outflow tracking"}</li>
            <li>✓ {language === "pt" ? "Busca de produtos" : "Product search filtering"}</li>
            <li>✓ {language === "pt" ? "Registro de movimentações" : "Movement history logging"}</li>
            <li>✓ {language === "pt" ? "Validação contra estoque negativo" : "Negative stock validation"}</li>
            <li>✓ {language === "pt" ? "Validação contra produtos duplicados" : "Duplicate product validation"}</li>
          </ul>
        </section>

        {/* CHALLENGE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Desafio Técnico" : "Technical Challenge"}
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Durante os testes foi identificado um problema na atualização e remoção de produtos após a utilização da busca. O sistema utilizava o índice da lista original em vez da lista filtrada, causando inconsistências na seleção dos itens."
              : "During testing, an issue occurred when updating or deleting products after using search filters. The system used original list indices instead of filtered ones, creating item selection mismatches."}
            <br /><br />
            {language === "pt"
              ? "A solução consistiu em localizar o produto pelo nome selecionado na tabela e recuperar sua posição correta na lista principal antes da execução das operações."
              : "The solution was resolving products by selected table row identifier to retrieve their true position in the main list before performing operations."}
          </p>
        </section>

        {/* GALERIA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Telas do Aplicativo" : "App Screenshots"}
          </h2>

          <div className="relative">

            {/* BOTÃO ESQUERDA */}
            <button
              onClick={() => {
                document
                  .getElementById("syntaxis-gallery")
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

            {/* GALERIA */}
            <div
              id="syntaxis-gallery"
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
                "/projetos/syntaxis/images/login.jpg",
                "/projetos/syntaxis/images/opcoes.jpg",
              ].map((img) => (
                <div
                  key={img}
                  onClick={() => openImage(img)}
                  className="
                    relative
                    min-w-102.5
                    h-130

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
                    alt="Syntaxis"
                    fill
                    className="
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-300
                    "
                  />
                </div>
              ))}

            </div>

            {/* BOTÃO DIREITA */}
            <button
              onClick={() => {
                document
                  .getElementById("syntaxis-gallery")
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

        {/* DEMONSTRAÇÃO EM VÍDEO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Demonstração Prática" : "Live Demo"}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            {language === "pt"
              ? "Confira no vídeo abaixo as principais funcionalidades operando em tempo real, incluindo o fluxo de login, manipulação de estoque e as regras de validação."
              : "Check out the video below to see core features running live, including authentication flow, stock manipulation, and validation logic."}
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <video
              src="/projetos/syntaxis/videos/apresentacao.mp4" 
              controls
              preload="metadata"
              className="w-full h-full object-contain"
              poster="/projetos/syntaxis/images/Demonstracao.jpeg"
            >
              {language === "pt" ? "Seu navegador não suporta a reprodução de vídeos." : "Your browser does not support HTML video playback."}
            </video>
          </div>
        </section>

        {/* GITHUB */}
        <section className="mt-20">
          <a
            href="https://github.com/fezika18/Projeto-Syntaxis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            {language === "pt" ? "Ver Projeto no GitHub" : "View Project on GitHub"}
          </a>
        </section>

      </section>
      {selectedImage && (
        <div
          onClick={closeImage}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
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