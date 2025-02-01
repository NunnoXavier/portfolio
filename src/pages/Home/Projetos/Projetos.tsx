import { LegacyRef } from "react"

interface ProjetosProps{
  elementRef?: LegacyRef<HTMLDivElement>
}


const Projetos:React.FC<ProjetosProps> = ({ elementRef }) => {
    return (
      <section ref={ elementRef }>
        Projetos
      </section>
    )
  }
  
  export default Projetos
  