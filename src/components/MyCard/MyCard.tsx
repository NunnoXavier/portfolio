import { Card, CardOwnProps, styled } from "@mui/material"

export interface MyCardProps{
  children?: React.ReactNode,
  style?: React.CSSProperties
}

const MyCard:React.FC<MyCardProps> = ({ children, style }) =>{

    const StyledCard = styled(Card)( () =>({
        "&:hover": {
          boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2);',
          
        },
        ...style
     }))

    return(
        <StyledCard>
            { children }
        </StyledCard>
    )
}


export default MyCard