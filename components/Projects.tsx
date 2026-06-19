import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold mb-4">
          Projetos
        </p>

        <h2 className="text-5xl font-bold">
          O que eu construí
        </h2>

        <p className="text-gray-600 mt-4">
          Alguns dos projetos que desenvolvi durante minha jornada em Engenharia de Software.
        </p>
      </div>

      <ProjectCard />
    </section>
  );
}