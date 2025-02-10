import { styled, Container, Typography, Link } from "@mui/material"
import Grid from "@mui/material/Grid2"
import DownloadIcon from '@mui/icons-material/Download'
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "../../../assets/images/avatar.jpg"
import Theme from "../../../Theme";
import StyledButton from "../../../components/StyledButton/StyledButton"
import BackgroundImage from "../../../components/BackgroundImage/BackgroundImage"
import { LegacyRef, useEffect, useState } from "react"
import Curriculo from "../../../assets/docs/curriculo.pdf"
import './Apresentacao.css'

interface ApresentacaoProps{
  elementRef?: LegacyRef<HTMLDivElement>
}

const StyledSection = styled("div")( () => ({
  backgroundColor: Theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center"
}) )

const StyledAvatar = styled("img")( () => ({
  width: "80%",
  borderRadius: "50%",
  border: `1px solid ${ Theme.palette.primary.light }`
}))

const Apresentacao: React.FC<ApresentacaoProps> = ( { elementRef } ) => {  
  const textoOriginal = "Desenvolvedor de Software"
  const [texto, setTexto] = useState(textoOriginal)

  useEffect(() =>{
    efeitoMaquinaDeEscrever(textoOriginal)
  },[])

  const efeitoMaquinaDeEscrever = (t: string) =>{
    const arr = t.split('')
    let tt = ''
    setTexto(tt)  
    arr.forEach((letra, i) => {
      if(i === 0){
        //return
      } 
      
      setTimeout(() => {
        tt += letra
        setTexto( tt )
        if(i == textoOriginal.length -1){
          setTimeout(() => efeitoMaquinaDeEscrever(textoOriginal), 2000)
          
        }
      },100 * i)
    })
  }


  return ( 
    <StyledSection ref={ elementRef }>
      <Container>
        <Grid container display="flex" alignItems="center">
          <Grid size={{ xs:12, md:5 }}>
            <BackgroundImage>
                <StyledAvatar src={Avatar}/>
            </BackgroundImage>
          </Grid>
          <Grid size={{ xs:12, md:7 }} zIndex={2}>
            <Grid size={{xs:12, md:12}}>
              <Typography variant="h1" color="primary.contrastText" textAlign="center">Isaias Xavier</Typography>
            </Grid>
            <Grid size={{xs:12, md:12}}>
              <Typography className="animado" variant="h3" color="primary.contrastText" textAlign="center">{ texto }</Typography>
            </Grid>
            <Grid container display="flex" justifyContent="center" spacing={2} marginTop={4}>
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <StyledButton>
                  <Link 
                    display="flex" color="primary.contrastText" underline="none" justifyContent="center" sx={{width:"100%"}}
                    href={Curriculo} target="_blank"
                    >                  
                    <DownloadIcon/>
                      <Typography>
                        Currículo
                      </Typography>
                    </Link>
                </StyledButton>                
              </Grid>
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <StyledButton>
                  <Link
                  display="flex" color="primary.contrastText" underline="none" justifyContent="center" sx={{width:"100%"}}
                  href="/contato" target="_blank"
                  >
                    <MailIcon/>
                      <Typography>
                        Contato
                      </Typography>
                  </Link>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>        
        </Grid>
      </Container>  
      

    </StyledSection>
  )
}
  
  export default Apresentacao
  