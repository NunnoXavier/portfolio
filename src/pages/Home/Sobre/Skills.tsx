import { styled, Grid2 as Grid, Card, Stack, CardContent, Typography } from "@mui/material"
import ReactIcon from "../../../assets/icons/react.svg"
import NextJs from "../../../assets/icons/next-js.svg"
import HtmlIcon from "../../../assets/icons/html5.svg"
import JavaScriptIcon from "../../../assets/icons/javascript.svg"
import CssIcon from "../../../assets/icons/css3.svg"
import PythonIcon from "../../../assets/icons/python.svg"
import DelphiIcon from "../../../assets/icons/delphi.svg"
import MysqlIcon from "../../../assets/icons/mysql.svg"
import PostgreIcon from "../../../assets/icons/postgresql.svg"


const Skills = () => {
    
    const StyledContainer = styled('div')( () => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    }) )
    
    const StyledGroup = styled(Grid)( () => ({
        padding: "0px 10px",
        width: "80%",
    }) )
    
    const StyledSkill = styled(Card)( () => ({
        "&:hover": {
          boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2);'
        }
      }))    

      const StyledContent = styled(CardContent)( () => ({
        display: "flex",
        justifyContent: "center"
      }))    

    return(
        <StyledContainer>        
            <Typography variant="h4">Skills</Typography>            
            <StyledGroup container spacing={2}>            
                
                <Grid size={{ xs: 6, md:2 }} >
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Grid>
                                    <img src={ReactIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>React Js</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={NextJs} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>Next Js</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >    
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={HtmlIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>HTML</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Grid>
                                    <img src={CssIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>CSS</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={JavaScriptIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>Javascript</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >    
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={PythonIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>Python</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>

                <Grid size={{ xs: 6, md:2 }} >    
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={MysqlIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>MySQL</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>

                <Grid size={{ xs: 6, md:2 }} >    
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={DelphiIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>Delphi</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
                
                <Grid size={{ xs: 6, md:2 }} >    
                    <StyledSkill>
                        <StyledContent>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Grid>
                                    <img src={PostgreIcon} height={50} alt="icon" />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap>PostgreSQL</Typography>                
                                </Grid>
                            </Stack>
                        </StyledContent>
                    </StyledSkill>
                </Grid>
            </StyledGroup>
        </StyledContainer>
    )
}

export default Skills