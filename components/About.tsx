"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function About() {
  const { t } = usePortfolio();

  return (
    <section
      id="sobre"
      className="py-32 px-6 max-w-5xl mx-auto"
    >

      <h2 className="text-center text-5xl font-bold mb-8">
        {t.about.title}
      </h2>

      <div className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {t.about.bio1}
        <br /><br />

        {/* Linha sutil de destaque acadêmico */}
        <p className="text-sm text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30 mb-6 inline-block">
          {t.about.badge}
        </p>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t.about.baggageTitle}
        </p>
        <br /><br />
        {t.about.bullet1}
        <br /><br />
        {t.about.bullet2}
        <br /><br />
        {t.about.bullet3}
        <br /><br />
        {t.about.closing}
      </div>

      {/* SUBSEÇÃO: OBJETIVO */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">
          {t.about.objectiveTitle}
        </h3>

        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>{t.about.objectiveP1}</p>
          <p>{t.about.objectiveP2}</p>
          <p>{t.about.objectiveP3}</p>
        </div>
      </div>

    </section>
  );
}