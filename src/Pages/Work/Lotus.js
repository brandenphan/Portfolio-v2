import React from "react";
import { Grid, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import LotusImage1 from "../../Images/Work/LotusImage1.png";
import LotusImage2 from "../../Images/Work/LotusImage2.png";


const Lotus = () => {
    const { width } = useWidth();

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
                    <img src={LotusImage2} alt="LotusImage2" height={width > 800 ? "500px" : width > 500 ? "350px" : "275px"} width="auto" style={{marginTop: width > 800 ? "50px" : "60px", marginBottom: width > 800 ? "50px" : "60px"}} />
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

            <BackNav />
        </div>
    )
}

export default Lotus;