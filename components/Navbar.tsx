export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50"> 
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-tight">
          Felipe Rogério
        </h1>

        <ul className="flex gap-8 text-sm font-mediums">
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li>
            <a href="#projetos">Projetos</a>
          </li>

          <li>
            <a href="#sobre">Sobre</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}