import Nav from "../Components/NavBar";
import Footer from "../Components/Footer";
import LandingWEBP from "../Images/Landing.webp";
import LandingPNG from "../Images/Landing.png";
import wave from "../Images/Projects/wave.png";
import React from "react";
import { Link } from "react-router-dom";
import { useWidth } from "../Context/WidthContext";
import { Grid, Typography, IconButton, Tooltip, Button, Dialog, Card, CardContent } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHub from "@mui/icons-material/GitHub";
import { FaScroll } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'
import transcript from '../Images/transcript.pdf';
import resume from '../Images/resume.pdf';
import javascriptLogo from '../Images/LanguageIcons/javascript.svg';
import cssLogo from '../Images/LanguageIcons/css.svg';
import htmlLogo from '../Images/LanguageIcons/html.svg';
import cLogo from '../Images/LanguageIcons/cLanguage.svg';
import pythonLogo from '../Images/LanguageIcons/python.svg';
import reactLogo from '../Images/TechnologyIcons/react.svg';
import gatsbyLogo from '../Images/TechnologyIcons/gatsby.svg';
import nextLogo from '../Images/TechnologyIcons/nextjs.svg';
import nodeLogo from '../Images/TechnologyIcons/node.svg';
import expressLogo from '../Images/TechnologyIcons/express.svg';
import mongoLogo from '../Images/TechnologyIcons/mongo.svg';
import mochaLogo from '../Images/TechnologyIcons/mocha.svg';
import gitLogo from '../Images/TechnologyIcons/git.svg';
import herokuLogo from '../Images/TechnologyIcons/heroku.svg';
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
import LotusWEBP from "../Images/Work/Lotus.webp";
import LotusPNG from "../Images/Work/Lotus.png";
import GuelphDenWEBP from "../Images/Work/GuelphDental.webp";
import GuelphDenPNG from "../Images/Work/GuelphDental.png";
import cutsbyjzWEBP from "../Images/Work/cutsbyjz.webp";
import cutsbyjzPNG from "../Images/Work/cutsbyjz.png";


