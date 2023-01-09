import React from "react";
import { useWidth } from "../Context/WidthContext";
import { Box, Toolbar, AppBar, Button, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Scroll } from "react-fns";
import { useTheme } from "../Context/ThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = () => {
    const { width } = useWidth();
    const { theme, ChangeLight, ChangeDark } = useTheme();

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
                            <Grid item xs={width > 800 ? 6 : 9}>
                                <Button href="#Home" sx={{fontFamily: "Sacramento", fontSize: width > 1000 ? "36px" : "28px", color: theme === "light" ? "black" : "white", marginLeft: width > 1000 ? "16%" : "", textTransform: "none", paddingBottom: "0px", marginTop: "2px", transition: "0.3s", "&:hover": {backgroundColor: theme === "light" ? "#e2eafc" : "#575757"}}}>Branden Phan</Button>
                                <IconButton onClick={() => {theme === "light" ? ChangeDark() : ChangeLight()}} sx={{fontFamily: "Sacramento", fontSize: width > 1000 ? "36px" : "28px", color: theme === "light" ? "black" : "white", marginLeft: "10px", textTransform: "none"}}>
                                    {theme === "light" ? 
                                        <DarkModeIcon />
                                    :
                                        <LightModeIcon />
                                    }
                                </IconButton>
                            </Grid>
                            <Grid item xs={width > 800 ? 6 : 3} sx={{display: "flex", justifyContent: width > 1000 ? "center" : "flex-end"}}>
                                {width > 1000 ? 
                                    <>
                                        <Button href="#Home" sx={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "16px", color: theme === "light" ? "black" : "white", marginLeft: "4%", transition: "0.3s", "&:hover": {backgroundColor: theme === "light" ? "#e2eafc" : "#575757"}}}>HOME</Button>
                                        <Button href="#Education" sx={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "16px", color: theme === "light" ? "black" : "white", marginLeft: "4%", transition: "0.3s", "&:hover": {backgroundColor: theme === "light" ? "#e2eafc" : "#575757"}}}>EDUCATION</Button>
                                        <Button href="#Work" sx={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "16px", color: theme === "light" ? "black" : "white", marginLeft: "4%", transition: "0.3s", "&:hover": {backgroundColor: theme === "light" ? "#e2eafc" : "#575757"}}}>WORK</Button>
                                        <Button href="#Projects" sx={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "16px", color: theme === "light" ? "black" : "white", marginLeft: "4%", transition: "0.3s", "&:hover": {backgroundColor: theme === "light" ? "#e2eafc" : "#575757"}}}>PROJECTS</Button>
                                    </>
                                :
                                    <>
                                        <IconButton onClick={handleClick}>
                                            <MenuIcon sx={{fontSize: "32px", color: theme === "light" ? "black" : "white", transition: "0.3s"}} />
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
                                                <a href="#Work" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Work
                                                </a>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <a href="#Projects" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Source Sans Pro"}}>
                                                    Projects
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

export default Nav;