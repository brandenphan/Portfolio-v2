import { useWidth } from "../Context/WidthContext";
import NavBar from "../Components/NavBar";
import { Grid, Typography } from "@mui/material";
import profilePic from "../Images/profile.png";

const Temp = () => {
    const { width } = useWidth();

    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            <div style={{height: "100vh", position: "relative", display: "flex", alignItems: "center"}}>
                <Grid container sx={{display: "flex", alignItems: "center", paddingLeft: "5%", paddingRight: "5%"}}>
                    <Grid item xs={6}>
                        <Typography variant="h3" align="center" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold"}}>Hi, I'm Branden Phan</Typography>
                        <Typography variant="h5" align="center" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", color: "#3672FF", marginTop: "2%"}}>Software Developer</Typography>
                        <Typography variant="h5" align="center" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                        <img src={profilePic} alt="ProfilePicture" />
                    </Grid>
                </Grid>


                <NavBar /> {/* MOVE THIS TO END OF DIV PROBABLY SO IT ENCOMPASSES ALL ELEMENTS */}
                <p style={{position: "absolute", bottom: "10px", fontFamily: "Source Sans Pro"}}>hi</p>
            </div>
        </div>
    )
};

export default Temp;