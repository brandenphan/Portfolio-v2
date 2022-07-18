import React from "react";
import { useWidth } from "../Context/WidthContext";
import { Box, Toolbar, AppBar, Button, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Scroll } from "react-fns";


const NavBar = () => {
    const { width } = useWidth();

    const [menuElement, setMenuElement] = React.useState(null);
    const open = Boolean(menuElement);

    const handleClick = (event) => {
        setMenuElement(event.currentTarget);
    };
    const handleClose = () => {
        setMenuElement(null);
    };


    return (
        <Scroll render={({ y }) => (
            <Box sx={{flexGrow: 1, position: "fixed", top: "0", left: "0", width: "100%", transition: "0.3s", marginTop: y === 0 ? "1%" : "0%"}}>
                <AppBar position="static" sx={{transition: "0.3s", backgroundColor: y === 0 ? "transparent" : "rgba(219, 235, 255, 0.2)", boxShadow: y === 0 && "none", backdropFilter: y > 0 && "blur(3px)"}}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={6}>
                                <IconButton href="#Home" sx={{fontFamily: "Source Sans Pro", fontSize: "20px", fontWeight: "bold", color: "#FBC740", marginLeft: width > 1000 ? "16%" : "", "&:hover": {backgroundColor: "transparent"}}}><i>BP</i></IconButton>
                            </Grid>
                            <Grid item xs={6} sx={{display: "flex", justifyContent: width > 1000 ? "center" : "flex-end"}}>
                                {width > 1000 ? 
                                    <>
                                        <Button href="#Home" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%", transition: "0.3s", "&:hover": {color: "#FBC740", backgroundColor: "transparent"}}}>HOME</Button>
                                        <Button href="#Education" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%", transition: "0.3s", "&:hover": {color: "#FBC740", backgroundColor: "transparent"}}}>EDUCATION</Button>
                                        <Button href="#Projects" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%", transition: "0.3s", "&:hover": {color: "#FBC740", backgroundColor: "transparent"}}}>PROJECTS</Button>
                                        <Button href="#Work" sx={{fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "16px", color: "#3672FF", marginLeft: "4%", transition: "0.3s", "&:hover": {color: "#FBC740", backgroundColor: "transparent"}}}>WORK</Button>
                                    </>
                                :
                                    <>
                                        <IconButton onClick={handleClick}>
                                            <MenuIcon sx={{fontSize: "32px", color: "#E60268"}} />
                                        </IconButton>
                                        <Menu anchorEl={menuElement} open={open} onClose={handleClose}>
                                            <MenuItem onClick={handleClose}>
                                                <a href="#Home" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Home
                                                </a>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <a href="#Education" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Education
                                                </a>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <a href="#Projects" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Projects
                                                </a>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <a href="#Work" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Work
                                                </a>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        )} />
    )
};

export default NavBar;