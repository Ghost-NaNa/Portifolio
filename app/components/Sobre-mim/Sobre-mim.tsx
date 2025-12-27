export default function SobreMim() {
  return (
    <section
      id="SobreMim"
      className="
        w-full 
        bg-card 
        shadow-lg shadow-black/40
        flex justify-center
        py-4 px-2
        sm:py-10 sm:px-6
        md:py-14
        rounded-lg
      "
    >
      <div
        className="
          flex flex-col
          gap-6
          max-w-5xl
          text-center
          md:text-justify
        "
      >
        <p
          className="
            text-gray-50
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            font-sans
            text-shadow-md text-shadow-gray-900
          "
        >
          Sou um desenvolvedor
          <span className="text-purple-400 font-semibold">
            {" "}Back-end{" "}
          </span>
          começando na área. Minha missão é transformar ideias complexas em soluções digitais robustas e eficazes.
        </p>

        <p
          className="
            text-gray-50
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            font-sans
            text-shadow-md text-shadow-gray-900
          "
        >
          Sou apaixonado por performance e sempre me dedico a escrever um código limpo e sustentável. Minha experiência abrange desde o planejamento arquitetural até a implementação de interfaces intuitivas.
        </p>
      </div>
    </section>
  )
}
