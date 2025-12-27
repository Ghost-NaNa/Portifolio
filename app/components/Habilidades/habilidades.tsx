export default function Habilidades() {
  const linguagens = ["JavaScript", "TypeScript", "SQL"]
  const front = ["React / Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  const back = ["Node.js", "Express", "MySQL", "Git"]

  return (
    <section
      id="Habilidades"
      className="
        w-full 
        flex justify-around
        py-4 px-2
        sm:py-10 sm:px-6
        md:py-7
        rounded-lg
      "
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6
          max-w-6xl
          w-full
        "
      >
        {/* Linguagens */}
        <div className="bg-card shadow-lg shadow-black/40 p-6 rounded-xl border-t-4 h-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-subtitle text-shadow-md text-shadow-gray-900">
            Linguagens Base
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            {linguagens.map((item) => (
              <li key={item} className="text-gray-50 text-shadow-md text-shadow-gray-900">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Front-end */}
        <div className="bg-card shadow-lg shadow-black/40 p-6 rounded-xl border-t-4 h-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-subtitle text-shadow-md text-shadow-gray-900">
            Front-end
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            {front.map((item) => (
              <li key={item} className="text-gray-50 text-shadow-md text-shadow-gray-900">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Back-end */}
        <div className="bg-card shadow-lg shadow-black/40 p-6 rounded-xl border-t-4 h-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-subtitle text-shadow-md text-shadow-gray-900">
            Back-end
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            {back.map((item) => (
              <li key={item} className="text-gray-50 text-shadow-md text-shadow-gray-900">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
