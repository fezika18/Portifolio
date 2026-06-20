"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArifluxPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-white bg-[#0a0a0a]">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/projetos/ariflux/images/logo-noback.png" 
            alt="Apresentação da Ariflux"
            fill
            priority
            className="object-contain object-center opacity-40"
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
            Empresa Co-fundada & Projeto Comercial
          </span>

          <h1 className="text-7xl font-bold mt-4">
            Ariflux
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            Empresa focada no desenvolvimento de web designs modernos, 
            sites institucionais de alta performance e planos 
            recorrentes de manutenção digital para empresas.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.instagram.com/arifluxdigital" // Coloque o link real do perfil de vocês aqui
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Acessar Instagram
            </a>

            <button
            onClick={() => {
                const element = document.getElementById("details");
                element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition text-center"
            >
            Ver detalhes
            </button>
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
            Hostinger / Vercel
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Next.js / React
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Tailwind CSS
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            UI/UX Design
          </span>
          <span className="border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            Modelagem de Negócios (SaaS/Recorrência)
          </span>
        </div>

        {/* PROPOSTA DE VALOR */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">O Modelo de Negócio</h2>
          <p className="text-zinc-400 leading-relaxed">
            A Ariflux nasceu com o propósito de digitalizar pequenas e 
            médias empresas através de sites profissionais sob medida. 
            Além da criação visual e estrutural das páginas, oferecemos um 
            modelo baseado em planos de manutenção contínua, garantindo 
            que o cliente final tenha atualizações de segurança, 
            suporte técnico e ajustes de conteúdo sem dores de cabeça.
          </p>
        </section>

        {/* OPERAÇÃO ATUAL */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Estratégia e Operação</h2>
          <p className="text-zinc-400 leading-relaxed">
            Atuando de forma enxuta (Bootstrap), a operação atual é 
            focada em prospecção ativa e marketing de conteúdo orgânico 
            através das redes sociais. Toda a infraestrutura técnica e de 
            design foi planejada para escalar de forma sustentável à 
            medida que a carteira de clientes iniciais valide as 
            primeiras conversões.
          </p>
        </section>

        {/* SERVIÇOS EM FOCO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Serviços Oferecidos</h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ Criação de Landing Pages de alta conversão</li>
            <li>✓ Desenvolvimento de Sites Institucionais otimizados para SEO</li>
            <li>✓ UI/UX Design focado em experiência do usuário e performance</li>
            <li>✓ Planos de manutenção mensal (Hospedagem, Suporte e Atualizações)</li>
            <li>✓ Otimização de performance de páginas web</li>
          </ul>
        </section>

        {/* ESTADO ATUAL E ROADMAP */}
        <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Estado Atual e Próximos Passos</h2>
        <p className="text-zinc-400 leading-relaxed mb-10">
            A Ariflux opera atualmente em sua fase de validação de mercado (Bootstrap). Nosso foco total está na atração orgânica e prospecção direta para garantir a sustentabilidade financeira desde o primeiro dia.
        </p>

        {/* TIMELINE DE MARCOS */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-10">
            
            {/* FASE 1 - ATUAL */}
            <div className="relative pl-8">
            {/* Ponto indicador ativo */}
            <span className="absolute -left-[11px] top-1.5 bg-cyan-500 w-5 h-5 rounded-full border-4 border-[#0a0a0a] animate-pulse" />
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-800/30">
                Fase Atual
            </span>
            <h3 className="text-xl font-bold mt-2 text-zinc-100">Validação & Prospecção</h3>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-2xl">
                Estruturação do canal de aquisição através do Instagram e abordagem direta de potenciais clientes. Foco em fechar o primeiro contrato de desenvolvimento + manutenção recorrente para validar a oferta.
            </p>
            </div>

            {/* FASE 2 */}
            <div className="relative pl-8">
            {/* Ponto indicador desativado */}
            <span className="absolute -left-[7px] top-2 bg-zinc-700 w-3 h-3 rounded-full border-2 border-[#0a0a0a]" />
            <span className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
                Próximo Passo
            </span>
            <h3 className="text-xl font-bold mt-2 text-zinc-300">Formalização & Infraestrutura</h3>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed max-w-2xl">
                Com o faturamento do primeiro cliente, realizaremos a abertura do MEI para emissão de notas fiscais, contrataremos a infraestrutura de hospedagem profissional e colocaremos no ar o site institucional próprio da Ariflux.
            </p>
            </div>

            {/* FASE 3 */}
            <div className="relative pl-8">
            {/* Ponto indicador desativado */}
            <span className="absolute -left-[7px] top-2 bg-zinc-700 w-3 h-3 rounded-full border-2 border-[#0a0a0a]" />
            <span className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
                Escala
            </span>
            <h3 className="text-xl font-bold mt-2 text-zinc-300">Expansão da Carteira</h3>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed max-w-2xl">
                Automação de processos internos de deploy, criação de templates proprietários em Next.js para acelerar a entrega e expansão da receita recorrente mensal (MRR) através dos planos de manutenção.
            </p>
            </div>

        </div>
        </section>

    </section>
    </main>
  );
}