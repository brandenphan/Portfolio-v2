import { Grid, Typography, IconButton, Tooltip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useWidth } from "../Context/WidthContext";
import { useTheme } from "../Context/ThemeContext";
import resume from '../Images/resume.pdf';


const Footer = () => {
    const { width } = useWidth();
    const { theme } = useTheme();

    return (
        <div style={{backgroundColor: theme === "light" ? "#F2F2F2" : "#4E4E4E", transition: "0.3s"}}>
            <br />
            <br />
            <Grid container spacing={2} sx={{marginTop: "4px", display: "flex", justifyContent: "center"}}>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#6F9AFF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <GitHubIcon style={{fontSize: width > 1000 ? ("22px") : ("17px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#6F9AFF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <LinkedInIcon style={{fontSize: width > 1000 ? ("28px") : ("23px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#6F9AFF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <EmailIcon style={{fontSize: width > 1000 ? ("31px") : ("26px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href={resume} sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#6F9AFF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <HistoryEduIcon style={{fontSize: width > 1000 ? ("31px") : ("26px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Typography variant="subtitle2" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "#E60268" : "#EE82B2", marginTop: "8px", transition: "0.3s"}} align="center">Designed by Branden Phan</Typography>
            <Typography variant="subtitle2" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "#3672FF" : "#6F9AFF", transition: "0.3s", marginTop: "4px"}} align="center">Copyright © 2022 - All Rights Reserved.</Typography>
            <br />
            <br />
            <br />
        </div>
    )
};

export default Footer;