import React from "react";
import { useWidth } from "../Context/WidthContext";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import { Grid, Typography, IconButton, Tooltip, Collapse, Button, Dialog, Card, CardContent } from "@mui/material";
import profilePic from "../Images/profile.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { CgArrowLongDown } from 'react-icons/cg';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHub from "@mui/icons-material/GitHub";

import { FaScroll } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai'
import transcript from '../Images/transcript.pdf';

import javascriptLogo from '../Images/LanguageIcons/javascript.svg';
import cssLogo from '../Images/LanguageIcons/css.svg';
import htmlLogo from '../Images/LanguageIcons/html.svg';
import cLogo from '../Images/LanguageIcons/cLanguage.svg';
import javaLogo from '../Images/LanguageIcons/java.svg';
import pythonLogo from '../Images/LanguageIcons/python.svg';
import reactLogo from '../Images/TechnologyIcons/react.svg';
import gatsbyLogo from '../Images/TechnologyIcons/gatsby.svg';
import nextLogo from '../Images/TechnologyIcons/nextjs.svg';
import nodeLogo from '../Images/TechnologyIcons/node.svg';
import expressLogo from '../Images/TechnologyIcons/express.svg';
import graphLogo from '../Images/TechnologyIcons/graphql.svg';
import mongoLogo from '../Images/TechnologyIcons/mongo.svg';
import mysqlLogo from '../Images/TechnologyIcons/mysql.svg';
import firebaseLogo from '../Images/TechnologyIcons/firebase.svg';
import mochaLogo from '../Images/TechnologyIcons/mocha.svg';
import gitLogo from '../Images/TechnologyIcons/git.svg';
import herokuLogo from '../Images/TechnologyIcons/heroku.svg';
import figmaLogo from '../Images/DesignIcons/figma.svg';
import gimpLogo from '../Images/DesignIcons/gimp.svg';

import courseSearchPNG from '../Images/Projects/CourseSearch.png';
import LotusImagePNG from '../Images/Projects/LotusImage.png';
import PortfolioImageNewPNG from '../Images/Projects/PortfolioImageNew.png';
import PortfolioImageOldPNG from '../Images/Projects/PortfolioImageOld.png';
import ScheduleMakerImagePNG from '../Images/Projects/ScheduleMakerImage.png';
import GpxImagePNG from '../Images/Projects/GpxImage.png';
import DiscordImagePNG from '../Images/Projects/DiscordImage.png';
import BrawlhallaImagePNG from '../Images/Projects/BrawlhallaImage.png';
import courseSearchWEBP from '../Images/Projects/CourseSearch.webp';
import LotusImageWEBP from '../Images/Projects/LotusImage.webp';
import PortfolioImageNewWEBP from '../Images/Projects/PortfolioImageNew.webp';
import PortfolioImageOldWEBP from '../Images/Projects/PortfolioImageOld.webp';
import ScheduleMakerImageWEBP from '../Images/Projects/ScheduleMakerImage.webp';
import GpxImageWEBP from '../Images/Projects/GpxImage.webp';
import DiscordImageWEBP from '../Images/Projects/DiscordImage.webp';
import BrawlhallaImageWEBP from '../Images/Projects/BrawlhallaImage.webp';
import GuelphDentalPNG from '../Images/Projects/GuelphDental.png';
import GuelphDentalWEBP from '../Images/Projects/GuelphDental.webp';


