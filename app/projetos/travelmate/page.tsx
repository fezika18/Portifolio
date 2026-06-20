"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TravelMatePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const router = useRouter();

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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        {/* FADE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

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
          ← Voltar
        </button>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">

          <span className="text-cyan-400 font-semibold bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30 text-sm">
            Projeto Acadêmico
          </span>

          <h1 className="text-7xl font-bold mt-4">
            TravelMate
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            Plataforma mobile de hospedagem e planejamento de viagens
            desenvolvida como projeto acadêmico, combinando recursos de
            busca de hospedagens com funcionalidades sociais para conectar viajantes.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#details"
              className="
                border border-white/20
                px-6 py-3
                rounded-xl
                hover:bg-white/10
                transition
              "
            >
              Ver detalhes
            </a>
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
          Visão Geral
        </span>

        <div className="mt-6 flex gap-4 flex-wrap text-sm text-zinc-300">

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            FlutterFlow
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            UX Design
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Planejamento de Viagens
          </span>

          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Rede Social
          </span>

        </div>

        {/* PROBLEMA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Problema
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Planejar uma viagem normalmente exige consultar diversas
            plataformas para pesquisar hospedagens, orçamento,
            alimentação e recomendações.
            <br /><br />
            Além disso, viajantes frequentemente perdem oportunidades
            de interação com pessoas conhecidas que estão visitando
            a mesma região.
          </p>
        </section>

        {/* SOLUÇÃO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Solução
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            O TravelMate centraliza a busca por hospedagens através
            de filtros como localização, duração da viagem,
            orçamento e alimentação inclusa.
            <br /><br />
            A plataforma também incorpora recursos sociais,
            permitindo acompanhar amigos, compartilhar publicações
            e receber notificações quando pessoas seguidas
            estiverem próximas.
          </p>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Funcionalidades
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ Pesquisa de hospedagens</li>
            <li>✓ Filtro por localização</li>
            <li>✓ Filtro por orçamento</li>
            <li>✓ Filtro por duração da viagem</li>
            <li>✓ Alimentação inclusa</li>
            <li>✓ Feed de publicações</li>
            <li>✓ Sistema de seguidores</li>
            <li>✓ Notificação de proximidade entre usuários</li>
            <li>✓ Perfil do viajante</li>
          </ul>
        </section>

        {/* GALERIA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Telas do Aplicativo
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
                    min-w-[250px]
                    h-[520px]

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
            Desafio de UX
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            O principal desafio foi combinar funcionalidades de uma
            plataforma de hospedagem com elementos de rede social,
            mantendo uma navegação intuitiva para o usuário.
            <br /><br />
            Foi necessário organizar diferentes fluxos de interação,
            como pesquisa de hospedagens, visualização de publicações
            e gerenciamento de conexões entre usuários sem tornar
            a experiência complexa.
          </p>
        </section>

        {/* APRENDIZADOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Aprendizados
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Durante o desenvolvimento do TravelMate tive meu primeiro
            contato com conceitos de design de produto, organização
            de fluxos de navegação e desenvolvimento mobile.
            <br /><br />
            O projeto contribuiu para minha compreensão sobre
            experiência do usuário, modelagem de funcionalidades
            sociais e construção de interfaces voltadas para
            dispositivos móveis.
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