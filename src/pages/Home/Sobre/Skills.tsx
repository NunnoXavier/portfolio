import { styled, Grid2 as Grid, Typography } from "@mui/material"
import CardSkill from "./CardSkill"
import ReactIcon from "../../../assets/icons/react.svg"
import NextJs from "../../../assets/icons/next-js.svg"
import HtmlIcon from "../../../assets/icons/html5.svg"
import JavaScriptIcon from "../../../assets/icons/javascript.svg"
import CssIcon from "../../../assets/icons/css3.svg"
import PythonIcon from "../../../assets/icons/python.svg"
import DelphiIcon from "../../../assets/icons/delphi.svg"
import MysqlIcon from "../../../assets/icons/mysql.svg"
import PostgreIcon from "../../../assets/icons/postgresql.svg"
import GoIcon from "../../../assets/icons/golang.svg"


const Skills = () => {
    
    const StyledContainer = styled('div')( () => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "auto",
    }) )
    
    const StyledGroup = styled(Grid)( () => ({
        marginTop: "20px",
        padding: "10px 10px",
        width: "80%",
    }) )
    
    return(
        <StyledContainer>        
            <Typography variant="h4" style={{ paddingTop: "20px" }}>Habilidades</Typography>            
                <StyledGroup container spacing={2}>            
                    <CardSkill name="React Js" icon={ ReactIcon }/>
                    <CardSkill name="Next Js" icon={ NextJs }/>
                    <CardSkill name="HTML" icon={ HtmlIcon }/>
                    <CardSkill name="Javascript" icon={ JavaScriptIcon }/>
                    <CardSkill name="CSS" icon={ CssIcon }/>
                    <CardSkill name="Python" icon={ PythonIcon }/>
                    <CardSkill name="Delphi" icon={ DelphiIcon }/>
                    <CardSkill name="MySQL" icon={ MysqlIcon }/>
                    <CardSkill name="PostgreSQL" icon={ PostgreIcon }/>
                    <CardSkill name="Go" icon={ GoIcon }/>
                </StyledGroup>
        </StyledContainer>
        
    )
}

export default Skills