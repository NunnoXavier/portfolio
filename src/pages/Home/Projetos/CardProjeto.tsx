import { ReactNode } from "react";
import MyCard from "../../../components/MyCard/MyCard";
import Theme from "../../../Theme";
import { Link, Typography, Box, styled } from '@mui/material'

  interface CardProjetoProps{
    children?: ReactNode,
    linkProjeto?: string,
    linkCodigo?: string
  }

  const StyledMyCard = styled(MyCard)({
    '&:hover .desaparecer' : { display: 'block' }
  })

  const corTexto = "#999999"

  const CardProjeto: React.FC<CardProjetoProps> = ({ children, linkProjeto, linkCodigo }) => {
    return(
        <StyledMyCard myStyle={ { background: Theme.palette.primary.main, position: 'relative'} }>
            { children }

            <Box className='desaparecer' sx={ { display: 'none',  position: 'absolute', top: '0', left: '0', 
              width: '100%', height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.40)' } }>
            </Box>  
            <MyCard className='desaparecer' myStyle={{ position: 'absolute', top: '70%', left: '43%', padding: '0px 10px',
              backgroundColor: 'rgba(0,0,0,0.50)',
              display: 'none'
             }}>              
              <Link href={linkProjeto} target="blank" underline="hover" color={ corTexto }>
                <Typography variant="h6">
                  Abrir
                </Typography>
              </Link>
            </MyCard>
            <MyCard className='desaparecer' myStyle={{ position: 'absolute', top: '70%', left: '52%', padding: '0px 10px',
              backgroundColor: 'rgba(0,0,0,0.50)',
              display: 'none'
             }}>              
              <Link href={linkCodigo} target="blank" underline="hover" color={ corTexto }>
                <Typography variant="h6">
                  Ver Código
                </Typography>
              </Link>              
            </MyCard>              
        </StyledMyCard>
    )
  }

  export default CardProjeto