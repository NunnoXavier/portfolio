import { Card, styled } from "@mui/material"

export interface MyCardProps{
  children?: React.ReactNode,
  myStyle?: React.CSSProperties
}

const MyCard:React.FC<MyCardProps> = ({ children, myStyle }) =>{

    const StyledCard = styled(Card)( () =>({
        "&:hover": {
          boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2);',
          
        },
        ...myStyle
     }))

    return(
        <StyledCard>
            { children }
        </StyledCard>
    )
}


export default MyCard