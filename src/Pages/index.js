import Nav from "../Components/NavBar";
import Footer from "../Components/Footer";
import LandingWEBP from "../Images/Landing.webp";
import LandingPNG from "../Images/Landing.png";
import wave from "../Images/Projects/wave.png";
import React from "react";
import { Link } from "react-router-dom";
import { useWidth } from "../Context/WidthContext";
import { useTheme } from "../Context/ThemeContext";
import { Grid, Typography, IconButton, Tooltip, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { FaScroll } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'
import transcript from '../Images/transcript.pdf';
import resume from '../Images/resume.pdf';
import PortfolioImageNewPNG from '../Images/Projects/PortfolioImageNew.png';
import PortfolioImageOldPNG from '../Images/Projects/PortfolioImageOld.png';
import ScheduleMakerImagePNG from '../Images/Projects/ScheduleMakerImage.png';
import GpxImagePNG from '../Images/Projects/GpxImage.png';
import DiscordImagePNG from '../Images/Projects/DiscordImage.png';
import BrawlhallaImagePNG from '../Images/Projects/BrawlhallaImage.webp';
import courseSearchWEBP from '../Images/Projects/CourseSearch.png';
import courseSearchPNG from '../Images/Projects/CourseSearch.png';
import PortfolioImageNewWEBP from '../Images/Projects/PortfolioImageNew.webp';
import PortfolioImageOldWEBP from '../Images/Projects/PortfolioImageOld.webp';
import ScheduleMakerImageWEBP from '../Images/Projects/ScheduleMakerImage.webp';
import GpxImageWEBP from '../Images/Projects/GpxImage.webp';
import DiscordImageWEBP from '../Images/Projects/DiscordImage.webp';
import BrawlhallaImageWEBP from '../Images/Projects/BrawlhallaImage.webp';
import LotusWEBP from "../Images/Work/Lotus/Lotus.webp";
import LotusPNG from "../Images/Work/Lotus/Lotus.png";
import GuelphDenWEBP from "../Images/Work/GuelphDental/GuelphDental.webp";
import GuelphDenPNG from "../Images/Work/GuelphDental/GuelphDental.png";
import cutsbyjzWEBP from "../Images/Work/cutsbyjz/cutsbyjz.webp";
import cutsbyjzPNG from "../Images/Work/cutsbyjz/cutsbyjz.png";


const Index = () => {
    const { width } = useWidth();
    const { theme } = useTheme();

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: theme === "light" ? "rgb(237, 242, 251, 0.45)" : "#2D2D2D", transition: "0.3s"}}>
            {/* Home Page Section */}
            <div id="Home" style={{height: "100vh", position: "relative", display: "flex", alignItems: "center"}}>
                <Grid container sx={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    {width > 1200 ? 
                        <>
                            <Grid item xs={6}>
                                <div style={{marginLeft: width > 1700 ? "220px" : width > 1500 ? "180px" : width > 1300 ? "160px" : "140px"}}>
                                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                                        <Typography variant={width > 1700 ? "h3" : width > 1300 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Hi, I'm Branden Phan</Typography>
                                        <img src={wave} alt="" height={width > 1700 ? "50px" : width > 1300 ? "40px" : "30px"} width="auto" style={{marginLeft: width > 1300 ? "20px" : "15px"}} />
                                    </div>

                                    <Typography variant={width > 1700 ? "h5" : width > 1300 ? "h6" : "subtitle1"} align="left" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "#3672FF" : "#EE82B2", transition: "0.3s", marginTop: width > 450 ? "2%" : "4%"}}>Software Developer</Typography>
                                    <Typography variant={width > 1700 ? "h6" : width > 1300 ? "subtitle1" : "subtitle2"} align="left" sx={{fontFamily: "Nunito", marginTop: width > 450 ? "3%" : "4%", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>A 4th year computer science student at the University of Guelph</Typography>

                                    <Grid container spacing={3} sx={{marginTop: "4px"}}>
                                        <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                                <IconButton target="_blank" href="https://github.com/brandenphan" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#EE82B2", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                                    <GitHubIcon style={{fontSize: width > 1000 ? ("35px") : ("33px")}} />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                                <IconButton target="_blank" href="https://www.linkedin.com/in/brandenphan/" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#EE82B2", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                                    <LinkedInIcon style={{fontSize: width > 1000 ? ("42px") : ("40px")}} />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                                <IconButton target="_blank" href="mailto: branden.phan@gmail.com" sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#EE82B2", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                                    <EmailIcon style={{fontSize: width > 1000 ? ("45px") : ("43px")}} />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                                <IconButton target="_blank" href={resume} sx={{padding: "0", color: theme === "light" ? "#3672FF" : "#EE82B2", transition: "0.6s", "&:hover": {color: "#E60268", transform: "translateY(-4px)"}}}>
                                                    <HistoryEduIcon style={{fontSize: width > 1000 ? ("45px") : ("43px")}} />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <div style={{border: theme === "light" ? "1px solid black" : "1px solid white", width: "100px", marginTop: "40px", transition: "0.3s"}} />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <picture>
                                    <source srcSet={LandingWEBP} type="image/webp" />
                                    <source srcSet={LandingPNG} type="image/png" />
                                    <img src={LandingPNG} alt="LandingImage" height={width > 1700 ? "700px" : width > 1500 ? "650px" : width > 1300 ? "550px" : "500px"} width="auto" />
                                </picture>
                            </Grid>
                        </>
                    :
                        <Grid item xs={12} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "30px", paddingRight: "30px"}}>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant={width > 1700 ? "h3" : width > 1300 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Hi, I'm Branden Phan</Typography>
                                <img src={wave} alt="" height="30px" width="auto" style={{marginLeft: "15px"}} />
                            </div>

                            <Typography variant={width > 1700 ? "h5" : width > 1300 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Nunito", fontWeight: "bold", color: "#3672FF", marginTop: width > 450 ? "1%" : "4%"}}>Software Developer</Typography>
                            <Typography variant={width > 1700 ? "h6" : width > 1300 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", marginTop: width > 450 ? "1%" : "4%", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>A 4th year computer science student at the University of Guelph</Typography>

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
                        <div style={{border: theme === "light" ? "1px solid black" : "1px solid white", transition: "0.3s", width: "100px", marginTop: "35px"}} />
                        </Grid>
                    }
                </Grid>
            </div>



            {/* Education Section */}
            <div id="Education" style={{marginTop: "-20px"}} />
            <div>
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Education</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: theme === "light" ? "#efe5dc" : "#F3C398", transition: "0.3s"}}>
                        <Grid container>
                            <Grid item xs={width > 650 ? 6 : 12}>
                                <Typography variant={width > 600 ? "h5" : "h6"} sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : ""}}>University of Guelph</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : "", color: "#3672FF", marginTop: "2%"}}>Sept 2019 - April 2024</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : "", color: "#3672FF", marginTop: "2%"}}>Bachelor of Computing</Typography>
                                <ul style={{marginTop: width > 600 ? "3%" : "4%"}}>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito"}}>Major in Computer Science</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito"}}>Minor in Business</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito"}}>4.0 GPA (88%)</Typography>
                                    </li>
                                    <li>
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Nunito"}}>Dean's List: 2019 - 2022</Typography>
                                    </li>
                                </ul>
                            </Grid>

                            {width <= 650 ?
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
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Languages</Typography>
                </Grid>


                {width > 1100 ? 
                    <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        {["TypeScript", "JavaScript", "HTML", "CSS", "C", "Java", "Python"].map((language, ID) => (
                            <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 6 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                : width > 700 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["TypeScript", "JavaScript", "HTML", "CSS"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle1" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["C", "Java", "Python"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 2 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle1" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                :
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["TypeScript", "JavaScript"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["HTML", "CSS"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["C", "Java"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item sx={{width: width > 1400 ? "150px" : "120px", height: "70px", marginTop: "20px", backgroundColor: theme === "light" ? "#ccdbfd" : "#8CAEFB", transition: "0.3s", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>Python</Typography>
                        </Grid>
                    </>
                }
            </Grid>



            {/* Technologies Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Technologies</Typography>
                </Grid>

                {width > 1000 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby", "NextJS", "GraphQL", "Node", "Express"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 5 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["MySQL", "Mongo", "Firebase", "Git", "Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 5 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                : width > 700 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby", "NextJS", "GraphQL"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Node", "Express", "MySQL", "Mongo"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Firebase", "Git", "Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                :
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["NextJS", "GraphQL"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Node", "Express"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["MySQL", "Mongo"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Firebase", "Git"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#ffc4d6" : "#FF94B4", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>   
                }
            </Grid>



            {/* Design Tools Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Design Tools</Typography>
                </Grid>

                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {["Figma", "Gimp"].map((tool, ID) => (
                        <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: theme === "light" ? "#e7c6ff" : "#D08FFF", transition: "0.3s", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: width > 700 ? "bold" : ""}}>{tool}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>



            {/* Work Section */}
            <div id="Work" style={{marginTop: "-20px"}} />
            <div style={{backgroundColor: theme === "light" ? "#F2F2F2" : "#4E4E4E", transition: "0.3s"}}>
                <Grid container sx={{marginTop: "15vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh", marginTop: "10vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Work</Typography>
                    </Grid>

                    <Grid container columnSpacing={width > 1400 ? 8 : width > 1000 ? 6 : 0} sx={{marginTop: "1%", paddingLeft: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%", paddingRight: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%"}}>
                        {workArray.map((instance, ID) => (
                            <CardComponent key={ID} width={width} link={instance.link} projectName={instance.name} description={instance.description} github={instance.github} live={instance.live} techs={instance.technologies} imageNamePNG={instance.imageNamePNG} imageNameWEBP={instance.imageNameWEBP} />
                        ))}
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>



            {/* Project Section */}
            <div id="Projects" style={{marginTop: "-20px"}} />
            <div style={{backgroundColor: theme === "light" ? "#F2F2F2" : "#4E4E4E", transition: "0.3s"}}>
                <Grid container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh", marginTop: "10vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Projects</Typography>
                    </Grid>

                    <Grid container columnSpacing={width > 1400 ? 8 : width > 1000 ? 6 : 0} sx={{marginTop: "1%", paddingLeft: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%", paddingRight: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%"}}>
                        {projectArray.map((instance, ID) => (
                            <CardComponent key={ID} width={width} link={instance.link} projectName={instance.name} imageNamePNG={instance.imageNamePNG} imageNameWEBP={instance.imageNameWEBP} />
                        ))}
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>



            {/* Footer and NavbBar */}
            <Footer />
            <Nav />
        </div>
    )
}

export default Index;


const CardComponent = ({projectName, imageNamePNG, imageNameWEBP, width, link}) => (
    <Grid item xs={width > 1000 ? 6 : 12}>
        <Button component={Link} to={link} sx={{marginBottom: width > 900 ? "20px" : width > 600 ? "15px" : "", padding: "0", borderRadius: "20px", transition: "0.4s", "&:hover": {transform: "translateY(-4px)"}}}>
            <picture style={{height: "100%"}}>
                <source srcSet={imageNameWEBP} type="image/webp" />
                <source srcSet={imageNamePNG} type="image/png" />
                <img src={imageNamePNG} alt={projectName} height="100%" width="100%" style={{display: "block", borderRadius: "20px"}} />
            </picture>
        </Button>
        <br />
        <br />
        <br />
    </Grid>
)

// Work array holding work information
const workArray = [
    {
        imageNamePNG: cutsbyjzPNG,
        imageNameWEBP: cutsbyjzWEBP,
        name: "cutsbyjz",
        description: "Full-stack web-application, showcasing various information regarding Guelph Dental while also allowing future proofing capability features.",
        github: "",
        live: "https://guelphdental.com/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Express",
            "Heroku",
            "MongoDB",
            "Git"
        ],
        link: "/Cutsbyjz"
    },
    {
        imageNamePNG: GuelphDenPNG,
        imageNameWEBP: GuelphDenWEBP,
        name: "Guelph Dental",
        description: "Full-stack web-application, showcasing various information regarding Guelph Dental while also allowing future proofing capability features.",
        github: "",
        live: "https://guelphdental.com/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Express",
            "Heroku",
            "MongoDB",
            "Git"
        ],
        link: "/GuelphDental"
    },
    {
        imageNamePNG: LotusPNG,
        imageNameWEBP: LotusWEBP,
        name: "Lotus",
        description: "Front-end web-application, displaying a modern and responsive user interface to showcase various information pertaining to the Lotus restaurant.",
        github: "",
        live: "https://lotusrestaurant.ca/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Git"
        ],
        link: "/Lotus"
    },
]


// Project array holding projects information
const projectArray = [
    {
        imageNamePNG: PortfolioImageNewPNG,
        imageNameWEBP: PortfolioImageNewWEBP,
        name: "Personal Portfolio - New",
        description: "Updated personal portfolio web-application, using many of the designs from the previous personal portfolio while introducing newly learned design languages and technologies to display resume related information.",
        github: "https://github.com/brandenphan/New-Portfolio",
        live: "https://brandenphan.com/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Git"
        ],
        link: "/PersonalPortfolioNew"
    },
    {
        imageNamePNG: courseSearchPNG,
        imageNameWEBP: courseSearchWEBP,
        name: "Course Search", 
        description: "Full-stack web-application created in a team of 6 people, developed over a span of 4 weeks. Web-application allows users to search courses and graph major/minor/subject trees offered at the University of Guelph and University of British Columbia.",
        github: "https://github.com/brandenphan/Course-Search",
        live: "",
        technologies: [
            "JavaScript",
            "React",
            "NextJS",
            "Node",
            "Express",
            "Git",
            "Mocha"
        ],
        link: "/CourseSearch"
    },
    {
        imageNamePNG: DiscordImagePNG,
        imageNameWEBP: DiscordImageWEBP,
        name: "Discord Bot",
        description: "Discord bot written in Python that utilizes various libraries and API's giving the bot commands that can be called by users in servers with the bot.",
        github: "https://github.com/brandenphan/Pami-Bot",
        live: "",
        technologies: [
            "Python",
            "Heroku",
            "Git"
        ],
        link: "/DiscordBot"
    },
    {
        imageNamePNG: PortfolioImageOldPNG,
        imageNameWEBP: PortfolioImageOldWEBP,
        name: "Personal Portfolio - Old",
        description: "Personal portfolio web-application, displaying various resume related information through Gatsby JS's high-speed static site generator.",
        github: "https://github.com/brandenphan/Portfolio",
        live: "",
        technologies: [
            "JavaScript",
            "React",
            "Gatsby",
            "Node",
            "Git"
        ],
        link: "/PersonalPortfolioOld"
    },
    {
        imageNamePNG: ScheduleMakerImagePNG,
        imageNameWEBP: ScheduleMakerImageWEBP,
        name: "Schedule Maker",
        description: "Full-stack web-application written in JavaScript using the React framework, providing users the ability to create multiple time-tables unique to their specific accounts.",
        github: "https://github.com/brandenphan/Schedule-Maker",
        live: "",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Git"
        ],
        link: "/ScheduleMaker"
    },
    {
        imageNamePNG: BrawlhallaImagePNG,
        imageNameWEBP: BrawlhallaImageWEBP,
        name: "Brawlhalla Search",
        description: "Web-application utilizing React and the Brawlhalla API to provide users with various information regarding the Brawlhalla Game.",
        github: "https://github.com/brandenphan/Brawlhalla-Website",
        live: "",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Git"
        ],
        link: "/Brawlhalla"
    },
    {
        imageNamePNG: GpxImagePNG,
        imageNameWEBP: GpxImageWEBP,
        name: "GPX Data Viewer",
        description: "Full-stack web-application written in C and JavaScript allowing users to upload/download GPx files and perform various tasks related to those files.",
        github: "https://github.com/brandenphan/GPX-Data-Viewer",
        live: "",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "C",
            "Node",
            "Express",
            "MySQL",
            "Git",
        ],
        link: "/GPX"
    }
]