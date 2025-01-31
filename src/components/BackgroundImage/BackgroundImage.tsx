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
            <Box position="absolute" width={"100%"} top={-50} right={0}>
                <AnimatedBackground/>
            </Box>            
            <StyledImageDiv>
                { children }
            </StyledImageDiv>    
        </StyledDiv>

    )
}

//export default withStyles( BackgroundImage )
export default BackgroundImage