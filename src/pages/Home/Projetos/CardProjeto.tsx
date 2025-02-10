import { ReactNode } from "react";
import MyCard from "../../../components/MyCard/MyCard";
import Theme from "../../../Theme";


  interface CardProjetoProps{
    children?: ReactNode,
  }

  const CardProjeto: React.FC<CardProjetoProps> = ({ children }) => {
    return(
        <MyCard myStyle={{ background: Theme.palette.primary.main }}>
            { children }
        </MyCard>
    )
  }

  export default CardProjeto