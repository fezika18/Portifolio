import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 py-20">

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

        {/* FOTO */}
        <div className="shrink-0">
          <div className="w-40 h-40 md:w-52 md:h-52 relative rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile/images/profile.jpeg"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXTO */}
        <div>
          <p className="text-cyan-400 font-semibold">
            Desenvolvedor Full Stack
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Olá, eu sou Felipe 👋
          </h1>

          <p className="text-zinc-400 mt-5 text-lg max-w-xl">
            Estudante de Engenharia de Software focado em criar aplicações
            modernas, com UX bem estruturado e foco em performance.
          </p>

          {/* BOTÕES */}
          <div className="flex gap-4 mt-6 flex-wrap">

            <a
              href="https://github.com/fezika18"
              target="_blank"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-rog%C3%A9rio-a18a69235/"
              target="_blank"
              className="flex items-center gap-2 bg-cyan-500 text-black font-semibold px-5 py-3 rounded-xl hover:bg-cyan-400 transition"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

          </div>

          {/* CTA (AGORA DENTRO DO FLUXO NORMAL) */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <p className="text-zinc-400 text-sm">
              Mais abaixo você pode conferir meus projetos
            </p>

            <div className="animate-bounce text-zinc-400 text-xl">
              ↓
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}