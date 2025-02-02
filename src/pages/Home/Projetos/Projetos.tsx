import { styled, Grid2 as Grid, CardContent, Typography } from "@mui/material"
import { LegacyRef } from "react"
import Theme from "../../../Theme"
import CardProjeto from "./CardProjeto"
import Projeto1 from "../../../assets/images/fb.gif"
import Projeto2 from "../../../assets/images/orkut.webp"
import Projeto3 from "../../../assets/images/snake.gif"
import Projeto4 from "../../../assets/images/doom-fire.gif"

interface ProjetosProps{
  elementRef?: LegacyRef<HTMLDivElement>
}


const Projetos:React.FC<ProjetosProps> = ({ elementRef }) => {
  
  const StyledContainer = styled('div')( () =>({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: Theme.palette.primary.main,
  }) )

  return (
      <StyledContainer ref={ elementRef } >
        <div style={{ margin:"70px 20px 0px 20px" }}>
          <Typography variant="h4" color="primary.contrastText" textAlign="center">
            Projetos
          </Typography>
          <Grid container spacing={2} sx={{marginY:"4%" }}>
            <Grid size={{ xs:12, md:6 }} sx={{ height: "100%" }}>
              <CardProjeto>
                <CardContent sx={{ textAlign:"center", height:"100%" }}>
                  <img src={Projeto1} alt="" />
                </CardContent>
              </CardProjeto>  
            </Grid>
            <Grid size={{ xs:12, md:6 }} color={Theme.palette.primary.contrastText} sx={{ height: "100%" }}>
              <CardProjeto >
                <CardContent sx={{ textAlign:"center", height:"100%" }}>
                <img src={Projeto2} alt="" />
                </CardContent>
              </CardProjeto>  
            </Grid>              
            <Grid size={{ xs:12, md:6 }} color={Theme.palette.primary.contrastText} sx={{ height: "100%" }}>
              <CardProjeto >
                <CardContent sx={{ textAlign:"center", height:"100%" }}>
                <img src={Projeto3} alt="" />
                </CardContent>
              </CardProjeto>  
            </Grid>              
            <Grid size={{ xs:12, md:6 }} color={Theme.palette.primary.contrastText} sx={{ height: "100%" }}>
              <CardProjeto >
                <CardContent sx={{ textAlign:"center", height:"100%" }}>
                <img src={Projeto4} alt="" />
                </CardContent>
              </CardProjeto>  
            </Grid>              
          </Grid>
        </div>
      </StyledContainer>
    )
  }
  
  export default Projetos
  