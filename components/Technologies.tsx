const technologies = [
  "Java",
  "Python",
  "FlutterFlow",
  "GitHub",
  "Git",
  "Vercel",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold">
          Ferramentas que utilizo
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="
              border 
              border-white/10 
              bg-white/5
              rounded-2xl
              p-8
              text-center
              font-semibold
              hover:shadow-xl
              hover:-translate-y-1
              transition
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}