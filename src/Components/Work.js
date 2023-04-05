import cutsbyjzPNG from "../Images/Work/cutsbyjz/cutsbyjz.png"; 
import GuelphDenPNG from "../Images/Work/GuelphDental/GuelphDental.png";
import LotusPNG from "../Images/Work/Lotus/Lotus.png";
import styled from "styled-components";

const Work = () => (
    <div style={{marginTop: "250px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "2rem", margin: "0"}}>Work</p>
        
        <div style={{marginTop: "40px", height: "450px", width: "83vw", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 0px 30px 30px", position: "relative"}}>
            <div style={{position: "absolute", height: "480px", width: "70vw", border: "1px solid #C8C8C8", borderRadius: "0px 0px 30px 30px"}} />
            <div style={{position: "absolute"}}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                    <StyledAnchor target="_blank" href="/Cutsbyjz">
                        <Button>
                            <img src={cutsbyjzPNG} alt="CutsbyjzImage" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px", border: "1px solid #C8C8C8"}} />
                        </Button>
                    </StyledAnchor>
                    <StyledAnchor target="_blank" href="/GuelphDental">
                        <Button>
                            <img src={GuelphDenPNG} alt="GuelphDentalImage" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 0px", border: "1px solid #C8C8C8"}} />
                        </Button>
                    </StyledAnchor>
                    <StyledAnchor target="_blank" href="/Lotus">
                        <Button>
                            <img src={LotusPNG} alt="LotusImage" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px", border: "1px solid #C8C8C8"   }} />
                        </Button>
                    </StyledAnchor>
                    </div>
            </div>
        </div>
    </div>
);

export default Work;

const StyledAnchor = styled.a`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    height: 400px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s linear;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }

    &:active {
        transition: 0.1s linear;
        opacity: 90%;
    }
`;