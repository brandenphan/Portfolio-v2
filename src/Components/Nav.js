import styled from "styled-components"
import { Scroll } from "react-fns";
import { useWidth } from "../Context/WidthContext";
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from "@mui/material";
import React from "react";

const Nav = () => {
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
        <Scroll render={({y}) => (
            <NavContainer style={{marginTop: y !== 0 && "20px"}}>
                <NavBar style={{height: y > 0 ? "70px" : "80px", borderRadius: y !== 0 ? "30px" : "0px 0px 30px 30px", boxShadow: y !== 0 ? "0px 4px 6px 2px rgba(0,0,0,0.25)" : "0px 8px 10px 0px rgba(0,0,0,0.25)"}}>
                    <StyledAnchor href="#Home">
                        <Button style={{position: "absolute", left: width > 600 ? "30px" : "10px"}}>Branden Phan</Button>
                    </StyledAnchor>
                    {width > 1000 ?
                        <>
                            <StyledAnchor href="#Home">
                                <Button>Home</Button>
                            </StyledAnchor>
                            <StyledAnchor href="#Education">
                                <Button>Education</Button>
                            </StyledAnchor>
                            <StyledAnchor href="#Work">
                                <Button>Work</Button>
                            </StyledAnchor>
                            <StyledAnchor href="#Contact">
                                <ContactButton>Contact</ContactButton>
                            </StyledAnchor>
                        </>
                    : width > 800 ?
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", right: "30px"}}>
                            <StyledAnchor href="#Home">
                                <Button>Home</Button>
                            </StyledAnchor>
                            <StyledAnchor href="#Education">
                                <Button>Education</Button>
                            </StyledAnchor>
                            <StyledAnchor href="#Work">
                                <Button>Work</Button>
                            </StyledAnchor>
                        </div>
                    :
                        <>
                            <Button onClick={handleClick} style={{position: "absolute", right: width > 600 ? "30px" : "10px"}}>
                                <MenuIcon />
                            </Button>
                            <Menu anchorEl={menuElement} open={open} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    <a href="#Home" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Nunito"}}>
                                        Home
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#Education" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Nunito"}}>
                                        Education
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#Work" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Nunito"}}>
                                        Work
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#Contact" style={{textTransform: "none", textDecoration: "none", color: "black", fontFamily: "Nunito"}}>
                                        Contact
                                    </a>
                                </MenuItem>
                            </Menu>
                        </>
                    }
                </NavBar>
            </NavContainer>
        )} />
    )

};

export default Nav;

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.2s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
`;

const NavBar = styled.div`
    position: relative;
    background-color: black;
    width: 80vw;
    transition: 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAnchor = styled.a`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-family: Nunito;
    font-weight: bold;
    padding: 10px 15px 10px 15px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: #848484;
        cursor: pointer;
    }

    &:active {
        transition: 0s;
        background-color: #6A6A6A;
    }
`;

const ContactButton = styled.button`
    background-color: #3672FF;
    border: none;
    padding: 10px 25px 10px 25px;
    font-family: Nunito;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    border-radius: 30px;
    position: absolute;
    right: 50px;
    transition: 0.2s linear;
    
    &:hover {
        cursor: pointer;
        background-color: #6492FF;
    }

    &:active {
        transition: 0s linear;
        background-color: #3D74F4;
    }
`;