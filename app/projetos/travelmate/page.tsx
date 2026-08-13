"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { FiGlobe, FiSun, FiMoon } from "react-icons/fi";

export default function TravelMatePage() {
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
            src="/projetos/travelmate/images/login.png"
            alt="TravelMate"
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
            {language === "pt" ? "Projeto Acadêmico" : "Academic Project"}
          </span>

          <h1 className="text-7xl font-bold mt-4">
            TravelMate
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            {language === "pt"
              ? "Plataforma mobile de hospedagem e planejamento de viagens desenvolvida como projeto acadêmico, combinando recursos de busca de hospedagens com funcionalidades sociais para conectar viajantes."
              : "Mobile accommodation and travel planning platform developed as an academic project, combining stay searches with social features to connect travelers."}
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
            UX Design
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            {language === "pt" ? "Planejamento de Viagens" : "Travel Planning"}
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            {language === "pt" ? "Rede Social" : "Social Network"}
          </span>

        </div>

        {/* PROBLEMA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Problema" : "Problem"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Planejar uma viagem normalmente exige consultar diversas plataformas para pesquisar hospedagens, orçamento, alimentação e recomendações."
              : "Planning a trip usually requires checking multiple platforms for stays, budget, meals, and recommendations."}
            <br /><br />
            {language === "pt"
              ? "Além disso, viajantes frequentemente perdem oportunidades de interação com pessoas conhecidas que estão visitando a mesma região."
              : "Additionally, travelers often miss opportunities to connect with acquaintances visiting the same region."}
          </p>
        </section>

        {/* SOLUÇÃO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Solução" : "Solution"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "O TravelMate centraliza a busca por hospedagens através de filtros como localização, duração da viagem, orçamento e alimentação inclusa."
              : "TravelMate centralizes accommodation discovery using filters like location, trip length, budget, and included meals."}
            <br /><br />
            {language === "pt"
              ? "A plataforma também incorpora recursos sociais, permitindo acompanhar amigos, compartilhar publicações e receber notificações quando pessoas seguidas estiverem próximas."
              : "The platform also integrates social features, allowing users to follow friends, share posts, and receive notifications when connections are nearby."}
          </p>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Funcionalidades" : "Features"}
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ {language === "pt" ? "Pesquisa de hospedagens" : "Accommodation search"}</li>
            <li>✓ {language === "pt" ? "Filtro por localização" : "Location filter"}</li>
            <li>✓ {language === "pt" ? "Filtro por orçamento" : "Budget filter"}</li>
            <li>✓ {language === "pt" ? "Filtro por duração da viagem" : "Trip duration filter"}</li>
            <li>✓ {language === "pt" ? "Alimentação inclusa" : "Meals included option"}</li>
            <li>✓ {language === "pt" ? "Feed de publicações" : "Social publication feed"}</li>
            <li>✓ {language === "pt" ? "Sistema de seguidores" : "Followers system"}</li>
            <li>✓ {language === "pt" ? "Notificação de proximidade entre usuários" : "Nearby user proximity notifications"}</li>
            <li>✓ {language === "pt" ? "Perfil do viajante" : "Traveler profile"}</li>
          </ul>
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
                  .getElementById("travelmate-gallery")
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
              id="travelmate-gallery"
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
                "/projetos/travelmate/images/viagens.png",
                "/projetos/travelmate/images/amigos.png",
                "/projetos/travelmate/images/feed.png",
                "/projetos/travelmate/images/passaporte.png",
                "/projetos/travelmate/images/config.png",
              ].map((img) => (
                <div
                  key={img}
                  onClick={() => openImage(img)}
                  className="
                    relative
                    min-w-62.5
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
                    alt="TravelMate"
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
                  .getElementById("travelmate-gallery")
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
              ? "O principal desafio foi combinar funcionalidades de uma plataforma de hospedagem com elementos de rede social, mantendo uma navegação intuitiva para o usuário."
              : "The main challenge was combining stay booking features with social media elements while maintaining intuitive navigation."}
            <br /><br />
            {language === "pt"
              ? "Foi necessário organizar diferentes fluxos de interação, como pesquisa de hospedagens, visualização de publicações e gerenciamento de conexões entre usuários sem tornar a experiência complexa."
              : "It required structuring distinct interaction flows — stay searches, feed viewing, and friend connection management — without making user experience complex."}
          </p>
        </section>

        {/* APRENDIZADOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Aprendizados" : "Learnings"}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Durante o desenvolvimento do TravelMate tive meu primeiro contato com conceitos de design de produto, organização de fluxos de navegação e desenvolvimento mobile."
              : "During TravelMate development, I gained hands-on experience in product design concepts, navigation flow architecture, and mobile development."}
            <br /><br />
            {language === "pt"
              ? "O projeto contribuiu para minha compreensão sobre experiência do usuário, modelagem de funcionalidades sociais e construção de interfaces voltadas para dispositivos móveis."
              : "The project strengthened my understanding of user experience, social feature modeling, and building mobile-first user interfaces."}
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