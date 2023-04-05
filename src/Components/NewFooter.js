import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Tooltip } from "@mui/material";
import styled from "styled-components";

const NewFooter = () => (
    <div style={{marginTop: "350px", width: "100vw", display: "flex", justifyContent: "center"}}>
        <div style={{height: "400px", width: "70vw", borderRadius: "30px 30px 0px 0px", backgroundColor: "#3F3F3F", display: "flex", justifyContent: "center"}}>
            <div>
                <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginTop: "65px", textAlign: "center"}}>Contact</p>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Tooltip title="Github" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <Button>
                            <GitHubIcon sx={{color: "white", height: "25px", width: "25px"}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Email" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <Button>
                            <EmailIcon sx={{color: "white", height: "25px", width: "25px"}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <Button>
                            <LinkedInIcon sx={{color: "white", height: "25px", width: "25px"}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Resume" placement="top" componentsProps={{tooltip: {sx: {backgroundColor: "white", color: "black", border: "1px solid #D7D6D6", fontFamily: "Source Sans Pro", fontWeight: "bold", fontSize: "20px"}}}}>
                        <Button>
                            <HistoryEduIcon sx={{color: "white", height: "25px", width: "25px"}} />
                        </Button>
                    </Tooltip>
                </div>
                <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1rem", color: "white", marginTop: "110px", textAlign: "center"}}>Designed by Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1rem", color: "white", textAlign: "center"}}>Copyright © 2022 - All Rights Reserved.</p>
            </div>
        </div>
    </div>
);

export default NewFooter;

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
    }

    &:active {
        transition: 0s;
        background-color: #2B67F2;
    }
`;