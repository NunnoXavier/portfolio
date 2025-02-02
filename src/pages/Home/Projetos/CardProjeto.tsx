import { ReactNode } from "react";
import MyCard from "../../../components/MyCard/MyCard";
import Theme from "../../../Theme";


  interface CardProjetoProps{
    children?: ReactNode,
  }

  const CardProjeto: React.FC<CardProjetoProps> = ({ children }) => {
    return(
        <MyCard style={{ background: Theme.palette.primary.main, '&:hover': { background:Theme.palette.primary.light } }}>
            { children }
        </MyCard>
    )
  }

  export default CardProjeto