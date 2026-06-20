export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 px-6 max-w-5xl mx-auto"
    >

      <h2 className="text-center text-5xl font-bold mb-8">
        Sobre Mim
      </h2>

      <div className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Paulistano nascido em 2005, sou apaixonado por tecnologia, 
        automação e desenvolvimento de software. 
        Unindo minha experiência prática em sistemas eletrônicos e 
        telecomunicações com a programação, busco criar soluções 
        inteligentes e eficientes.
        <br /><br />

        {/* Linha sutil de destaque acadêmico */}
        <p className="text-sm text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30 mb-6 inline-block">
        🎓 Engenharia de Software — Conclusão em Dez/2027
        </p>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        O que trago na minha bagagem:
        </p>
        <br /><br />
        • Programação: Java, Python e Desenvolvimento Web (Full Stack).
        <br /><br />
        • Hardware & Infra: Manutenção de sistemas eletrônicos e telecomunicação.
        <br /><br />
        • Idiomas: Inglês Intermediário.
        <br /><br />
        Movido pela curiosidade, estou constantemente criando 
        projetos pessoais para testar novas ideias e expandir 
        meus conhecimentos.
      </div>
    </section>
  );
}