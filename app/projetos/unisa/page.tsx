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
            src="/projetos/unisa/images/login.png"
            alt="Unisa App"
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

          <span className="text-cyan-400 font-semibold">
            Projeto Acadêmico
          </span>

          <h1 className="text-7xl font-bold mt-4">
            Unisa App
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            Aplicativo mobile desenvolvido para repensar a experiência
            acadêmica dos alunos da universidade, tornando o acesso às
            informações mais rápido, intuitivo e organizado.
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
            Problema
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Muitos alunos relatavam dificuldade para encontrar
            informações importantes no sistema acadêmico atual.
            <br /><br />
            Além da navegação complexa, a grande quantidade de seções
            e informações distribuídas em diferentes áreas tornava a
            experiência pouco intuitiva e mais lenta do que o necessário.
          </p>
        </section>

        {/* SOLUÇÃO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Solução
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            O Unisa App foi desenvolvido com foco em experiência do usuário,
            reorganizando as funcionalidades mais utilizadas pelos estudantes
            em uma interface simples e moderna.
            <br /><br />
            O objetivo foi reduzir a quantidade de cliques necessários para
            acessar informações acadêmicas importantes e melhorar a clareza
            da navegação.
          </p>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Funcionalidades
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ Login do aluno</li>
            <li>✓ Consulta de notas</li>
            <li>✓ Visualização de horários</li>
            <li>✓ Informações financeiras</li>
            <li>✓ Acesso rápido aos serviços acadêmicos</li>
            <li>✓ Navegação simplificada</li>
            <li>✓ Interface responsiva</li>
            <li>✓ Organização por prioridade de uso</li>
          </ul>
        </section>

        {/* GALERIA */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Telas do Aplicativo
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
                    min-w-[250px]
                    h-[520px]

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
            Desafio de UX
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            O principal desafio foi reorganizar uma grande quantidade de
            funcionalidades acadêmicas sem comprometer a simplicidade da
            navegação.
            <br /><br />
            Foi necessário identificar quais informações eram mais acessadas
            pelos alunos e estruturar a interface priorizando rapidez e
            facilidade de uso.
          </p>
        </section>

        {/* APRENDIZADOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Aprendizados
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Este projeto reforçou a importância de compreender as dores reais
            dos usuários antes de iniciar o desenvolvimento de uma solução.
            <br /><br />
            Durante sua construção aprofundei conhecimentos sobre UX,
            arquitetura de informação, organização de interfaces e
            desenvolvimento de aplicações mobile.
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