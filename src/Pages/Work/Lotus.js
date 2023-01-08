import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import LotusImage1 from "../../Images/Work/Lotus/LotusImage1.png";
import LotusImage2 from "../../Images/Work/Lotus/LotusImage2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import full1 from "../../Images/Work/Lotus/full1.png";
import full2 from "../../Images/Work/Lotus/full2.png";
import full3 from "../../Images/Work/Lotus/full3.png";
import full4 from "../../Images/Work/Lotus/full4.png";
import full5 from "../../Images/Work/Lotus/full5.png";
import full6 from "../../Images/Work/Lotus/full6.png";
import full7 from "../../Images/Work/Lotus/full7.png";
import full8 from "../../Images/Work/Lotus/full8.png";
import full9 from "../../Images/Work/Lotus/full9.png";
import full10 from "../../Images/Work/Lotus/full10.png";
import full11 from "../../Images/Work/Lotus/full11.png";
import full12 from "../../Images/Work/Lotus/full12.png";
import mobi1 from "../../Images/Work/Lotus/mobi1.png";
import mobi2 from "../../Images/Work/Lotus/mobi2.png";
import mobi3 from "../../Images/Work/Lotus/mobi3.png";
import mobi4 from "../../Images/Work/Lotus/mobi4.png";
import mobi5 from "../../Images/Work/Lotus/mobi5.png";
import mobi6 from "../../Images/Work/Lotus/mobi6.png";
import mobi7 from "../../Images/Work/Lotus/mobi7.png";
import mobi8 from "../../Images/Work/Lotus/mobi8.png";
import mobi9 from "../../Images/Work/Lotus/mobi9.png";
import mobi10 from "../../Images/Work/Lotus/mobi10.png";
import mobi11 from "../../Images/Work/Lotus/mobi11.png";
import mobi12 from "../../Images/Work/Lotus/mobi12.png";
import mobi13 from "../../Images/Work/Lotus/mobi13.png";


