export default function Resumo() {
    return (
        <section id="Descricao" className="w-full h-fit max-h-140 bg-gray-800 flex flex-col justify-center items-center gap-10 py-20 px-4 rounded-lg">
            <div className="w-fit max-w-6xl">
                <h1 className="text-purple-500 text-7xl  font-sans font-bold">
                    Nathan de Oliveira Tavares
                </h1>
            </div>
            <div className="w-fit max-w-6x1">
                <p className="text-gray-300 text-xl font-sans leading-relaxed">
                    Desenvolvedor Back-End | Entusiasta de UX/UI
                </p>
            </div>
            <div>
                <button className="cursor-pointer bg-purple-500 hover:bg-purple-700 text-purple-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    <a href="#Projetos">Veja meus projetos!</a>
                </button>
            </div>
        </section>
    )
}