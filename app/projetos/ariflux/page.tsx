"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePortfolio } from "@/context/PortfolioContext";
import { FiGlobe, FiSun, FiMoon } from "react-icons/fi";

export default function ArifluxPage() {
  const router = useRouter();
  const { language, theme, toggleLanguage, toggleTheme } = usePortfolio();

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
            {language === "pt" ? "Empresa Co-fundada & Projeto Comercial" : "Co-founded Company & Commercial Project"}
          </span>

          <h1 className="text-7xl font-bold mt-4">
            Ariflux
          </h1>

          <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
            {language === "pt"
              ? "Empresa focada no desenvolvimento de web designs modernos, sites institucionais de alta performance e planos recorrentes de manutenção digital para empresas."
              : "Company focused on developing modern web designs, high-performance institutional websites, and recurring digital maintenance plans for businesses."}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://ariflux.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              {language === "pt" ? "Acessar Site" : "Visit Website"}
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
            {language === "pt" ? "Modelagem de Negócios (SaaS/Recorrência)" : "Business Modeling (SaaS/Recurring)"}
          </span>
        </div>

        {/* PROPOSTA DE VALOR */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "O Modelo de Negócio" : "The Business Model"}
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "A Ariflux nasceu com o propósito de digitalizar pequenas e médias empresas através de sites profissionais sob medida. Além da criação visual e estrutural das páginas, oferecemos um modelo baseado em planos de manutenção contínua, garantindo que o cliente final tenha atualizações de segurança, suporte técnico e ajustes de conteúdo sem dores de cabeça."
              : "Ariflux was founded to digitize small and medium-sized businesses through tailored professional websites. Beyond visual and structural web creation, we offer a model based on continuous maintenance plans, ensuring technical support, security updates, and hassle-free content adjustments for clients."}
          </p>
        </section>

        {/* OPERAÇÃO ATUAL */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Estratégia e Operação" : "Strategy & Operations"}
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {language === "pt"
              ? "Atuando de forma enxuta (Bootstrap), a operação atual é focada em prospecção ativa e marketing de conteúdo orgânico através das redes sociais. Toda a infraestrutura técnica e de design foi planejada para escalar de forma sustentável à medida que a carteira de clientes iniciais valide as primeiras conversões."
              : "Operating leanly (Bootstrap), current operations focus on active outreach and organic content marketing via social media. The technical and design infrastructure is built to scale sustainably as initial clients validate early conversions."}
          </p>
        </section>

        {/* SERVIÇOS EM FOCO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Serviços Oferecidos" : "Offered Services"}
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>✓ {language === "pt" ? "Criação de Landing Pages de alta conversão" : "High-converting Landing Page creation"}</li>
            <li>✓ {language === "pt" ? "Desenvolvimento de Sites Institucionais otimizados para SEO" : "SEO-optimized Institutional Website development"}</li>
            <li>✓ {language === "pt" ? "UI/UX Design focado em experiência do usuário e performance" : "UI/UX Design focused on user experience and performance"}</li>
            <li>✓ {language === "pt" ? "Planos de manutenção mensal (Hospedagem, Suporte e Atualizações)" : "Monthly maintenance plans (Hosting, Support, and Updates)"}</li>
            <li>✓ {language === "pt" ? "Otimização de performance de páginas web" : "Web page performance optimization"}</li>
          </ul>
        </section>

        {/* ESTADO ATUAL E ROADMAP */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === "pt" ? "Estado Atual e Próximos Passos" : "Current Status & Roadmap"}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-10">
            {language === "pt"
              ? "A Ariflux opera atualmente em sua fase de validação de mercado (Bootstrap). Nosso foco total está na atração orgânica e prospecção direta para garantir a sustentabilidade financeira desde o primeiro dia."
              : "Ariflux is currently operating in its market validation phase (Bootstrap). Total focus is on organic attraction and direct outreach to ensure financial sustainability from day one."}
          </p>

          {/* TIMELINE DE MARCOS */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-10">

            {/* FASE 1 - ATUAL */}
            <div className="relative pl-8">
              <span className="absolute -left-2.75 top-1.5 bg-cyan-500 w-5 h-5 rounded-full border-4 border-[#0a0a0a] animate-pulse" />
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-800/30">
                {language === "pt" ? "Fase Atual" : "Current Phase"}
              </span>
              <h3 className="text-xl font-bold mt-2 text-zinc-100">
                {language === "pt" ? "Validação & Prospecção" : "Validation & Prospecting"}
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-2xl">
                {language === "pt"
                  ? "Estruturação do canal de aquisição através do Instagram e abordagem direta de potenciais clientes. Foco em fechar o primeiro contrato de desenvolvimento + manutenção recorrente para validar a oferta."
                  : "Structuring acquisition channels via Instagram and direct outreach to potential clients. Focus on closing the first development + recurring maintenance contract to validate the offer."}
              </p>
            </div>

            {/* FASE 2 */}
            <div className="relative pl-8">
              <span className="absolute -left-1.75 top-2 bg-zinc-700 w-3 h-3 rounded-full border-2 border-[#0a0a0a]" />
              <span className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
                {language === "pt" ? "Próximo Passo" : "Next Step"}
              </span>
              <h3 className="text-xl font-bold mt-2 text-zinc-300">
                {language === "pt" ? "Formalização & Infraestrutura" : "Formalization & Infrastructure"}
              </h3>
              <p className="text-zinc-500 text-sm mt-2 leading-relaxed max-w-2xl">
                {language === "pt"
                  ? "Com o faturamento do primeiro cliente, realizaremos a abertura do MEI para emissão de notas fiscais, contrataremos a infraestrutura de hospedagem profissional e colocaremos no ar o site institucional próprio da Ariflux."
                  : "With revenue from the first client, we will register official business details, acquire professional hosting infrastructure, and launch Ariflux's own institutional website."}
              </p>
            </div>

            {/* FASE 3 */}
            <div className="relative pl-8">
              <span className="absolute -left-1.75 top-2 bg-zinc-700 w-3 h-3 rounded-full border-2 border-[#0a0a0a]" />
              <span className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
                {language === "pt" ? "Escala" : "Scaling"}
              </span>
              <h3 className="text-xl font-bold mt-2 text-zinc-300">
                {language === "pt" ? "Expansão da Carteira" : "Portfolio Expansion"}
              </h3>
              <p className="text-zinc-500 text-sm mt-2 leading-relaxed max-w-2xl">
                {language === "pt"
                  ? "Automação de processos internos de deploy, criação de templates proprietários em Next.js para acelerar a entrega e expansão da receita recorrente mensal (MRR) através dos planos de manutenção."
                  : "Automation of internal deployment processes, creation of proprietary Next.js templates to speed up delivery, and expanding monthly recurring revenue (MRR) through maintenance plans."}
              </p>
            </div>

          </div>
        </section>

      </section>
    </main>
  );
}