const Lotus = () => {
    const { width } = useWidth();

    const [fullImageNumber, setFullImageNumber] = React.useState(0);
    const nextFullImage = () => {
        if (fullImageNumber === 11) {
            setFullImageNumber(0);
        }
        else {
            setFullImageNumber(fullImageNumber + 1);
        }
    }
    const prevFullImage = () => {
        if (fullImageNumber === 0) {
            setFullImageNumber(11);
        }
        else {
            setFullImageNumber(fullImageNumber - 1);
        }
    }
    const [mobiImageNumber, setMobiImageNumber] = React.useState(0);
    const nextMobiImage = () => {
        if (mobiImageNumber === 12) {
            setMobiImageNumber(0);
        }
        else {
            setMobiImageNumber(mobiImageNumber + 1);
        }
    }
    const prevMobiImage = () => {
        if (mobiImageNumber === 0) {
            setMobiImageNumber(12);
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
            <div style={{backgroundColor: "#E3D5CA", display: "flex", justifyContent: "center"}}>
                {width > 1000 ?
                    <img src={LotusImage1} alt="LotusImage1" height="500px" width="auto" />
                :
                    <img src={LotusImage2} alt="LotusImage2" height={width > 800 ? "500px" : width > 500 ? "350px" : "275px"} width="auto" style={{marginTop: width > 800 ? "90px" : "90px", marginBottom: width > 800 ? "50px" : "60px"}} />
                }
            </div>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: width > 700 ? "100px" : "80px", display: "flex", flexDirection: "column"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h5" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Lotus
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px"}}>Front-end Developer</Typography>

                <span style={{marginTop: "10px"}}>
                    <a href="https://lotusrestaurant.ca/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#3672FF", fontFamily: "Nunito", fontsize: "16px"}}>
                        Find the website here!
                    </a>
                </span>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Description
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Developing a front-end web-application using React JavaScript, creating a modern and responsive user interface to display various information pertaining to the Lotus restaurant</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Optimizing SEO through concise and updated metadata to increase customer traffic to the Lotus web-application</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Utilizing different techniques to improve website speed such as image optimization and CDN usage</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Numerous test to ensure the web-application is supported by major web browsers and responsive for different screen sizes</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Technologies
                </Typography>
                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px"}}>
                    {["JavaScript", "React", "Node", "Git"].map((language, ID) => (
                        <Grid item key={ID} sx={{marginRight: "20px", marginBottom: "20px", width: width > 700 ? "130px" : "110px", height: "50px", backgroundColor: "#E3D5CA", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 700 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : ""}}>{language}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginRight: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Full Screen Design - {fullImageNumber + 1}/12
                </Typography>
                {width > 800 ? 
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <IconButton onClick={() => {prevFullImage()}}>
                            <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                        <img src={fullImageNumber === 0 ? full1 : fullImageNumber === 1 ? full2 : fullImageNumber === 2 ? full3 : fullImageNumber === 3 ? full4 : fullImageNumber === 4 ? full5 : fullImageNumber === 5 ? full6 : fullImageNumber === 6 ? full7 : fullImageNumber === 7 ? full8 : fullImageNumber === 8 ? full9 : fullImageNumber === 9 ? full10 : fullImageNumber === 10 ? full11 : full12} alt="FullImage" height={width > 1000 ? "70%" : width > 600 ? "90%" : "80%"} width={width > 1000 ? "70%" : width > 600 ? "90%" : "80%"} style={{borderRadius: "10px", border: "1px solid #CAC8C8"}} />
                        <IconButton onClick={() => {nextFullImage()}}>
                            <IoIosArrowForward style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                    </div>
                :
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={fullImageNumber === 0 ? full1 : fullImageNumber === 1 ? full2 : fullImageNumber === 2 ? full3 : fullImageNumber === 3 ? full4 : fullImageNumber === 4 ? full5 : fullImageNumber === 5 ? full6 : fullImageNumber === 6 ? full7 : fullImageNumber === 7 ? full8 : fullImageNumber === 8 ? full9 : fullImageNumber === 9 ? full10 : fullImageNumber === 10 ? full11 : full12} alt="MobiImage" height="100%" width="100%" style={{borderRadius: "10px", border: "1px solid #CAC8C8"}} />
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
                    Mobile Design - {mobiImageNumber + 1}/13
                </Typography>
                {width > 800 ? 
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <IconButton onClick={() => {prevMobiImage()}}>
                            <IoIosArrowBack style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                        <img src={mobiImageNumber === 0 ? mobi1 : mobiImageNumber === 1 ? mobi2 : mobiImageNumber === 2 ? mobi3 : mobiImageNumber === 3 ? mobi4 : mobiImageNumber === 4 ? mobi5 : mobiImageNumber === 5 ? mobi6 : mobiImageNumber === 6 ? mobi7 : mobiImageNumber === 7 ? mobi8 : mobiImageNumber === 8 ? mobi9 : mobiImageNumber === 9 ? mobi10 : mobiImageNumber === 10 ? mobi11 : mobiImageNumber === 11 ? mobi12 : mobi13} alt="FullImage" style={{borderRadius: "10px", height: "50vh", border: "1px solid #CAC8C8"}} />
                        <IconButton onClick={() => {nextMobiImage()}}>
                            <IoIosArrowForward style={{fontSize: width > 1000 ? "2rem" : "1.3rem", color: "black"}} />
                        </IconButton>
                    </div>
                :
                    <div style={{marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={mobiImageNumber === 0 ? mobi1 : mobiImageNumber === 1 ? mobi2 : mobiImageNumber === 2 ? mobi3 : mobiImageNumber === 3 ? mobi4 : mobiImageNumber === 4 ? mobi5 : mobiImageNumber === 5 ? mobi6 : mobiImageNumber === 6 ? mobi7 : mobiImageNumber === 7 ? mobi8 : mobiImageNumber === 8 ? mobi9 : mobiImageNumber === 9 ? mobi10 : mobiImageNumber === 10 ? mobi11 : mobiImageNumber === 11 ? mobi12 : mobi13} alt="MobiImage" style={{borderRadius: "10px", height: "60vh", border: "1px solid #CAC8C8"}} />
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

export default Lotus;