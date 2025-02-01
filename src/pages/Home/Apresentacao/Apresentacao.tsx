import { styled, Container, Typography,Box } from "@mui/material"
import Grid from "@mui/material/Grid2"
import DownloadIcon from '@mui/icons-material/Download'
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "../../../assets/images/avatar.jpg"
import Theme from "../../../Theme";
import StyledButton from "../../../components/StyledButton/StyledButton"
import BackgroundImage from "../../../components/BackgroundImage/BackgroundImage"
import { LegacyRef } from "react";

interface ApresentacaoProps{
  elementRef?: LegacyRef<HTMLDivElement>
}

const Apresentacao: React.FC<ApresentacaoProps> = ( { elementRef } ) => {  
  
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

  return ( 
    <StyledSection ref={ elementRef }>
      <Container>
        <Grid container display="flex" alignItems="center">
          <Grid size={{ xs:12, md:5 }}>
            <BackgroundImage>
                <StyledAvatar src={Avatar}/>
            </BackgroundImage>
          </Grid>
          <Grid size={{ xs:12, md:7 }}>
            <Typography variant="h1" color="primary.contrastText" textAlign="center">Isaias Xavier</Typography>
            <Typography variant="h2" color="primary.contrastText" textAlign="center">Programador</Typography>
            <Grid container display="flex" justifyContent="center" spacing={2} marginTop={4}>
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon/>
                    <Typography>
                      Currículo
                    </Typography>
                </StyledButton>                
              </Grid>
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <StyledButton>
                  <MailIcon/>
                    <Typography>
                      Contato
                    </Typography>
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
  