import Nav from "../Components/Nav";
import InitialCollage from "../Components/InitialCollage";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Work from "../Components/Work";


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { IconButton } from "@mui/material";
import styled from "styled-components";

// import styled from "styled-components";

// import styled from "styled-components";

const Home = () => {
    return (
        <div style={{width: "100%", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>


            <div style={{marginTop: "180px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontFamily: "Nunito", fontSize: "2rem", fontWeight: "bold", margin: "0", textAlign: "center"}}>Hi I'm Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.4rem", fontWeight: "bold", color: "#3672FF", margin: "0", marginTop: "10px", textAlign: "center"}}>Software Developer</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.2rem", margin: "0", marginTop: "15px", fontWeight: "bold", textAlign: "center"}}>A fourth year computer science student studying at the University of Guelph</p>
            </div>


            <InitialCollage />
            
            <Education />
            <Skills />
            <Work />

    
            <div style={{marginTop: "500px", width: "100vw", display: "flex", justifyContent: "center"}}>
                <div style={{height: "400px", width: "70vw", borderRadius: "30px 30px 0px 0px", backgroundColor: "#3F3F3F", display: "flex", justifyContent: "center"}}>
                    <div>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginTop: "65px", textAlign: "center"}}>Contact</p>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Button>
                                <GitHubIcon sx={{color: "white", height: "25px", width: "25px"}} />
                            </Button>
                            <Button>
                                <EmailIcon sx={{color: "white", height: "25px", width: "25px"}} />
                            </Button>
                            <Button>
                                <LinkedInIcon sx={{color: "white", height: "25px", width: "25px"}} />
                            </Button>
                            <Button>
                                <HistoryEduIcon sx={{color: "white", height: "25px", width: "25px"}} />
                            </Button>
                        </div>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1rem", color: "white", marginTop: "100px", textAlign: "center"}}>Designed by Branden Phan</p>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1rem", color: "white", textAlign: "center"}}>Copyright © 2022 - All Rights Reserved.</p>
                        
                    </div>
                </div>
            </div>

            


        

           


            {/* <div style={{height: "400vh"}} /> */}

            <Nav />

        </div>
    )
};

export default Home;

const Button = styled.button`
    border: none;
    background-color: #3672FF;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.2s linear;

    &:hover {
        background-color: #5C8DFF;
    }

    &:active {
        transition: 0s;
        background-color: #2B67F2;
    }

`;