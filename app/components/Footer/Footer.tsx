export default function Footer() {
    return (
        <footer id="Contato" className="text-center pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Vamos Trabalhar Juntos?</h3>
            <p className="text-lg text-gray-400 mb-6">Entre em contato caso queira discutir sobre algum projeto.</p>

            {/* Link de email usando text-roxo-pastel e hover para destaque */}
            <a href="mailto:seu.email@exemplo.com" className="inline-block text-roxo-pastel hover:text-texto-claro transition duration-200 font-bold text-xl mb-4">
                nathan.oltavares@gmail.com
            </a>

            <div className="flex justify-center space-x-6 text-2xl">
                <a href="#" className="text-roxo-pastel hover:text-texto-claro transition duration-200" title="LinkedIn">Linkedin</a>
                <a href="https://github.com/Ghost-NaNa" className="text-roxo-pastel hover:text-texto-claro transition duration-200" title="GitHub">Github</a>
                <a href="#" className="text-roxo-pastel hover:text-texto-claro transition duration-200" title="Twitter/X">X/Twitter</a>
            </div>

            <p className="text-sm text-gray-500 mt-8">© 2025 Nathan de Oliveira. Desenvolvido com carinho (e React).</p>
        </footer>
    )
}