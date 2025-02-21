import { Card, styled } from "@mui/material"

export interface MyCardProps{
  children?: React.ReactNode,
  myStyle?: React.CSSProperties,
  hover?: React.CSSProperties,
  className?: string
}

const MyCard:React.FC<MyCardProps> = ({ children, myStyle, hover, className }) =>{

    const StyledCard = styled(Card)( () =>(
      {
        "&:hover": { boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2);', ...hover },
        ...myStyle
     }))

    return(
        <StyledCard className={className}>
            { children }
        </StyledCard>
    )
}


export default MyCard