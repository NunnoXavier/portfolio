import { Grid2 as Grid, styled, Typography } from "@mui/material"
import MyInput from "../../components/MyInput/MyInput"
import Theme from "../../Theme"
import MyText from "../../components/MyText/MyText"
import StyledButton from "../../components/StyledButton/StyledButton"
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, useState } from 'react'


const MyDivContatos = styled("div")( () => ({
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0em 1em 1em 1em",
    }) )

const MyContainer = styled('div')(() => ({
height: "100vh",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
width: "100%",
maxWidth: "2000px"
}))

const Contato = () =>{
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ response, setResponse ] = useState('')


    return (
        <MyDivContatos>
            <MyContainer>
                <Typography variant="h1">
                    Contato
                </Typography>
                <form action="https://formsubmit.co/4880cb9833ad29816761d55543ac5ce5" method="POST"
                // o codigo 4880cb9833ad29816761d55543ac5ce5 subistitui o email contato.isaiassx@gmail.com
                    style={{ width: "100%", maxWidth:"700px" }} >
                    <Grid container direction="column" spacing={2} >
                        <Grid size={ {xs:12, md:6} }>
                            <MyInput 
                                onChange={ (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value) } 
                                value={ name }
                                type="text" name="name"
                                label="Seu Nome"
                                
                                style={{ color: Theme.palette.primary.contrastText }}
                                />
                        </Grid>
                        <Grid>
                            <MyInput 
                                onChange={ (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) } 
                                value={ email }
                                type="email" name="email"
                                label="Seu Email" fullWidth placeholder="ex: maria@gmail.com"
                                style={{ color: Theme.palette.primary.contrastText }}
                                />
                        </Grid>
                        <Grid>
                            <MyText onChange={ (e:ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value) }
                                value={ message }
                                name="message"
                                label="Mensagem" fullWidth placeholder="digite aqui a sua mensagem"
                                style={{ color: Theme.palette.primary.contrastText, height:"5em" }}
                                />
                        </Grid>
                        <Grid size={ {xs:12, md:3} }>
                            <StyledButton type="submit">
                                <SendIcon/>
                                <Typography>
                                    Enviar
                                </Typography>
                            </StyledButton>

                        </Grid>
                        <Grid>
                        <div>
                            <Typography>{ response }</Typography>
                        </div>
                        </Grid>
                    </Grid>

                </form>
            </MyContainer>
        </MyDivContatos>
    )
}

export default Contato