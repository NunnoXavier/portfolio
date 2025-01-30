import { styled, Container, Typography,Button } from "@mui/material"
import Grid from "@mui/material/Grid2"
import DownloadIcon from '@mui/icons-material/Download'
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "../../../assets/images/avatar.jpg"


const Apresentacao = () => {  
  
  const StyledSection = styled("div")( () => ({
    backgroundColor: "black",
    height: "100vh"
  }) )

  const StyledAvatar = styled("img")( () => ({
    width: "90%",
    borderRadius: "50%"
  }))

  return ( 
    <StyledSection>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs:12, md:4 }}>
            <StyledAvatar src={Avatar}/>
          </Grid>
          <Grid size={{ xs:12, md:8 }}>
            <Typography variant="h1" color="primary" textAlign="center">Isaias Xavier</Typography>
            <Typography variant="h2" color="primary" textAlign="center">Programador</Typography>
            <Grid container display="flex" justifyContent="center">
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <Button>
                  <DownloadIcon/>
                  Currículo
                </Button>                
              </Grid>
              <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                <Button>
                  <MailIcon/>
                  Contato
                </Button>
              </Grid>
            </Grid>
          </Grid>        
        </Grid>
      </Container>  
      

    </StyledSection>
  )
}
  
  export default Apresentacao
  