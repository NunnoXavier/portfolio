import { Avatar, CardContent, Grid2 as Grid, Stack, styled, Typography } from "@mui/material";
import MyCard from "../../../components/MyCard/MyCard";

  const StyledContent = styled(CardContent)( () => ({
    display: "flex",
    justifyContent: "center",
  }))    

interface CardSkillProps{
    icon?: string,
    name?: string,
}

const CardSkill:React.FC<CardSkillProps> = ({ icon, name }) => {

    return(
        <Grid size={{ xs: 6, md:2 }} >
            <MyCard>
                <StyledContent>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <Grid>
                            <Avatar src={icon} sx={{ width: 20, height:20 }}  alt="icon" />
                        </Grid>
                        <Grid>
                            <Typography variant="body2" noWrap>{ name }</Typography>                
                        </Grid>
                    </Stack>
                </StyledContent>
            </MyCard>
        </Grid>

    )

}

export default CardSkill