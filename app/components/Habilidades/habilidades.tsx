export default function Habilidades() {
    const linguagens = ["JavaScript", "TypeScript", "SQL"]
    const front = ["React / Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    const back = ["Node.js", "Express", "MySQL", "Git"]

    return (
        <section id="Habilidades" className="w-full">
            <div className="w-full grid justify-between align-center grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4">
                    <h3 className="text-2xl font-semibold mb-3 text-roxo-pastel">Linguagens Base</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {linguagens.map((item) => (
                            <li key={item} className="text-gray-50">{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4">
                    <h3 className="text-2xl font-semibold mb-3 text-roxo-pastel">Front-end</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {front.map((item) => (
                            <li key={item} className="text-gray-50">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4">
                    <h3 className="text-2xl font-semibold mb-3 text-roxo-pastel">Back-end</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {back.map((item) => (
                            <li key={item} className="text-gray-50">{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}