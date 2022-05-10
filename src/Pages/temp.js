import { useWidth } from "../Context/WidthContext";
import NavBar from "../Components/NavBar";
import { Grid, Typography, IconButton } from "@mui/material";
import profilePic from "../Images/profile.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { CgArrowLongDown } from 'react-icons/cg'

const Temp = () => {
    const { width } = useWidth();

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{height: "100vh", position: "relative", display: "flex", alignItems: "center"}}>
                <Grid container sx={{display: "flex", alignItems: "center", paddingLeft: "10%", paddingRight: "10%"}}>
                    <Grid item xs={6}>
                        <Typography variant="h3" align="center" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>Hi, I'm Branden Phan</Typography>
                        <Typography variant="h5" align="center" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Software Developer</Typography>
                        <Typography variant="h5" align="center" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                        
                        <Grid container justifyContent="center" spacing={3} sx={{marginTop: "1%"}}>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0"}}>
                                    <GitHubIcon style={{fontSize: width > 1000 ? ("35px") : ("33px"), color: "#3672FF"}} />
                                </IconButton>
                            </Grid>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0"}}>
                                    <LinkedInIcon style={{fontSize: width > 1000 ? ("42px") : ("40px"), color: "#3672FF"}} />
                                </IconButton>
                            </Grid>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0"}}>
                                    <EmailIcon style={{fontSize: width > 1000 ? ("45px") : ("43px"), color: "#3672FF"}} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                        <img src={profilePic} alt="ProfilePicture" />
                    </Grid>
                </Grid>


                <NavBar /> {/* MOVE THIS TO END OF DIV PROBABLY SO IT ENCOMPASSES ALL ELEMENTS */}
                <IconButton sx={{position: "absolute", bottom: "50px", left: "50px", transition: "0.4s", "&:hover": {transform: "translateY(6px)"}}}>
                    <CgArrowLongDown style={{color: "#E60268"}} /> {/* possibly align this with BP logo */}
                </IconButton>
                {/* <p style={{position: "absolute", bottom: "10px", fontFamily: "Source Sans Pro"}}>hi</p> */}
            </div>
        </div>
    )
};

export default Temp;