const Index = () => {
    const { width } = useWidth();

    const [openGuelphDental, setOpenGuelphDental] = React.useState(false);
    const [openLotus, setOpenLotus] = React.useState(false);
    const [openExtremePC, setOpenExtremePC] = React.useState(false);
    const handleOpenGuelphDental = () => {
        if (openGuelphDental === true) {
            setOpenGuelphDental(false);
        }
        else {
            setOpenGuelphDental(true);
        }
    }
    const handleOpenLotus = () => {
        if (openLotus === true) {
            setOpenLotus(false);
        }
        else {
            setOpenLotus(true);
        }
    }
    const handleOpenExtremePC = () => {
        if (openExtremePC === true) {
            setOpenExtremePC(false);
        }
        else {
            setOpenExtremePC(true);
        }
    }


    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>

            {/* Home Page Section */}
            <div id="Home" style={{height: "100vh", position: "relative", display: "flex", alignItems: "center", boxShadow: "0 13px 13px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(54, 114, 255, 0.2), 0 20px 20px 0 rgba(54, 114, 255, 0.2)"}}>
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
            


            {/* Education Section */}
            <div id="Education">
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Education</Typography>
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
                                        <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Dean's List: 2019, 2020, 2021</Typography>
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



            {/* Skill Section */}
            <div id="Skills">
                {/* Languages Section */}
                <Grid container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Languages</Typography>
                    </Grid>

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={javascriptLogo} alt="JavaScriptLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        {width > 600 ?
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>JavaScript</Typography>
                        :
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>JS</Typography>
                        }
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={htmlLogo} alt="HTMLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>HTML</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={cssLogo} alt="CSSLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>CSS</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={cLogo} alt="CLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>C</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={javaLogo} alt="JavaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Java</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={pythonLogo} alt="PythonLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Python</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={cLogo} alt="CLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>C</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={javaLogo} alt="JavaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Java</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={pythonLogo} alt="PythonLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Python</Typography>
                        </Grid>
                    </Grid>
                }


                {/* Technologies Section */}
                <Grid container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Technologies</Typography>
                    </Grid>

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={reactLogo} alt="ReactLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>React</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={gatsbyLogo} alt="GatsbyLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Gatsby</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={nextLogo} alt="NextJSLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>NextJS</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={graphLogo} alt="GraphQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>GraphQL</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={nodeLogo} alt="NodeLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Node</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={expressLogo} alt="ExpressLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Express</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={graphLogo} alt="GraphQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>GraphQL</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={nodeLogo} alt="NodeLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Node</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={expressLogo} alt="ExpressLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Express</Typography>
                        </Grid>
                    </Grid>
                }

                <Grid container sx={{display: "flex", justifyContent: "center", marginTop: width > 650 ? "6vh" : "4vh"}}>
                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={mysqlLogo} alt="MySQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>MySQL</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={mongoLogo} alt="MongoDBLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mongo</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={firebaseLogo} alt="FirebaseLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Firebase</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={gitLogo} alt="GitLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Git</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={herokuLogo} alt="HerokuLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Heroku</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={mochaLogo} alt="MochaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mocha</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={gitLogo} alt="GitLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Git</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={herokuLogo} alt="HerokuLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Heroku</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={mochaLogo} alt="MochaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mocha</Typography>
                        </Grid>
                    </Grid>
                }
            </div>


            
            {/* Design Tools */}
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                    <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Design Tools</Typography>
                </Grid>

                <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                    <img src={figmaLogo} alt="FigmaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                    <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Figma</Typography>
                </Grid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {width > 600 &&
                    <>
                        &nbsp;&nbsp;&nbsp;
                    </>
                }

                <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                    <img src={gimpLogo} alt="GimpLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                    <Typography align="center" variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Gimp</Typography>
                </Grid>
            </Grid>




            {/* Project Section */}
            <div id="Projects" style={{boxShadow: "0 5px 13px 10px rgba(0, 0, 0, 0.3), 0 3px 5px 5px rgba(54, 114, 255, 0.2), 0 10px 20px 10px rgba(54, 114, 255, 0.2)"}}>
                <Grid container sx={{marginTop: "15vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh", marginTop: "10vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Projects</Typography>
                    </Grid>

                    <Grid container columnSpacing={width > 1400 ? 20 : width > 1000 ? 16 : 0} sx={{marginTop: "1%", paddingLeft: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%", paddingRight: width > 1400 ? "14%" : width > 1000 ? "10%" : "4%"}}>
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



            {/* Work Section */}
            <div id="Work">
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "22%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "22%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Work</Typography>
                    </Grid>

                    {/* Guelph Dental Section */}
                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 1500 ? 8 : 12}>
                                <Typography variant={width > 600 ? "h5" : "h6"} sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Guelph Dental</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "1%"}}>Guelph, Ontario</Typography>
                                {width <= 1500 && <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "1%"}}>May 2022 - June 2022</Typography>}
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Full-stack Developer</Typography>
                                {width <= 700 &&
                                    (openLotus ? 
                                        <>
                                        <br />
                                        <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenGuelphDental()}}>Collapse</Button>
                                        </>
                                    :
                                        <>
                                            <br />
                                            <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenGuelphDental()}}>Read More</Button>
                                        </>
                                    )
                                }
                                
                                {width > 700 ?
                                    <ul style={{marginTop: "3%"}}>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Developing a full-stack web-application using React JS and Express JS to create a modern and visually appealing web-application regarding Guelph Denta</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Front-end developed to target an optimized SEO, while creating an aesthetic, efficient and easy-to-use interface</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Back-end utilizes Express and Node JS, providing endpoints utilized by the front-end to securely retrieve and manipulate MongoDB data</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Future proofing supported through various front-end components combined with the back-end, allowing the company to easily and securely change the web-application with zero coding</Typography>
                                        </li>
                                    </ul>
                                :
                                    <Collapse in={openGuelphDental}>
                                        <ul style={{marginTop: "3%"}}>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Developing a full-stack web-application using React JS and Express JS to create a modern and visually appealing web-application regarding Guelph Denta</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Front-end developed to target an optimized SEO, while creating an aesthetic, efficient and easy-to-use interface</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Back-end utilizes Express and Node JS, providing endpoints utilized by the front-end to securely retrieve and manipulate MongoDB data</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Future proofing supported through various front-end components combined with the back-end, allowing the company to easily and securely change the  web-application with zero coding</Typography>
                                            </li>
                                        </ul>
                                    </Collapse>
                            }
                            </Grid>

                            {width > 1500 &&
                                <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                    <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF"}}>May 2022 - June 2022</Typography>
                                </Grid>
                            }
                        </Grid>
                    </Grid>

                    {/* Lotus Section */}
                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item xs={12} sx={{marginTop: width > 650 ? "6vh" : "4vh", padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 1500 ? 8 : 12}>
                                <Typography variant={width > 600 ? "h5" : "h6"} sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Lotus Thai & Vietnamese Cuisine</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "1%"}}>Hamilton, Ontario</Typography>
                                {width <= 1500 && <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "1%"}}>Dec 2021 - Mar 2022</Typography>}
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Frontend Developer</Typography>
                                {width <= 700 &&
                                    (openLotus ? 
                                        <>
                                        <br />
                                        <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenLotus()}}>Collapse</Button>
                                        </>
                                    :
                                        <>
                                            <br />
                                            <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenLotus()}}>Read More</Button>
                                        </>
                                    )
                                }
                                
                                {width > 700 ?
                                    <ul style={{marginTop: "3%"}}>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Developing a front-end web-application using React JavaScript, creating a modern and responsive user interface, displaying various information pertaining to the Lotus restaurant</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Optimizing SEO through concise and updated metadata to increase customer traffic to the Lotus web-application</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Utilizing different techniques to improve website speed such as image optimization and CDN usage</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Numerous test to ensure the web-application is supported by major web browsers and responsive for different screen sizes</Typography>
                                        </li>
                                    </ul>
                                :
                                    <Collapse in={openLotus}>
                                        <ul style={{marginTop: "3%"}}>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Developing a front-end web-application using React JavaScript, creating a modern and responsive user interface, displaying various information pertaining to the Lotus restaurant</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Optimizing SEO through concise and updated metadata to increase customer traffic to the Lotus web-application</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Utilizing different techniques to improve website speed such as image optimization and CDN usage</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Numerous test to ensure the web-application is supported by major web browsers and responsive for different screen sizes</Typography>
                                            </li>
                                        </ul>
                                    </Collapse>
                            }
                            </Grid>

                            {width > 1500 &&
                                <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                    <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF"}}>Dec 2021 - Mar 2022</Typography>
                                </Grid>
                            }
                        </Grid>
                    </Grid>

                    {/* Extreme PC Section */}
                    <Grid component={motion.div} whileHover={{scale: 1.02, transition: {duration: 0.3}}} item xs={12} sx={{marginTop: width > 650 ? "6vh" : "4vh", marginBottom: width > 650 ? "6vh" : "4vh", padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 1500 ? 8 : 12}>
                                <Typography variant={width > 600 ? "h5" : "h6"} sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Extreme PC</Typography>
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "1%"}}>Guelph, Ontario</Typography>
                                {width <= 1500 && <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "1%"}}>Oct 2018 - Jan 2019</Typography>}
                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Tech Associate</Typography>
                                {width <= 700 &&
                                    (openExtremePC ? 
                                        <>
                                        <br />
                                        <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenExtremePC()}}>Collapse</Button>
                                        </>
                                    :
                                        <>
                                            <br />
                                            <Button sx={{padding: "0", color: "#E60268", fontFamily: "Montserrat", fontWeight: "bold"}} onClick={() => {handleOpenExtremePC()}}>Read More</Button>
                                        </>
                                    )
                                }
                                
                                {width > 700 ?
                                    <ul style={{marginTop: "3%"}}>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Worked as a team to complete various tasks and projects such as, working together to do research on a product, subsequently updating the company website with the new product</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Built high quality computers to meet company standards, setting up the computers software and ensuring everything was up to date</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Troubleshoot and repaired computer hardware and software problems</Typography>
                                        </li>
                                        <li>
                                            <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Assisted with customer service</Typography>
                                        </li>
                                    </ul>
                                :
                                    <Collapse in={openExtremePC}>
                                        <ul style={{marginTop: "3%"}}>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Worked as a team to complete various tasks and projects such as, working together to do research on a product, subsequently updating the company website with the new product</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Built high quality computers to meet company standards, setting up the computers software and ensuring everything was up to date</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Troubleshoot and repaired computer hardware and software problems</Typography>
                                            </li>
                                            <li>
                                                <Typography variant={width > 600 ? "subtitle1" : "subtitle2"} sx={{fontFamily: "Montserrat"}}>Assisted with customer service</Typography>
                                            </li>
                                        </ul>
                                    </Collapse>
                            }
                            </Grid>

                            {width > 1500 &&
                                <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                    <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF"}}>Oct 2018 - Jan 2019</Typography>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>



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

            
            {/* NavBar Section */}
            <NavBar />
        </div>
    )
};

