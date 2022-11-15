import React from "react";
import { Grid, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import CutsbyjzImage1 from "../../Images/Work/CutsbyjzImage1.png";
import CutsbyjzImage2 from "../../Images/Work/CutsbyjzImage2.png";
import CutsbyjzImage3 from "../../Images/Work/CutsbyjzImage3.png";
import CutsbyjzImage4 from "../../Images/Work/CutsbyjzImage4.png";


const Cutsbyjz = () => {
    const { width } = useWidth();

    // Forces the page to start at the top if the page is loaded
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{backgroundColor: "#DADADA", display: "flex", justifyContent: "center"}}>
                {width > 600 ?
                    <>
                        <img src={CutsbyjzImage1} alt="CutsbyjzImage1" height={width > 1600 ? "400px" : width > 900 ? "300px" : "200px"} width="auto" style={{marginTop: "100px", marginBottom: "60px"}} />
                        <img src={CutsbyjzImage2} alt="CutsbyjzImage2" height={width > 1600 ? "400px" : width > 900 ? "300px" : "200px"} width="auto" style={{marginTop: "100px", marginBottom: "60px"}} />
                        {width > 1300 &&
                            <img src={CutsbyjzImage4} alt="CutsbyjzImage4" height={width > 1600 ? "400px" : width > 900 ? "300px" : "200px"} width="auto" style={{marginTop: "100px", marginBottom: "60px"}} />
                        }
                    </>
                :
                    <img src={CutsbyjzImage3} alt="CutsbyjzImage3" height={width > 450 ? "250px" : "200px"} width="auto" style={{marginTop: width > 600 ? "100px" : "80px", marginBottom: width > 600 ? "60px" : "40px", marginLeft: "-10px"}} />
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

            <BackNav />
        </div>
    )
}

export default Cutsbyjz;