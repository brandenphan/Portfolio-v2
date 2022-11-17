import React from "react";
import { Grid, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";


const CourseSearch = () => {
    const { width } = useWidth();

    // Forces the page to start at the top if the page is loaded
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{backgroundColor: "#FCD5CE", display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
                <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold", color: "#6368D8"}}>Course Search</Typography>
            </div>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: width > 700 ? "100px" : "80px", display: "flex", flexDirection: "column"}}>
                <div style={{border: "1px solid black", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h5" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Course Search
                </Typography>

            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Description
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px"}}>Full-stack web-application created in a team of 6 people, developed over a span of 4 weeks. Web-application allows users to search courses and graph major/minor/subject trees offered at the University of Guelph and University of British Columbia.</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold"}}>
                    Technologies
                </Typography>
                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px"}}>
                    {["JavaScript", "React", "NextJS", "Node", "Express", "Git", "Mocha"].map((language, ID) => (
                        <Grid item key={ID} sx={{marginRight: "20px", marginBottom: "20px", width: width > 700 ? "130px" : "110px", height: "50px", backgroundColor: "#FCD5CE", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 700 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : ""}}>{language}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <BackNav />
        </div>
    )
}

export default CourseSearch;