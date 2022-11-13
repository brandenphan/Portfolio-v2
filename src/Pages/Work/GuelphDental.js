import React from "react";
import { Grid, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import GuelphDentalImage1 from "../../Images/Work/GuelphDentalImage1.png";
import GuelphDentalImage2 from "../../Images/Work/GuelphDentalImage2.png";
import GuelphDentalImage3 from "../../Images/Work/GuelphDentalImage3.png";
import GuelphDentalImage4 from "../../Images/Work/GuelphDentalImage4.png";
import GuelphDentalImage5 from "../../Images/Work/GuelphDentalImage5.png";


const GuelphDental = () => {
    const { width } = useWidth();

    // Forces the page to start at the top if the page is loaded
    React.useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    
    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{backgroundColor: "#C1D3FE", display: "flex", justifyContent: "center"}}>
                {width > 900 ?
                    <>
                        <img src={GuelphDentalImage1} alt="GuelphDentalImage1" height={width > 1700 ? "470px" : width > 1500 ? "420px" : width > 1000 ? "370px" : "340px"} width="auto" style={{marginTop: "100px", marginBottom: "40px"}} />
                        <img src={GuelphDentalImage2} alt="GuelphDentalImage2" height={width > 1700 ? "470px" : width > 1500 ? "420px" : width > 1000 ? "370px" : "340px"} width="auto" style={{marginTop: "100px", marginBottom: "40px"}} />
                        <img src={GuelphDentalImage3} alt="GuelphDentalImage3" height={width > 1700 ? "470px" : width > 1500 ? "420px" : width > 1000 ? "370px" : "340px"}width="auto" style={{marginTop: "100px", marginBottom: "40px"}} />
                        {width > 1300 &&
                            <img src={GuelphDentalImage4} alt="GuelphDentalImage5" height={width > 1700 ? "470px" : width > 1500 ? "420px" : width > 1000 ? "370px" : "340px"} width="auto" style={{marginTop: "100px", marginBottom: "40px"}} />
                        }
                    </>
                :
                    <img src={GuelphDentalImage5} alt="GuelphDentalImage4" height={width > 700 ? "400px" : width > 600 ? "300px" : "200px"} width="auto" style={{marginTop: "100px", marginBottom: "80px"}} />
                }
            </div>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: width > 700 ? "100px" : "80px", display: "flex", flexDirection: "column"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h5" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Guelph Dental
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px"}}>Full-stack Developer</Typography>

                <span style={{marginTop: "10px"}}>
                    <a href="https://www.guelphdental.com/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#3672FF", fontFamily: "Nunito", fontsize: "16px"}}>
                        Find the website here!
                    </a>
                </span>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Description
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Developing a full-stack web-application using React JS and Express JS to create a modern and visually appealing web-application regarding Guelph Dental</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Front-end developed to target an optimized SEO, while creating an aesthetic, efficient and easy-to-use interface</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Back-end utilizes Express and Node JS, providing endpoints utilized by the front-end to securely retrieve and manipulate MongoDB data</Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", marginLeft: "25px"}}>• Future proofing supported through various front-end components combined with the back-end, allowing the company to easily and securely change the web-application with zero coding</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "110px" : "80px"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Technologies
                </Typography>
                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px"}}>
                    {width > 1500 ? 
                        <>
                            {["JavaScript", "React", "Mpde", "Express", "Heroku", "Mongo", "Git"].map((language, ID) => (
                                <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 6 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                </Grid>
                            ))}
                        </>
                    : width > 700 ?
                        <>
                            <Grid container>
                                {["JavaScript", "React", "Node", "Express"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 3 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container sx={{marginTop: "20px"}}>
                                {["Heroku", "Mongo", "Git"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 2 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    : width > 500 ?
                        <>
                            <Grid container>
                                {["JavaScript", "React", "Node"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 2 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container sx={{marginTop: "20px"}}>
                                {["Express", "Heroku", "Mongo"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 2 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
                                <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Git</Typography>
                            </Grid>
                        </>
                    :
                        <>
                            <Grid container>
                                {["JavaScript", "React"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container sx={{marginTop: "20px"}}>
                                {["Node", "Express"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container sx={{marginTop: "20px"}}>
                                {["Heroku", "Mongo"].map((language, ID) => (
                                    <Grid item key={ID} sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", marginRight: ID !== 1 && "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>{language}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item sx={{width: "110px", height: "50px", backgroundColor: "#ccdbfd", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
                                <Typography variant="subtitle2" align="center" sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>Git</Typography>
                            </Grid>
                        </>
                }
                </Grid>
            </Grid>

            <BackNav />
        </div>
    );
};

export default GuelphDental