export default Index;


// Card Component for projects
const CardComponent = ({projectName, description, github, live, techs, imageNamePNG, imageNameWEBP, width}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Grid item xs={width > 1000 ? 6 : 12}>
                <Button onClick={() => {setOpen(true);}} sx={{padding: "0", boxShadow: "0px 0px 7px 1px rgba(9,62,128,0.49)", transition: "0.4s", "&:hover": {transform: "translateY(-4px)"}}}>
                    <picture style={{height: "100%"}}>
                        <source srcSet={imageNameWEBP} type="image/webp" />
                        <source srcSet={imageNamePNG} type="image/png" />
                        <img src={imageNamePNG} alt={projectName} height="100%" width="100%" style={{display: "block"}} />
                    </picture>
                </Button>
                <Typography variant={width > 600 ? "h6" : "subtitle1"} sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "3%", marginLeft: "1%"}}>{projectName}</Typography>
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

// Project arrays holding project information
const projectArray = [
    {
        imageNamePNG: GuelphDentalPNG,
        imageNameWEBP: GuelphDentalWEBP,
        name: "Guelph Dental",
        description: "Full-stack web-application, showcasing various information regarding Guelph Dental while also allowing future proofing capability features.",
        github: "",
        live: "https://brandenphansample.netlify.app/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Express",
            "Heroku",
            "MongoDB",
            "Git"
        ]
    },
    {
        imageNamePNG: LotusImagePNG,
        imageNameWEBP: LotusImageWEBP,
        name: "Lotus",
        description: "Front-end web-application, displaying a modern and responsive user interface to showcase various information pertaining to the Lotus restaurant.",
        github: "",
        live: "https://lotusrestaurant.ca/",
        technologies: [
            "JavaScript",
            "React",
            "Node",
            "Git"
        ]
    },
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
        description: "Full-stack web-application written in C and JavaScript allowing users to uploade/download GPx files and perform various tasks related to those files.",
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