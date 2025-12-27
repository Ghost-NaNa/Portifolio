export default function Projetos() {
  return (
    <section
      id="Projetos"
      className="
        w-full
        py-4 px-2
        mb-4
        sm:px-6
        md:py-7
        flex justify-center
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          max-w-6xl
          w-full
        "
      >
        <ProjectCard
          title="Planttools"
          description="Plataforma de auxílio ao cultivo de plantas, oferecendo informações sobre cuidados, pragas e doenças."
          techs="Node.js, Express, MySQL"
          link="https://planttools.vercel.app/"
          codeLink="https://github.com/Nerd8im/Planttool-Tcc"
        />
      </div>
    </section>
  )
}

const ProjectCard = ({
  title,
  description,
  techs,
  link,
  codeLink,
}: {
  title: string
  description: string
  techs: string
  link: string
  codeLink: string
}) => (
  <div
    className="
      bg-card
      p-6 sm:p-8
      rounded-xl
      shadow-xl
      transition
      transform
      hover:scale-[1.02]
      duration-300
      flex flex-col
      w-full
      justify-between
    "
  >
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-titulo text-shadow-md text-shadow-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-50 text-base sm:text-lg text-shadow-md text-shadow-gray-900 mb-4">
        {description}
      </p>

      <p className="text-sm sm:text-base text-highlight font-medium mb-6">
        <span className="font-semibold">Tecnologias:</span> {techs}
      </p>
    </div>

    <div
      className="
        flex
        flex-col
        sm:flex-row
        gap-3
      "
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-titulo
          text-white
          font-semibold
          text-shadow-md
          py-2 px-4
          rounded-lg
          text-center
          hover:bg-roxo-hover
          hover:text-texto-claro
          transition
        "
      >
        Ver Projeto
      </a>

      <a
        href={codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          border
          border-titulo
          text-titulo
          font-semibold
          text-shadow-md
          py-2 px-4
          rounded-lg
          text-center
          hover:bg-roxo-pastel
          hover:text-fundo-escuro
          transition
        "
      >
        Ver Código
      </a>
    </div>
  </div>
)
