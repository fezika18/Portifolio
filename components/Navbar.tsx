"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.offsetTop - 80;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* NOME */}
        <h1 className="font-bold text-xl tracking-tight">
          Felipe Rogério
        </h1>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm font-medium">

          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-white text-zinc-400 transition"
            >
              Início
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-white text-zinc-400 transition"
            >
              Projetos
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-white text-zinc-400 transition"
            >
              Sobre
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white text-zinc-400 transition"
            >
              Contato
            </button>
          </li>

        </ul>

      </div>
    </nav>
  );
}