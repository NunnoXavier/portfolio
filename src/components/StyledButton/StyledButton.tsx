import { styled } from "@mui/material"
import { ReactNode } from "react"
import Theme from "../../Theme"

interface StyledButtonProps{
    children: ReactNode
} 

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
    const SButton = styled("button")( () => ({
        background: "transparent",
        color: Theme.palette.primary.contrastText,
        border: `1px solid ${ Theme.palette.primary.contrastText }`,
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 5px",
        width: "100%",
        gap: "10px",
        '&:hover': {
            backgroundColor: Theme.palette.secondary.light
        }
    }))


    return(
        <SButton>
            { children }
        </SButton>

    )
}

export default StyledButton