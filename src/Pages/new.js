import NewNav from "../Components/NewNav";
import test3 from "../Images/Projects/test3.png";
import wave from "../Images/Projects/wave.png";
import React from "react";
import { useWidth } from "../Context/WidthContext";
import { motion } from "framer-motion";
import { Grid, Typography, IconButton, Tooltip, /*Collapse, Button, Dialog, Card, CardContent*/ } from "@mui/material";
// import profilePic from "../Images/profile.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// import { CgArrowLongDown } from 'react-icons/cg';
// import CloseIcon from '@mui/icons-material/Close';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import GitHub from "@mui/icons-material/GitHub";

import { FaScroll } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'
import transcript from '../Images/transcript.pdf';
import resume from '../Images/resume.pdf';

const New = () => {
    const { width } = useWidth();

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            {/* Home Page Section */}
            <div id="Home" style={{height: "100vh", position: "relative", display: "flex", alignItems: "center"}}>
                <Grid container sx={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    {width > 1200 ? 
                        <>
                            <Grid item xs={6}>
                                <div style={{marginLeft: width > 1700 ? "220px" : width > 1500 ? "180px" : width > 1300 ? "160px" : "140px"}}>
                                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                                        <Typography variant={width > 1700 ? "h3" : width > 1300 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Hi, I'm Branden Phan</Typography>
                                        <img src={wave} alt="" height={width > 1700 ? "50px" : width > 1300 ? "40px" : "30px"} width="auto" style={{marginLeft: width > 1300 ? "20px" : "15px"}} />
                                    </div>

                                    <Typography variant={width > 1700 ? "h5" : width > 1300 ? "h6" : "subtitle1"} align="left" sx={{fontFamily: "Nunito", fontWeight: "bold", color: "#3672FF", marginTop: width > 450 ? "2%" : "4%"}}>Software Developer</Typography>
                                    <Typography variant={width > 1700 ? "h6" : width > 1300 ? "subtitle1" : "subtitle2"} align="left" sx={{fontFamily: "Nunito", marginTop: width > 450 ? "3%" : "4%"}}>A 4th year computer science student at the University of Guelph</Typography>

                                    <Grid container spacing={3} sx={{marginTop: "4px"}}>
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
                                        <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                                <IconButton target="_blank" href={resume} sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                                    <HistoryEduIcon style={{fontSize: width > 1000 ? ("45px") : ("43px")}} />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <div style={{border: "1px solid black", width: "100px", marginTop: "40px"}} />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={test3} alt="" height={width > 1700 ? "700px" : width > 1500 ? "650px" : width > 1300 ? "550px" : "500px"} width="auto" />
                            </Grid>
                        </>
                    :
                        <Grid item xs={12} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "30px", paddingRight: "30px"}}>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant={width > 1700 ? "h3" : width > 1300 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Hi, I'm Branden Phan</Typography>
                                <img src={wave} alt="" height="30px" width="auto" style={{marginLeft: "15px"}} />
                            </div>

                            <Typography variant={width > 1700 ? "h5" : width > 1300 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Nunito", fontWeight: "bold", color: "#3672FF", marginTop: width > 450 ? "1%" : "4%"}}>Software Developer</Typography>
                            <Typography variant={width > 1700 ? "h6" : width > 1300 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", marginTop: width > 450 ? "1%" : "4%"}}>A 4th year computer science student at the University of Guelph</Typography>

                            <Grid container spacing={3} sx={{marginTop: "2px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                            <GitHubIcon style={{fontSize: width > 1200 ? "35px" : "33px"}} />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                            <LinkedInIcon style={{fontSize: width > 1200 ? "42px" : "40px"}} />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                            <EmailIcon style={{fontSize: width > 1200 ? "45px" : "43px"}} />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton target="_blank" href={resume} sx={{padding: "0", color: "#3672FF", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                            <HistoryEduIcon style={{fontSize: width > 1200 ? "45px" : "43px"}} />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        <div style={{border: "1px solid black", width: "100px", marginTop: "35px"}} />
                        </Grid>
                    }
                </Grid>
            </div>



            {/* Education Section */}
            <div id="Education" style={{marginTop: "-20px"}} />
            <div>
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>Education</Typography>
                    </Grid>

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 650 ? 6 : 12}>
                                <Typography variant={width > 600 ? "h5" : "h6"} sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>University of Guelph</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Sep 2019 - Present</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Bachelor of Computing</Typography>
                                <ul style={{marginTop: "3%"}}>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Major in Computer Science</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Minor in Business</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>4.0 GPA (88%)</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Dean's List: 2019, 2020, 2021, 2022</Typography>
                                    </li>
                                </ul>
                            </Grid>

                            {width < 650 ?
                                <Grid item xs={12}>
                                    <Tooltip title="Transcript" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton href={transcript} download sx={{padding: "0", marginTop: "2%"}}>
                                            <FaScroll style={{color: "#E60268"}} />
                                        </IconButton>
                                    </Tooltip>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Tooltip title="Degree Schedule" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                        <IconButton href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml" target="_blank" sx={{padding: "0", marginTop: "2%"}}>
                                            <AiOutlineCalendar style={{color: "#E60268"}} />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            :
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
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>



            {/* Languages Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                    <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>Languages</Typography>
                </Grid>

                <div style={{display: "flex", flexDirection: "row"}}>
                    {["TypeScript", "JavaScript", "HTML", "CSS", "C", "Java", "Python"].map((language, ID) => (
                        <div key={ID} style={{width: "150px", height: "70px", backgroundColor: "#DDEBFF", borderRadius: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h6" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                        </div>
                    ))}
                </div>
            </Grid>



            {/* Skills Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                    <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>Skills</Typography>
                </Grid>

                <Grid container style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {["React", "Gatsby", "NextJS", "GraphQL", "Node", "Express"].map((skill, ID) => (
                        <Grid item key={ID} style={{width: "150px", height: "70px", backgroundColor: "#FCEBAF", borderRadius: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h6" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                        </Grid>
                    ))}
                </Grid>

                <Grid container style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                    {["MySQL", "Mongo", "Firebase", "Git", "Heroku", "Mocha"].map((skill, ID) => (
                        <Grid item key={ID} style={{width: "150px", height: "70px", backgroundColor: "#FCEBAF", borderRadius: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h6" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>



            {/* Design Tools Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                    <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>Design Tools</Typography>
                </Grid>

                <Grid container style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {["Figma", "Gimp"].map((tool, ID) => (
                        <Grid item key={ID} style={{width: "150px", height: "70px", backgroundColor: "#FFB9AA", borderRadius: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h6" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{tool}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>



            {/* Work Section */}
            











            <div style={{height: "50vh"}} />


            {/* Footer Section */}
            <div>
                <br />
                <br />
                <Typography variant="subtitle2" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}} align="center">Designed by Branden Phan</Typography>
                <Typography variant="subtitle2" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#6794FF"}} align="center">Copyright © 2022 - All Rights Reserved.</Typography>
                <br />
                <br />
                <br />
            </div>

            <NewNav />
        </div>
    )
}

export default New;