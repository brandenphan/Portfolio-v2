import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import cutsbyjz1 from "../../Images/Work/cutsbyjz/cutsbyjz1.png";
import cutsbyjz2 from "../../Images/Work/cutsbyjz/cutsbyjz2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import full1 from "../../Images/Work/cutsbyjz/full1.png";
import full2 from "../../Images/Work/cutsbyjz/full2.png";
import full3 from "../../Images/Work/cutsbyjz/full3.png";
import full4 from "../../Images/Work/cutsbyjz/full4.png";
import full5 from "../../Images/Work/cutsbyjz/full5.png";
import full6 from "../../Images/Work/cutsbyjz/full6.png";
import mobi1 from "../../Images/Work/cutsbyjz/mobi1.png";
import mobi2 from "../../Images/Work/cutsbyjz/mobi2.png";
import mobi3 from "../../Images/Work/cutsbyjz/mobi3.png";
import mobi4 from "../../Images/Work/cutsbyjz/mobi4.png";
import mobi5 from "../../Images/Work/cutsbyjz/mobi5.png";
import mobi6 from "../../Images/Work/cutsbyjz/mobi6.png";


const Cutsbyjz = () => {
    const { width } = useWidth();

    const [fullImageNumber, setFullImageNumber] = React.useState(0);
    const nextFullImage = () => {
        if (fullImageNumber === 5) {
            setFullImageNumber(0);
        }
        else {
            setFullImageNumber(fullImageNumber + 1);
        }
    }
    const prevFullImage = () => {
        if (fullImageNumber === 0) {
            setFullImageNumber(5);
        }
        else {
            setFullImageNumber(fullImageNumber - 1);
        }
    }
    const [mobiImageNumber, setMobiImageNumber] = React.useState(0);
    const nextMobiImage = () => {
        if (mobiImageNumber === 5) {
            setMobiImageNumber(0);
        }
        else {
            setMobiImageNumber(mobiImageNumber + 1);
        }
    }
    const prevMobiImage = () => {
        if (mobiImageNumber === 0) {
            setMobiImageNumber(5);
        }
        else {
            setMobiImageNumber(mobiImageNumber - 1);
        }
    }

    // Forces the page to start at the top if the page is loaded
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{backgroundColor: "#DADADA", display: "flex", justifyContent: "center"}}>
                {width > 1000 ?
                    <img src={cutsbyjz1} alt="CutsbyjzLargeLandingImage" height="500px" width="auto" />
                :
                    <img src={cutsbyjz2} alt="CutsbyjzLargeMobiImage" height={width > 800 ? "500px" : width > 500 ? "350px" : "275px"} width="auto" style={{marginTop: width > 800 ? "90px" : "90px", marginBottom: width > 800 ? "50px" : "60px"}} />
                }
            </div>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: width > 700 ? "100px" : "80px", display: "flex", flexDirection: "column"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h5" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Cutsbyjz
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px"}}>Front-end Developer</Typography>

                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px"}}>Work in progress!</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Description
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Developing a full-stack web-application using React TypeScript, designing a modern and responsive user interface to showcase various information regarding the barbershop</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Working in a team of two, utilizing Git tools such as issues, sprint boards, and pull requests while following AGILE methodologies</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Throughly testing all code to ensure the web-application is supported by major web browsers and bug free</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Technologies
                </Typography>
                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px"}}>
                    {["TypeScript", "React", "Netlify", "Node"].map((language, ID) => (
                        <Grid item key={ID} sx={{marginRight: "20px", marginBottom: "20px", width: width > 700 ? "130px" : "110px", height: "50px", backgroundColor: "#DADADA", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 700 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : ""}}>{language}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginRight: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Full Screen Design - {fullImageNumber + 1}/6
                </Typography>
                {width > 800 ? 
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <IconButton onClick={() => {prevFullImage()}}>
                            <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                        <img src={fullImageNumber === 0 ? full1 : fullImageNumber === 1 ? full2 : fullImageNumber === 2 ? full3 : fullImageNumber === 3 ? full4 : fullImageNumber === 4 ? full5 : full6} alt="FullImage" height={width > 1000 ? "70%" : width > 600 ? "90%" : "80%"} width={width > 1000 ? "70%" : width > 600 ? "90%" : "80%"} style={{borderRadius: "10px"}} />
                        <IconButton onClick={() => {nextFullImage()}}>
                            <IoIosArrowForward style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                    </div>
                :
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={fullImageNumber === 0 ? full1 : fullImageNumber === 1 ? full2 : fullImageNumber === 2 ? full3 : fullImageNumber === 3 ? full4 : fullImageNumber === 4 ? full5 : full6} alt="MobiImage" height="100%" width="100%" style={{borderRadius: "10px"}} />
                        <div style={{marginTop: "10px"}}>
                            <IconButton onClick={() => {prevFullImage()}}>
                                <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.5rem", color: "black"}} />
                            </IconButton>
                            <IconButton onClick={() => {nextFullImage()}}>
                                <IoIosArrowForward style={{fontSize: width > 1000 ? "2rem" : "1.5rem", color: "black"}} />
                            </IconButton>
                        </div>
                    </div>
                }
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginRight: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Mobile Design - {mobiImageNumber + 1}/6
                </Typography>
                {width > 800 ? 
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <IconButton onClick={() => {prevMobiImage()}}>
                            <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                        <img src={mobiImageNumber === 0 ? mobi1 : mobiImageNumber === 1 ? mobi2 : mobiImageNumber === 2 ? mobi3 : mobiImageNumber === 3 ? mobi4 : mobiImageNumber === 4 ? mobi5 : mobi6} alt="FullImage" style={{borderRadius: "10px", height: "50vh"}} />
                        <IconButton onClick={() => {nextMobiImage()}}>
                            <IoIosArrowForward style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                    </div>
                :
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={mobiImageNumber === 0 ? mobi1 : mobiImageNumber === 1 ? mobi2 : mobiImageNumber === 2 ? mobi3 : mobiImageNumber === 3 ? mobi4 : mobiImageNumber === 4 ? mobi5 : mobi6} alt="MobiImage" style={{borderRadius: "10px", height: "60vh"}} />
                        <div style={{marginTop: "10px"}}>
                            <IconButton onClick={() => {nextMobiImage()}}>
                                <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.5rem", color: "black"}} />
                            </IconButton>
                            <IconButton onClick={() => {nextMobiImage()}}>
                                <IoIosArrowForward style={{prevMobiImage: width > 1000 ? "2rem" : "1.5rem", color: "black"}} />
                            </IconButton>
                        </div>
                    </div>
                }
            </Grid>

            <BackNav />
        </div>
    )
}

export default Cutsbyjz;