const Index = () => {
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
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Education</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: "#efe5dc"}}>
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
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Languages</Typography>
                </Grid>


                {width > 1100 ? 
                    <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        {["TypeScript", "JavaScript", "HTML", "CSS", "C", "Java", "Python"].map((language, ID) => (
                            <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 6 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                : width > 700 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["TypeScript", "JavaScript", "HTML", "CSS"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle1" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["C", "Java", "Python"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 2 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle1" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                :
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["TypeScript", "JavaScript"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["HTML", "CSS"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["C", "Java"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item sx={{width: width > 1400 ? "150px" : "120px", height: "70px", marginTop: "20px", backgroundColor: "#ccdbfd", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Python</Typography>
                        </Grid>
                    </>
                }
            </Grid>



            {/* Skills Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Skills</Typography>
                </Grid>

                {width > 1000 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby", "NextJS", "GraphQL", "Node", "Express"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 5 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["MySQL", "Mongo", "Firebase", "Git", "Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 5 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                : width > 700 ?
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby", "NextJS", "GraphQL"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Node", "Express", "MySQL", "Mongo"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Firebase", "Git", "Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                :
                    <>
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            {["React", "Gatsby"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["NextJS", "GraphQL"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Node", "Express"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["MySQL", "Mongo"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Firebase", "Git"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                            {["Heroku", "Mocha"].map((skill, ID) => (
                                <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#ffc4d6", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{skill}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </>   
                }
            </Grid>



            {/* Design Tools Section */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: width > 600 ? "5vh" : "3vh"}}>
                    <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Design Tools</Typography>
                </Grid>

                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {["Figma", "Gimp"].map((tool, ID) => (
                        <Grid item key={ID} sx={{width: width > 1400 ? "150px" : "120px", height: "70px", backgroundColor: "#e7c6ff", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 1400 ? "h6" : "subtitle1"} align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{tool}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>



            {/* Work Section */}
            <div id="Work" style={{marginTop: "-20px"}} />
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Grid container sx={{marginTop: "15vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh", marginTop: "10vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Work</Typography>
                    </Grid>

                    <Grid container columnSpacing={width > 1400 ? 8 : width > 1000 ? 6 : 0} sx={{marginTop: "1%", paddingLeft: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%", paddingRight: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%"}}>
                        {workArray.map((instance, ID) => (
                            <CardComponentWork key={ID} width={width} link={instance.link} projectName={instance.name} description={instance.description} github={instance.github} live={instance.live} techs={instance.technologies} imageNamePNG={instance.imageNamePNG} imageNameWEBP={instance.imageNameWEBP} />
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
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Grid container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: width > 600 ? "5vh" : "3vh", marginTop: "10vh"}}>
                        <Typography variant={width > 600 ? "h4" : "h5"} align="center" sx={{fontFamily: "Nunito"}}>Projects</Typography>
                    </Grid>

                    <Grid container columnSpacing={width > 1400 ? 8 : width > 1000 ? 6 : 0} sx={{marginTop: "1%", paddingLeft: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%", paddingRight: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%"}}>
                        {projectArray.map((instance, ID) => (
                            <CardComponent key={ID} width={width} projectName={instance.name} description={instance.description} github={instance.github} live={instance.live} techs={instance.technologies} imageNamePNG={instance.imageNamePNG} imageNameWEBP={instance.imageNameWEBP} />
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


const CardComponentWork = ({projectName, description, github, live, techs, imageNamePNG, imageNameWEBP, width, link}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
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
        
            <Dialog open={open} onClose={() => {setOpen(false);}} disableScrollLock={true}>
                <Card>
                    <CardContent>
                        <Grid container sx={{borderBottom: "1px solid #D7DEE6"}}>
                            <Grid item xs={10} sx={{display: "flex", alignItems: "center"}}>
                                <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", color: "black"}}>
                                    {projectName}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography> 
                            </Grid>
                            <Grid item xs={2} sx={{display: "flex", justifyContent: "flex-end"}}>
                                <IconButton onClick={() => {setOpen(false);}}>
                                    <CloseIcon sx={{color: "black"}} />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>Description</Typography>
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro"}}>{description}</Typography>

                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", marginBottom: "2%"}}>Technologies</Typography>
                        {techs.map((instance, ID) => (
                            <React.Fragment key={ID}>
                                {instance === "JavaScript" &&
                                    <>
                                        <Tooltip title="JavaScript" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={javascriptLogo} alt="JavaScriptLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "HTML" &&
                                    <>
                                        <Tooltip title="HTML" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={htmlLogo} alt="HTMLLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "CSS" &&
                                    <>
                                        <Tooltip title="CSS" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={cssLogo} alt="CSSLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "C" &&
                                    <>
                                        <Tooltip title="C" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={cLogo} alt="CLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Heroku" &&
                                    <>
                                        <Tooltip title="Heroku" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={herokuLogo} alt="HerokuLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Python" &&
                                    <>
                                        <Tooltip title="Python" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={pythonLogo} alt="PythonLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "React" &&
                                    <>
                                        <Tooltip title="React" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={reactLogo} alt="ReactLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "NextJS" &&
                                    <>
                                        <Tooltip title="NextJS" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={nextLogo} alt="NextJSLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Gatsby" &&
                                    <>
                                        <Tooltip title="Gatsby" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={gatsbyLogo} alt="GatsbyLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Node" &&
                                    <>
                                        <Tooltip title="Node" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={nodeLogo} alt="NodeLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Express" &&
                                    <>
                                        <Tooltip title="Express" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={expressLogo} alt="ExpressLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Git" &&
                                    <>
                                        <Tooltip title="Git" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={gitLogo} alt="GitLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Mocha" &&
                                    <>
                                        <Tooltip title="Mocha" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={mochaLogo} alt="MochaLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "MongoDB" &&
                                    <>
                                        <Tooltip title="MongoDB" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={mongoLogo} alt="MongoDBLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                            </React.Fragment>
                        ))}

                        <br />
                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>External Links</Typography>
                        {github !== "" &&
                            <>
                                <Button href={`${github}`} target="_blank" variant="outlined" sx={{textTransform: "none", marginTop: "2%"}}>
                                    <GitHub />
                                    &nbsp;&nbsp;
                                    <Typography sx={{fontFamily: "Source Sans Pro", fontSize: width > 600 ? "18px" : "16px"}}>Github</Typography>
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                        }
                        {live !== "" &&
                            <>
                                <Button href={`${live}`} target="_blank" variant="outlined" sx={{textTransform: "none", marginTop: "2%", color: "white", backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                    <ExitToAppIcon />
                                    &nbsp;&nbsp;
                                    <Typography sx={{fontFamily: "Source Sans Pro", fontSize: width > 600 ? "18px" : "16px"}}>Live</Typography>
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                        }
                    </CardContent>
                </Card>
            </Dialog>
        </>
    )
}


// Card Component for projects and work
const CardComponent = ({projectName, description, github, live, techs, imageNamePNG, imageNameWEBP, width}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Grid item xs={width > 1000 ? 6 : 12}>
                <Button onClick={() => {setOpen(true);}} sx={{marginBottom: width > 900 ? "20px" : width > 600 ? "15px" : "", padding: "0", borderRadius: "20px", transition: "0.4s", "&:hover": {transform: "translateY(-4px)"}}}>
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
        
            <Dialog open={open} onClose={() => {setOpen(false);}} disableScrollLock={true}>
                <Card>
                    <CardContent>
                        <Grid container sx={{borderBottom: "1px solid #D7DEE6"}}>
                            <Grid item xs={10} sx={{display: "flex", alignItems: "center"}}>
                                <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", color: "black"}}>
                                    {projectName}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography> 
                            </Grid>
                            <Grid item xs={2} sx={{display: "flex", justifyContent: "flex-end"}}>
                                <IconButton onClick={() => {setOpen(false);}}>
                                    <CloseIcon sx={{color: "black"}} />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>Description</Typography>
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro"}}>{description}</Typography>

                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", marginBottom: "2%"}}>Technologies</Typography>
                        {techs.map((instance, ID) => (
                            <React.Fragment key={ID}>
                                {instance === "JavaScript" &&
                                    <>
                                        <Tooltip title="JavaScript" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={javascriptLogo} alt="JavaScriptLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "HTML" &&
                                    <>
                                        <Tooltip title="HTML" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={htmlLogo} alt="HTMLLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "CSS" &&
                                    <>
                                        <Tooltip title="CSS" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={cssLogo} alt="CSSLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "C" &&
                                    <>
                                        <Tooltip title="C" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={cLogo} alt="CLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Heroku" &&
                                    <>
                                        <Tooltip title="Heroku" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={herokuLogo} alt="HerokuLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Python" &&
                                    <>
                                        <Tooltip title="Python" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={pythonLogo} alt="PythonLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "React" &&
                                    <>
                                        <Tooltip title="React" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={reactLogo} alt="ReactLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "NextJS" &&
                                    <>
                                        <Tooltip title="NextJS" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={nextLogo} alt="NextJSLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Gatsby" &&
                                    <>
                                        <Tooltip title="Gatsby" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={gatsbyLogo} alt="GatsbyLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Node" &&
                                    <>
                                        <Tooltip title="Node" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={nodeLogo} alt="NodeLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Express" &&
                                    <>
                                        <Tooltip title="Express" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={expressLogo} alt="ExpressLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Git" &&
                                    <>
                                        <Tooltip title="Git" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={gitLogo} alt="GitLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "Mocha" &&
                                    <>
                                        <Tooltip title="Mocha" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={mochaLogo} alt="MochaLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                                {instance === "MongoDB" &&
                                    <>
                                        <Tooltip title="MongoDB" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                            <img src={mongoLogo} alt="MongoDBLogo" height="80px" width="80px" style={{marginBottom: "2%"}} />
                                        </Tooltip>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </>
                                }
                            </React.Fragment>
                        ))}

                        <br />
                        <br />
                        <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>External Links</Typography>
                        {github !== "" &&
                            <>
                                <Button href={`${github}`} target="_blank" variant="outlined" sx={{textTransform: "none", marginTop: "2%"}}>
                                    <GitHub />
                                    &nbsp;&nbsp;
                                    <Typography sx={{fontFamily: "Source Sans Pro", fontSize: width > 600 ? "18px" : "16px"}}>Github</Typography>
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                        }
                        {live !== "" &&
                            <>
                                <Button href={`${live}`} target="_blank" variant="outlined" sx={{textTransform: "none", marginTop: "2%", color: "white", backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                    <ExitToAppIcon />
                                    &nbsp;&nbsp;
                                    <Typography sx={{fontFamily: "Source Sans Pro", fontSize: width > 600 ? "18px" : "16px"}}>Live</Typography>
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                        }
                    </CardContent>
                </Card>
            </Dialog>
        </>
    )
}

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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
]