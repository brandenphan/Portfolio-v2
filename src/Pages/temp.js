import React from "react";
import { useWidth } from "../Context/WidthContext";
import NavBar from "../Components/NavBar";
import { Grid, Typography, IconButton, Tooltip, Collapse, Button } from "@mui/material";
import profilePic from "../Images/profile.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { CgArrowLongDown } from 'react-icons/cg';



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
import dockerLogo from '../Images/TechnologyIcons/docker.svg';

const Temp = () => {
    const { width } = useWidth();

    const [openLotus, setOpenLotus] = React.useState(false);
    const [openExtremePC, setOpenExtremePC] = React.useState(false);
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
            


            {/* Education Section */}
            <div id="Education">
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "24%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Education</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 650 ? 6 : 12}>
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

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={javascriptLogo} alt="JavaScriptLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>JS</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={htmlLogo} alt="HTMLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>HTML</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={cssLogo} alt="CSSLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>CSS</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={cLogo} alt="CLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>C</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={javaLogo} alt="JavaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Java</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={pythonLogo} alt="PythonLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Python</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={cLogo} alt="CLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>C</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={javaLogo} alt="JavaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Java</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={pythonLogo} alt="PythonLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Python</Typography>
                        </Grid>
                    </Grid>
                }


                {/* Technologies Section */}
                <Grid container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginTop: "15vh", marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Technologies</Typography>
                    </Grid>

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={reactLogo} alt="ReactLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>React</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={gatsbyLogo} alt="GatsbyLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Gatsby</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={nextLogo} alt="NextJSLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>NextJS</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={graphLogo} alt="GraphQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>GraphQL</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={nodeLogo} alt="NodeLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Node</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={expressLogo} alt="ExpressLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Express</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={graphLogo} alt="GraphQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>GraphQL</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={nodeLogo} alt="NodeLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Node</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={expressLogo} alt="ExpressLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Express</Typography>
                        </Grid>
                    </Grid>
                }

                <Grid container sx={{display: "flex", justifyContent: "center", marginTop: width > 650 ? "6vh" : "4vh"}}>
                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={mysqlLogo} alt="MySQLLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>MySQL</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={mongoLogo} alt="MongoDBLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mongo</Typography>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {width > 600 &&
                        <>
                            &nbsp;&nbsp;&nbsp;
                        </>
                    }

                    <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <img src={firebaseLogo} alt="FirebaseLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Firebase</Typography>
                    </Grid>

                    {width > 1200 &&
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }
                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={gitLogo} alt="GitLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Git</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={dockerLogo} alt="DockerLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Docker</Typography>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {width > 600 &&
                                <>
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            }

                            <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                                <img src={mochaLogo} alt="MochaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                                <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mocha</Typography>
                            </Grid>
                        </>
                    }
                </Grid>
                {width <= 1200 &&
                    <Grid container sx={{marginTop: width > 650 ? "6vh" : "4vh", display: "flex", justifyContent: "center"}}>
                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={gitLogo} alt="GitLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Git</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={dockerLogo} alt="DockerLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Docker</Typography>
                        </Grid>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {width > 600 &&
                            <>
                                &nbsp;&nbsp;&nbsp;
                            </>
                        }

                        <Grid item sx={{padding: width > 1200 ? "1%" : width > 900 ? "1.5%" : width > 600 ? "2%" : "2.5%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                            <img src={mochaLogo} alt="MochaLogo" height={width > 600 ? "100px" : "80px"} width={width > 600 ? "100px" : "80px"} />
                            <Typography align="center" variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "8%"}}>Mocha</Typography>
                        </Grid>
                    </Grid>
                }
            </div>




            {/* Project Section */}
            <div id="Projects" style={{height: "100vh", boxShadow: "0 5px 13px 10px rgba(0, 0, 0, 0.3), 0 3px 5px 5px rgba(54, 114, 255, 0.2), 0 10px 20px 10px rgba(54, 114, 255, 0.2)"}}>
                <Grid container sx={{marginTop: "15vh", display: "flex", justifyContent: "center"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh", marginTop: "10vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Projects</Typography>
                    </Grid>
                </Grid>
            </div>




            {/* Work Section */}
            <div>
                <Grid container sx={{marginTop: "15vh", paddingLeft: width > 1300 ? "22%" : width > 1000 ? "16%" : "4%", paddingRight: width > 1300 ? "22%" : width > 1000 ? "16%" : "4%"}}>
                    <Grid item xs={12} sx={{marginBottom: "5vh"}}>
                        <Typography variant="h4" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#E60268"}}>Work</Typography>
                    </Grid>

                    {/* Lotus Section */}
                    <Grid item xs={12} sx={{padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 1500 ? 8 : 12}>
                                <Typography variant="h5" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Lotus Thai & Vietnamese Cuisine</Typography>
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "1%"}}>Hamilton, Ontario</Typography>
                                {width <= 1500 && <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "1%"}}>Dec 2021 - April 2022</Typography>}
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Frontend Developer</Typography>
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
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Developing a front-end web-application using React JavaScript, creating a modern and responsive user interface, displaying various information pertaining to the Lotus restaurant</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Optimizing SEO through concise and updated metadata to increase customer traffic to the Lotus web-application</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Utilizing different techniques to improve website speed such as image optimization and CDN usage</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Numerous test to ensure the web-application is supported by major web browsers and responsive for different screen sizes</Typography>
                                        </li>
                                    </ul>
                                :
                                    <Collapse in={openLotus}>
                                        <ul style={{marginTop: "3%"}}>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Developing a front-end web-application using React JavaScript, creating a modern and responsive user interface, displaying various information pertaining to the Lotus restaurant</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Optimizing SEO through concise and updated metadata to increase customer traffic to the Lotus web-application</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Utilizing different techniques to improve website speed such as image optimization and CDN usage</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Numerous test to ensure the web-application is supported by major web browsers and responsive for different screen sizes</Typography>
                                            </li>
                                        </ul>
                                    </Collapse>
                            }
                            </Grid>

                            {width > 1500 &&
                                <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF"}}>Dec 2021 - Apr 2022</Typography>
                                </Grid>
                            }
                        </Grid>
                    </Grid>

                    {/* Extreme PC Section */}
                    <Grid item xs={12} sx={{marginTop: width > 650 ? "6vh" : "4vh", marginBottom: width > 650 ? "6vh" : "4vh", padding: width > 1000 ? "2%" : width > 600 ? "4%" : "6%", transition: "0.4s", "&:hover": {transform: "perspective(700px) translateZ(10px)"}, borderRadius: "10px", backgroundColor: "rgb(237, 242, 251, 0.45)", boxShadow: "2px 2px 5px 5px rgb(10, 70, 144, 0.2)"}}>
                        <Grid container>
                            <Grid item xs={width > 1500 ? 8 : 12}>
                                <Typography variant="h5" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Extreme PC</Typography>
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", marginTop: "1%"}}>Guelph, Ontario</Typography>
                                {width <= 1500 && <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "1%"}}>Oct 2018 - Jan 2019</Typography>}
                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Tech Associate</Typography>
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
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Worked as a team to complete various tasks and projects such as, working together to do research on a product, subsequently updating the company website with the new product</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Built high quality computers to meet company standards, setting up the computers software and ensuring everything was up to date</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Troubleshoot and repaired computer hardware and software problems</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Assisted with customer service</Typography>
                                        </li>
                                    </ul>
                                :
                                    <Collapse in={openExtremePC}>
                                        <ul style={{marginTop: "3%"}}>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Worked as a team to complete various tasks and projects such as, working together to do research on a product, subsequently updating the company website with the new product</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Built high quality computers to meet company standards, setting up the computers software and ensuring everything was up to date</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Troubleshoot and repaired computer hardware and software problems</Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" sx={{fontFamily: "Montserrat"}}>Assisted with customer service</Typography>
                                            </li>
                                        </ul>
                                    </Collapse>
                            }
                            </Grid>

                            {width > 1500 &&
                                <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Montserrat", fontWeight: "bold", color: "#3672FF"}}>Oct 2018 - Jan 2019</Typography>
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

export default Temp;