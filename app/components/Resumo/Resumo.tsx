export default function Resumo() {
  return (
    <section
      id="Descricao"
      className="
        relative
        w-full
        overflow-hidden
        bg-card
        rounded-lg
        shadow-xl shadow-black/40
        flex flex-col
        items-center
        justify-center
        px-6
        py-20
        md:py-28
      "
    >
    
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

     
      <div className="max-w-6xl text-center flex flex-col gap-8">
    
        <h1
          className="
            text-titulo
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            tracking-tight
            text-shadow-lg text-shadow-purple-900
          "
        >
          Nathan de Oliveira Tavares
        </h1>

    
        <p
          className="
            text-gray-200
            text-base
            sm:text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
            text-shadow-md text-shadow-gray-900
          "
        >
          Desenvolvedor <span className="text-purple-400 font-semibold">Back-end</span> focado em performance,
          arquitetura limpa e soluções digitais que fazem sentido no mundo real.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#Projetos"
            className="
              bg-titulo
              hover:bg-purple-700
              text-white
              font-semibold
              py-3 px-8
              rounded-lg
              transition-all duration-300
              shadow-lg shadow-purple-900/30
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          >
            Ver projetos
          </a>

          <a
            href="#Habilidades"
            className="
              border
              border-purple-500/50
              text-purple-300
              hover:bg-purple-500/10
              font-semibold
              py-3 px-8
              rounded-lg
              transition-all duration-300
            "
          >
            Minhas habilidades
          </a>
        </div>
      </div>
    </section>
  )
}
