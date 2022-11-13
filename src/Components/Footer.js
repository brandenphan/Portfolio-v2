import { Grid, Typography, IconButton, Tooltip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useWidth } from "../Context/WidthContext";
import resume from '../Images/resume.pdf';


const Footer = () => {
    const { width } = useWidth();

    return (
        <div style={{backgroundColor: "#F2F2F2"}}>
            <br />
            <br />
            <Grid container spacing={2} sx={{marginTop: "4px", display: "flex", justifyContent: "center"}}>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <GitHubIcon style={{fontSize: width > 1000 ? ("23px") : ("18px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <LinkedInIcon style={{fontSize: width > 1000 ? ("30px") : ("25px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <EmailIcon style={{fontSize: width > 1000 ? ("33px") : ("28px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <IconButton target="_blank" href={resume} sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                            <HistoryEduIcon style={{fontSize: width > 1000 ? ("33px") : ("28px")}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Typography variant="subtitle2" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268", marginTop: "8px"}} align="center">Designed by Branden Phan</Typography>
            <Typography variant="subtitle2" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#6794FF", marginTop: "4px"}} align="center">Copyright © 2022 - All Rights Reserved.</Typography>
            <br />
            <br />
            <br />
        </div>
    )
};

export default Footer;