import Resumo from "./components/Resumo/Resumo";
import Topico from "./components/Topico/Topico";
import SobreMim from "./components/Sobre-mim/Sobre-mim";
import Habilidades from "./components/Habilidades/habilidades";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Resumo />
      <Topico Topico="Sobre mim" />
      <SobreMim />
      <Topico Topico="O que eu sei"/>
      <Habilidades />
      <Topico Topico="Meus Projetos"/>
      <Projetos/>
      <Footer />
    </>
  );
}