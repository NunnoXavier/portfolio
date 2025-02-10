import { styled, Typography } from "@mui/material"
import Theme from "../../Theme"


export interface MyTextProps extends React.HTMLAttributes<HTMLTextAreaElement>{
    color?: string,
    fullWidth?: boolean,
    label?: string,
    placeholder?: string,
    name?: string,
    value?: string    
}
const StyledDiv = styled('div')( () => ({
    display: "flex",
    position: "relative",
    border: "1px solid #ffffff",
    borderRadius: "4px",
}))

const StyledText = styled('textarea')(() => ({
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

const MyText: React.FC<MyTextProps> = ( props ) =>{


    return (
        <StyledDiv className="MyTextStyledDiv"
        style={{
            marginTop: props.label? "1.5em" : 0, 
            width: props.fullWidth? "100%" : "unset",
        }}>
            <label style={{ position: "absolute", top: -25, left: 5 }}>
                <Typography>
                    {props.label}
                </Typography>
            </label>
            <StyledText {...props} value={ props.value }
            style={{
                width: props.fullWidth? "100%" : "unset",
                ...props.style,
            }}/>
        </StyledDiv>
    )
}

export default MyText