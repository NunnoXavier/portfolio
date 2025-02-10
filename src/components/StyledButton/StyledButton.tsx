import { styled } from "@mui/material"
import { MouseEventHandler, ReactNode } from "react"
import Theme from "../../Theme"

interface StyledButtonProps{
    children?: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: "submit" | "button" | "reset" | undefined
} 

const StyledButton: React.FC<StyledButtonProps> = ( props ) => {
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
        <SButton onClick={props.onClick} type={ props.type }>
            { props.children }
        </SButton>

    )
}

export default StyledButton