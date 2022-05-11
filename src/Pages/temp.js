import { useWidth } from "../Context/WidthContext";
import NavBar from "../Components/NavBar";
import { Grid, Typography, IconButton, Tooltip } from "@mui/material";
import profilePic from "../Images/profile.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { CgArrowLongDown } from 'react-icons/cg';



// import guelph from "../Images/guelph.png";
import { FaScroll } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'
import transcript from '../Images/transcript.pdf';
import javascriptLogo from '../Images/javascript.svg';
import cssLogo from '../Images/css.svg';
import htmlLogo from '../Images/html.svg';
import cLogo from '../Images/cLanguage.svg';
import javaLogo from '../Images/java.svg';
import pythonLogo from '../Images/python.svg';

const Temp = () => {
    const { width } = useWidth();

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>

            <div style={{height: "100vh", position: "relative", display: "flex", alignItems: "center", boxShadow: "0 13px 13px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(54, 114, 255, 0.2), 0 20px 20px 0 rgba(54, 114, 255, 0.2)"}}>
                <Grid container sx={{display: "flex", alignItems: "center", paddingLeft: width > 1500 ? "10%" : width > 1400 ? "6%" : width > 1000 ? "2%" : "10%", paddingRight: width > 1500 ? "10%" : width > 1400 ? "6%" : width > 1000 ? "2%" : "10%", marginLeft: width > 1400 ? "4%" : width > 1000 ? "6%" : ""}}>
                    <Grid item xs={width > 1000 ? 6 : 12}>
                        {width > 450 ? 
                            <Typography variant={width > 1500 ? "h3" : "h4"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Hi, I'm Branden Phan</Typography>
                        :
                            <>
                                <Typography variant={width > 1500 ? "h3" : "h4"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Hi, I'm</Typography>
                                <Typography variant={width > 1500 ? "h3" : "h4"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Branden Phan</Typography>
                            </>
                        }
                        <Typography variant={width > 1500 ? "h5" : "h6"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: width > 450 ? "2%" : "4%"}}>Software Developer</Typography>
                        <Typography variant={width > 1500 ? "h5" : "h6"} align="center" sx={{fontFamily: "Source Sans Pro", marginTop: width > 450 ? "2%" : "4%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                        
                        <Grid container justifyContent="center" spacing={3} sx={{marginTop: width > 1500 ? "1%" : "0%"}}>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                    <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                        <GitHubIcon style={{fontSize: width > 1000 ? ("35px") : ("33px")}} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                    <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                        <LinkedInIcon style={{fontSize: width > 1000 ? ("42px") : ("40px")}} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                    <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                        <EmailIcon style={{fontSize: width > 1000 ? ("45px") : ("43px")}} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                    {width > 1000 &&
                        <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                            <img src={profilePic} alt="ProfilePicture" />
                        </Grid>
                    }
                </Grid>

                <Grid container sx={{position: "absolute", bottom: "50px", paddingLeft: "24px", paddingRight: "24px"}}>
                    <Grid item xs={6}>
                        <IconButton href="#Education" sx={{marginLeft: width > 1000 ? "16%" : "", transition: "0.4s", "&:hover": {transform: "translateY(6px)"}}}>
                            <CgArrowLongDown style={{color: "#E60268"}} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            

            <div id="Education">
                <Grid container sx={{paddingLeft: "24%", paddingRight: "24%"}}>
                    <Grid item xs={12} sx={{marginTop: "10vh", marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Education</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{padding: "2%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h5" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>University of Guelph</Typography>
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Sep 2019 - Present</Typography>
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Bachelor of Computing</Typography>
                                <ul style={{marginTop: "3%"}}>
                                    <li>
                                        <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Major in Computer Science</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Minor in Business</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>4.0 GPA (88%)</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Dean's List: 2019, 2020, 2021</Typography>
                                    </li>
                                </ul>
                            </Grid>

                            <Grid item xs={6} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                <Tooltip title="Transcript" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                    <IconButton href={transcript} download sx={{padding: "0"}}>
                                        <FaScroll style={{color: "#E60268"}} />
                                    </IconButton>
                                </Tooltip>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Tooltip title="Degree Schedule" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                    <IconButton href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml" target="_blank" sx={{padding: "0"}}>
                                        <AiOutlineCalendar style={{color: "#E60268"}} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>





            <div id="Skills" style={{height: "100vh"}}>
                <Grid container sx={{marginTop: "15vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Languages</Typography>
                    </Grid>

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={javascriptLogo} alt="JavaScriptLogo" height="100px" width="100px" />
                        <Typography variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>JavaScript</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={htmlLogo} alt="HTMLLogo" height="100px" width="100px" />
                        <Typography align="center" variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>HTML</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={cssLogo} alt="CSSLogo" height="100px" width="100px" />
                        <Typography align="center" variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>CSS</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={cLogo} alt="CLogo" height="100px" width="100px" />
                        <Typography align="center" variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>C</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={javaLogo} alt="JavaLogo" height="100px" width="100px" />
                        <Typography align="center" variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Java</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Grid item sx={{padding: "1%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={pythonLogo} alt="PythonLogo" height="100px" width="100px" />
                        <Typography align="center" variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Python</Typography>
                    </Grid>
                </Grid>
            </div>




            <div id="Projects" style={{height: "100vh", boxShadow: "0 5px 13px 10px rgba(0, 0, 0, 0.3), 0 3px 5px 5px rgba(54, 114, 255, 0.2), 0 10px 20px 10px rgba(54, 114, 255, 0.2)"}}>
                <Grid container sx={{marginTop: "20vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh", marginTop: "10vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Projects</Typography>
                    </Grid>
                </Grid>
            </div>

            <div style={{height: "10vh"}}>
                hi
            </div>


            <NavBar />
        </div>
    )
};

export default Temp;