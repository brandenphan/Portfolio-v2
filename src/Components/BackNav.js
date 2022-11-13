import React from "react";
import { Link } from "react-router-dom";
import { useWidth } from "../Context/WidthContext";
import { Box, Toolbar, AppBar, Button, Grid } from "@mui/material";
import { Scroll } from "react-fns";
import WestIcon from '@mui/icons-material/West';

const BackNav = () => {
    const { width } = useWidth();

    return (
        <Scroll render={({ y }) => (
            <Box sx={{flexGrow: 1, position: "fixed", top: "0", left: "0", width: "100%", transition: "0.3s", marginTop: y === 0 ? "1%" : "0%"}}>
                <AppBar position="static" sx={{transition: "0.3s", backgroundColor: y === 0 ? "transparent" : "rgba(219, 235, 255, 0.2)", boxShadow: y === 0 && "none", backdropFilter: y > 0 && "blur(3px)"}}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={12}>
                                <Button component={Link} to="/" sx={{fontFamily: "Nunito", fontSize: width > 1000 ? "22px" : "16px", fontWeight: "bold", color: "#3672FF", marginLeft: width > 1000 ? "100px" : "", textTransform: "none"}}>
                                    <WestIcon sx={{marginRight: "8px"}} />
                                    Back
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        )} />
    )
};

export default BackNav;