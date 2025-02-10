import { styled } from "@mui/system"
import Theme from "../../Theme"
import { HTMLInputTypeAttribute } from "react"
import { Typography } from "@mui/material"

export interface MyInputProps extends React.HTMLAttributes<HTMLInputElement>{
    color?: string,
    fullWidth?: boolean,
    label?: string,
    placeholder?: string,
    name?: string,
    type: HTMLInputTypeAttribute,
    value?: string
}

const StyledDiv = styled('div')( () => ({
    display: "flex",
    position: "relative",
    border: "1px solid #ffffff",
    borderRadius: "4px",
}))

const StyledInput = styled('input')(() => ({
    background: "transparent",
    fontFamily: Theme.typography.fontFamily,
    fontSize: "1.5em",
    fontWeight: "lighter",
    border: "none",
    borderRadius: "4px",
    outline: "none",
    padding: "0em 0.2em 0em 0.2em",
    boxShadow: "none",
    '&:focus':{ 
        background: Theme.palette.secondary.main,
    },
}))

const MyInput:React.FC<MyInputProps> = (props) => {

    return (
        <StyledDiv className="MyInputStyledDiv" 
        style={{     
            marginTop: props.label? "1.5em" : 0,
            width: props.fullWidth? "100%" : "unset", 
        }}>
            <label style={{ position: "absolute", top: -25, left: 5 }}>
                <Typography>
                    {props.label}
                </Typography>
            </label>
            <StyledInput {...props} value={ props.value }
            style={{
                width: "100%",
                ...props.style,
            }} />
        </StyledDiv>
    )
} 

export default MyInput