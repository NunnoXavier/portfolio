import Apresentacao from "./Apresentacao/Apresentacao"
import Sobre from "./Sobre/Sobre"
import Projetos from "./Projetos/Projetos"
import NavBar from "../../components/NavBar/NavBar"
import { useRef } from "react"



const Home = () => {
  const sectionHome = useRef<HTMLDivElement | null>(null)
  const sectionSobre = useRef<HTMLDivElement | null>(null)
  const sectionProjetos = useRef<HTMLDivElement | null>(null)
  
  const scrollToSection = (ref:React.RefObject<HTMLElement>) =>{
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  const homeClick = () => {
    scrollToSection(sectionHome)
  }
  const sobreClick = (e:React.SyntheticEvent) => {
    scrollToSection(sectionSobre)
  }
  const projetosClick = () => {
    scrollToSection(sectionProjetos)
  }

  return (
      <>
        <NavBar clickHome={homeClick}  clickSobre={sobreClick} clickProjetos={projetosClick}/>
        <Apresentacao elementRef={ sectionHome }/>
        <Sobre elementRef={ sectionSobre }/>
        <Projetos elementRef={ sectionProjetos }/>
      </>
  )
}
  
  export default Home
  