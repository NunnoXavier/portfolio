import { AppBar, styled, Toolbar, MenuItem } from "@mui/material"
import Theme from "../../Theme"
import { ReactEventHandler } from "react"

interface NavBarProps {
    clickHome?: ReactEventHandler,
    clickSobre?: ReactEventHandler,
    clickProjetos?: ReactEventHandler        
}


const NavBar:React.FC<NavBarProps> = ({ clickHome, clickSobre, clickProjetos }) => {
    const StyledToolbar = styled(Toolbar)( () => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    const StyledMenuItem = styled(MenuItem)( () => ({
        color: Theme.palette.primary.contrastText,
        "&:hover": {
            color: Theme.palette.secondary.light
        }
    }))

    return(
        <AppBar position="fixed">
            <StyledToolbar>
                <StyledMenuItem onClick={ clickHome }>
                    Home
                </StyledMenuItem>
                <StyledMenuItem onClick={ clickSobre }>
                    Sobre
                </StyledMenuItem>
                <StyledMenuItem onClick={ clickProjetos }>
                    Projetos
                </StyledMenuItem>
            </StyledToolbar>                
        </AppBar>
    )
}

export default NavBar