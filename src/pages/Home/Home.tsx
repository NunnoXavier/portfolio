import Apresentacao from "./Apresentacao/Apresentacao"
import Sobre from "./Sobre/Sobre"
import Projetos from "./Projetos/Projetos"
import NavBar from "../../components/NavBar/NavBar"

const Home = () => {
    return (
      <>
        <NavBar/>
        <Apresentacao/>
        <Sobre/>
        <Projetos/>
      </>
    )
  }
  
  export default Home
  