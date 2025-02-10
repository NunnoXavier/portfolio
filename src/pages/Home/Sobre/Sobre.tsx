import { Typography, styled, Card, 
  CardContent, CardHeader, Grid2 as Grid, Stack, List, ListItem} from "@mui/material"
import Skills from "./Skills"
import Theme from "../../../Theme"
import { LegacyRef } from "react"

interface SobreProps{
  elementRef?: LegacyRef<HTMLDivElement>
}

const Sobre:React.FC<SobreProps> = ({ elementRef }) => {

  const StyledSobre = styled("div")( () => ({
    backgroundColor: Theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  }) )

  const StyledCard = styled('div')( () => ({
  //  justifyItems: "center",
    border: `1px solid ${ Theme.palette.primary.light }`,
    borderRadius: "5px",
    minWidth: "400px",
  }))

  return (
    <StyledSobre ref={ elementRef }>
        <Stack alignItems="center" spacing={4} marginTop={8} marginX={2}>
          <Typography variant="h3" color={Theme.palette.primary.main}>
            Sobre
          </Typography>                        
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" color={Theme.palette.primary.main}>
                    Experiência
                  </Typography>
                  <Typography variant="h6" color={Theme.palette.primary.main}>
                    Hipcom Informática SS LTDA
                  </Typography>          
                  <Typography variant="body2" color={Theme.palette.primary.main}>
                    Analista de Desenvolvimento Pleno - Jan/2017 a Jul/2024                    
                  </Typography ><br/>
                  <Typography variant="body1" color={Theme.palette.primary.main}>
                    Desenvolvimento e Implantação de soluções em:
                    <ul>
                      <li>
                        <Typography>
                          Sistemas Desktop Windows (Delphi) voltadas para o varejo alimentício
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          Aplicações de gerenciamento e migração de dados para BI (Qlik e Power BI)
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          Ferramentas para uso interno e suporte técnico
                        </Typography>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" color={Theme.palette.primary.main}>
                    Formação
                  </Typography>
                  <Typography variant="h6" color={Theme.palette.primary.main}>
                    Universidade Cruzeiro do Sul
                  </Typography>          
                  <Typography variant="body2" color={Theme.palette.primary.main}>
                    Tec. em Análise e Desenvolvimento de Sistemas - Jan/2013 a Dez/2014
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Stack>
        <Skills/>
    </StyledSobre>
  )
}
  
  export default Sobre
  