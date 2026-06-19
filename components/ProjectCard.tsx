export default function ProjectCard() {
  return (
    <div className="rounded-3xl border p-10 hover:shadow-2xl transition duration-300">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <span className="text-sm text-blue-600 font-semibold">
            Projeto Acadêmico
          </span>

          <h3 className="text-4xl font-bold mt-2">
            Syntaxis
          </h3>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          Nota 9,8/10
        </span>
      </div>

      <p className="text-gray-600 mt-6 text-lg">
        Sistema desktop para gerenciamento de materiais e controle de estoque,
        desenvolvido para auxiliar empresas na organização de entradas,
        saídas e movimentações de produtos.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        <span className="border rounded-full px-4 py-2">
          Java
        </span>

        <span className="border rounded-full px-4 py-2">
          Java Swing
        </span>

        <span className="border rounded-full px-4 py-2">
          WindowBuilder
        </span>

        <span className="border rounded-full px-4 py-2">
          POO
        </span>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/fezika18/Projeto-Syntaxis"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Ver Código
        </a>

        <a
          href="#"
          className="border px-6 py-3 rounded-xl"
        >
          Ver Detalhes
        </a>
      </div>
    </div>
  );
}