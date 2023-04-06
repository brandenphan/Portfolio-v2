import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import resume from '../Images/resume.pdf';
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import { useWidth } from "../Context/WidthContext";

const NewFooter = () => {
    const { width } = useWidth();

    return (
        width > 700 ?
            <div id="Contact" style={{marginTop: width > 1100 ? "320px" : width > 700 ? "300px" : width > 500 ? "260px" : "220px", width: "100vw", display: "flex", justifyContent: "center"}}>
                <div style={{height: "400px", width: width > 800 ? "70vw" : width > 600 ? "80vw" : width > 500 ? "85vw" : "90vw", borderRadius: "30px 30px 0px 0px", backgroundColor: "#3F3F3F", display: "flex", justifyContent: "center"}}>
                    <div>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "1.6rem", color: "white", marginTop: "65px", textAlign: "center"}}>Contact</p>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="https://github.com/brandenphan">
                                    <Button>
                                        <GitHubIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com">
                                    <Button>
                                        <EmailIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/">
                                    <Button>
                                        <LinkedInIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href={resume}>
                                    <Button>
                                        <HistoryEduIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                        </div>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "1rem", color: "white", marginTop: "110px", textAlign: "center"}}>Designed by Branden Phan</p>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "1rem", color: "white", textAlign: "center"}}>Copyright © 2022 - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        :
            <div id="Contact" style={{marginTop: width > 700 ? "280px" : width > 500 ? "240px" : "200px", width: "100%", display: "flex", justifyContent: "center"}}>
                <div style={{marginLeft: "20px", marginRight: "20px", width: "100%", height: "400px", borderRadius: "30px 30px 0px 0px", backgroundColor: "#3F3F3F", display: "flex", justifyContent: "center"}}>
                    <div>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "1.6rem", color: "white", marginTop: "65px", textAlign: "center"}}>Contact</p>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="https://github.com/brandenphan">
                                    <Button>
                                        <GitHubIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com">
                                    <Button>
                                        <EmailIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/">
                                    <Button>
                                        <LinkedInIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                            <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                                <StyledAnchor target="_blank" href={resume}>
                                    <Button>
                                        <HistoryEduIcon sx={{color: "white", height: "25px", width: "25px"}} />
                                    </Button>
                                </StyledAnchor>
                            </Tooltip>
                        </div>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "0.8rem", color: "white", marginTop: "110px", textAlign: "center",  paddingLeft: "5px", paddingRight: "5px"}}>Designed by Branden Phan</p>
                        <p style={{fontFamily: "Nunito", fontWeight: width > 600 ? "bold" : "", fontSize: "0.8rem", color: "white", textAlign: "center", paddingLeft: "5px", paddingRight: "5px"}}>Copyright © 2022 - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        
    )
};

export default NewFooter;

const StyledAnchor = styled.a`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const Button = styled.button`
    border: none;
    background-color: #3672FF;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #5C8DFF;
        cursor: pointer;
    }

    &:active {
        transition: 0s;
        background-color: #2B67F2;
    }
`;