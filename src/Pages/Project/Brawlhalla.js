import React from "react";
import { Grid, Typography } from "@mui/material";
import BackNav from "../../Components/BackNav";
import { useWidth } from "../../Context/WidthContext";
import { useTheme } from "../../Context/ThemeContext";


const Brawlhalla = () => {
    const { width } = useWidth();
    const { theme } = useTheme();

    // Forces the page to start at the top if the page is loaded
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: theme === "light" ? "rgb(237, 242, 251, 0.45)" : "#2D2D2D", transition: "0.3s"}}>
            <div style={{backgroundColor: "#CAC6E1", display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
                <Typography variant="h4" align="center" sx={{fontFamily: "Nunito", fontWeight: "bold", color: "black"}}>Brawlhalla</Typography>
            </div>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: width > 700 ? "100px" : "80px", display: "flex", flexDirection: "column"}}>
                <div style={{border: theme === "light" ? "1px solid black" : "1px solid white", marginBottom: "20px", width: "60px"}} />
                <Typography variant="h5" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>
                    Brawlhalla
                </Typography>

            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>
                    Description
                </Typography>
                <Typography variant="subtitle1" align="left" sx={{fontFamily: "Nunito", marginTop: "10px", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>Web-application utilizing React and the Brawlhalla API to provide users with various information regarding the Brawlhalla Game</Typography>
            </Grid>

            <Grid container sx={{marginLeft: width > 1400 ? "150px" : width > 1100 ? "120px" : width > 900 ? "100px" : width > 700 ? "70px" : "40px", marginTop: "50px", display: "flex", flexDirection: "column", width: width > 1800 ? "50%" : width > 900 ? "60%" : "80%", marginBottom: width > 700 ? "90px" : "60px"}}>
                <Typography variant="h6" sx={{fontFamily: "Nunito", fontWeight: "bold", color: theme === "light" ? "black" : "white", transition: "0.3s"}}>
                    Technologies
                </Typography>
                <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px"}}>
                    {["JavaScript", "React", "Node", "Git"].map((language, ID) => (
                        <Grid item key={ID} sx={{marginRight: "20px", marginBottom: "20px", width: width > 700 ? "130px" : "110px", height: "50px", backgroundColor: "#CAC6E1", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant={width > 700 ? "subtitle1" : "subtitle2"} align="center" sx={{fontFamily: "Nunito", fontWeight: width > 700 ? "bold" : ""}}>{language}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <BackNav />
        </div>
    )
}

export default Brawlhalla;