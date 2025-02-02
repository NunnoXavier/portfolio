import { Typography, styled, Card, 
  CardContent, CardHeader, Grid2 as Grid, Stack} from "@mui/material"
import Skills from "./Skills"
import Theme from "../../../Theme"
import { LegacyRef } from "react"
import { Height } from "@mui/icons-material"

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
    justifyItems: "center",
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
                <CardHeader title="Experiência"/> 
                <CardContent>
                <Typography variant="body1" color={Theme.palette.primary.main}>
                    blablablablabla
                  </Typography>          
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <StyledCard>
                <CardHeader title="Formação"/> 
                <CardContent>
                  <Typography variant="body1" color={Theme.palette.primary.main}>
                    blablablablabla
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
  