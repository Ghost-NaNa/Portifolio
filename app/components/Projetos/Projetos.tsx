export default function Projetos() {
    return (
        <section id="Projetos" className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <ProjectCard
                title="Planttools"
                description="Plataforma de auxilio ao cultivo de plantas, oferecendo informações sobre cuidados, pragas e doenças."
                techs="Node.js, Express, MySQL."
                link="https://planttools.vercel.app/"
                codeLink="https://github.com/Nerd8im/Planttool-Tcc"
            />
        </div>
    </section>
    )
}


const ProjectCard = ({ title, description, techs, link, codeLink }: { title: string; description: string; techs: string; link: string; codeLink: string }) => (
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl transition transform hover:scale-[1.02] duration-300">
        <h3 className="text-2xl font-bold text-roxo-pastel mb-2">{title}</h3>
        <p className="text-gray-50 mb-4">{description}</p>
        <p className="text-sm font-medium mb-4">
            <span className="text-texto-claro">Tecnologias:</span> {techs}
        </p>
        <div className="flex space-x-4">
            <a href={link} className="bg-roxo-pastel text-fundo-escuro font-semibold py-2 px-4 rounded-lg hover:bg-roxo-hover hover:text-texto-claro transition">
                Ver Projeto
            </a>
            <a href={codeLink} className="border border-roxo-pastel text-roxo-pastel font-semibold py-2 px-4 rounded-lg hover:bg-roxo-pastel hover:text-fundo-escuro transition">
                Ver Código (GitHub)
            </a>
        </div>
    </div>
);