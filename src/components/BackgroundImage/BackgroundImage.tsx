import { ReactNode } from "react"
import { styled,Box } from "@mui/material"
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground"


interface BackgroundImageProps {
    children: ReactNode
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) =>{

    const StyledDiv = styled('div')( () => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 10px",
        zIndex: 1
      }) )

      const StyledImageDiv = styled('div')( () => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
        height: "100%",
        width: "100%"        
      }) )

    return(
        <StyledDiv>
            <Box position="absolute" width={"150%"} top={-150} right={-110} zIndex={0}>
                <AnimatedBackground/>
            </Box>            
            <StyledImageDiv>
                { children }
            </StyledImageDiv>    
        </StyledDiv>

    )
}

export default BackgroundImage