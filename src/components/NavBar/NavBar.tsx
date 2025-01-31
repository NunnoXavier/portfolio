import { AppBar, styled, Toolbar, MenuItem } from "@mui/material"
import Theme from "../../Theme"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)( () => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    const StyledMenuItem = styled(MenuItem)( () => ({
        "&:hover": {
            color: Theme.palette.secondary.light
        }
    }))

    return(
        <AppBar>
            <StyledToolbar>
                <StyledMenuItem>Sobre</StyledMenuItem>
                <StyledMenuItem>Skills</StyledMenuItem>
                <StyledMenuItem>Projetos</StyledMenuItem>
            </StyledToolbar>                
        </AppBar>
    )
}

export default NavBar