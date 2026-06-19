export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>
        </div>
      <div className="max-w-5xl text-center">
        <p className="text-cyan-400 font-semibold mb-4">
          Engenharia de Software
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          Construindo soluções
          <br />
          para problemas reais.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
          Sou Felipe Rogério, estudante de Engenharia de Software.
          Atualmente desenvolvo projetos focados em organização,
          automação e experiência do usuário.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projetos"
            className="bg-black text-white px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Ver Projetos
          </a>

          <a
            href="https://github.com/fezika18"
            target="_blank"
            className="border px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}