import { useWidth } from "../Context/WidthContext";
import { Box, Toolbar, AppBar, Button, Grid, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const { width } = useWidth();

    return (
        <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "1%"}}>
            <AppBar position="static" sx={{backgroundColor: "transparent", boxShadow: "none"}}> {/* BOX SHADOW ADDED WHEN SCROLLING */}
                <Toolbar>
                    <Grid container>
                        <Grid item xs={6}>
                            <IconButton sx={{fontFamily: "Source Sans Pro", fontSize: "20px", fontWeight: "bold", color: "#FBC740", marginLeft: width > 1000 ? "16%" : ""}}><i>BP</i></IconButton>
                        </Grid>
                        <Grid item xs={6} sx={{display: "flex", justifyContent: width > 1000 ? "center" : "flex-end"}}>
                            {width > 1000 ? 
                                <>
                                    <Button sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%"}}>HOME</Button>
                                    <Button sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%"}}>ABOUT</Button>
                                    <Button sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%"}}>EDUCATION</Button>
                                    <Button sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%"}}>PROJECTS</Button>
                                    <Button sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%"}}>WORK</Button>
                                </>
                            :
                                <IconButton>
                                    <MenuIcon sx={{fontSize: "32px", color: "#E60268"}} />
                                </IconButton>
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default NavBar;