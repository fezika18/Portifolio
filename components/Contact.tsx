import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold mb-10">
        Localização e Contato       
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* MAPA */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=São+Paulo&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            className="w-full h-[320px]"
          />
        </div>

        {/* CONTATO */}
        <div>
          <p className="text-zinc-400 mb-8">
            Se quiser conversar sobre oportunidades, projetos ou vagas,
            fique à vontade para me chamar.
          </p>

          <p className="text-zinc-400 mb-8">
            Número de telefone: (11) 94729-0786
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="mailto:ferogerio046@gmail.com"
              className="flex items-center gap-2 bg-cyan-500 text-black font-semibold px-5 py-3 rounded-xl hover:bg-cyan-400 transition"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://github.com/fezika18"
              target="_blank"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-rog%C3%A9rio-a18a69235/"
              target="_blank"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          <p className="text-zinc-500 text-sm mt-10">
            São Paulo, Brasil • Aberto a oportunidades presenciais ou remotas
          </p>
        </div>

      </div>
    </section>
  );
}