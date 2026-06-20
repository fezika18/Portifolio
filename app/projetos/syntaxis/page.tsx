"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SyntaxisPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);
  const router = useRouter();

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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        {/* BOTTOM FADE */}
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
            Syntaxis
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            Sistema desktop para gestão de materiais e controle de estoque
            desenvolvido em Java, com foco em organização, rastreabilidade e
            validação de operações.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/fezika18/Projeto-Syntaxis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Ver Código
            </a>

            <a
              href="#details"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Ver detalhes
            </a>
          </div>

        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="max-w-5xl mx-auto px-6 py-24">

        <span className="text-cyan-400 font-semibold">
          Visão Geral
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
          <h2 className="text-3xl font-bold mb-6">Problema</h2>
          <p className="text-zinc-400 leading-relaxed">
            Empresas e departamentos frequentemente enfrentam dificuldades
            para controlar a entrada e saída de materiais, resultando em
            desperdícios, falta de itens essenciais e perda de organização.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Solução</h2>
          <p className="text-zinc-400 leading-relaxed">
            O Syntaxis foi desenvolvido para centralizar o gerenciamento de
            materiais, permitindo cadastro de produtos, controle de estoque,
            movimentações e acompanhamento das alterações realizadas pelos usuários.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades</h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ Login de usuários</li>
            <li>✓ Cadastro de materiais</li>
            <li>✓ Atualização de estoque</li>
            <li>✓ Controle de entradas e saídas</li>
            <li>✓ Busca de produtos</li>
            <li>✓ Registro de movimentações</li>
            <li>✓ Validação contra estoque negativo</li>
            <li>✓ Validação contra produtos duplicados</li>
          </ul>
        </section>

        {/* CHALLENGE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Desafio Técnico</h2>
          <p className="text-zinc-400 leading-relaxed">
            Durante os testes foi identificado um problema na atualização
            e remoção de produtos após a utilização da busca. O sistema
            utilizava o índice da lista original em vez da lista filtrada,
            causando inconsistências na seleção dos itens.
            <br /><br />
            A solução consistiu em localizar o produto pelo nome selecionado
            na tabela e recuperar sua posição correta na lista principal antes
            da execução das operações.
          </p>
        </section>
        <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">Imagens do Projeto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {["/projetos/syntaxis/images/login.jpg", "/projetos/syntaxis/images/opcoes.jpg", "/projetos/syntaxis/images/codigo.jpg"].map((img) => (
                <div
                    key={img}
                    onClick={() => openImage(img)}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
                >
                    <Image
                    src={img}
                    alt="Syntaxis"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    />
                </div>
                ))}

            </div>
        </section>

        {/* DEMONSTRAÇÃO EM VÍDEO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Demonstração Prática</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Confira no vídeo abaixo as principais funcionalidades operando em tempo real, incluindo o fluxo de login, manipulação de estoque e as regras de validação.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <video
              src="/projetos/syntaxis/videos/apresentacao.mp4" 
              controls
              preload="metadata"
              className="w-full h-full object-contain"
              poster="/projetos/syntaxis/images/Demonstracao.jpeg"
            >
              Seu navegador não suporta a reprodução de vídeos.
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
            Ver Projeto no GitHub
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