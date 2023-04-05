import cutsbyjzPNG from "../Images/Work/cutsbyjz/cutsbyjz.png"; 
import GuelphDenPNG from "../Images/Work/GuelphDental/GuelphDental.png";
import LotusPNG from "../Images/Work/Lotus/Lotus.png";
import styled from "styled-components";

const Work = () => (
    <div style={{marginTop: "300px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "2rem", margin: 0}}>Work</p>
        
        <div style={{height: "450px", width: "80vw", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "30px"}}>
            <div style={{height: "500px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                <div style={{height: "100px", width: "200px", border: "1px solid grey", position: "absolute", top: "0",  borderRadius: "30px"}} />
                <Button>
                    <img src={cutsbyjzPNG} alt="CutsbyjzImage" height="100%" width="100%" style={{marginLeft: "15px", marginRight: "15px", borderRadius: "0px 0px 30px 30px", position: "absolute"}} />
                </Button>
            </div>
            <div style={{height: "500px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                <div style={{height: "100px", width: "200px", border: "1px solid grey", position: "absolute", bottom: "0",  borderRadius: "30px"}} />
                <Button2>
                    <img src={GuelphDenPNG} alt="GuelphDentalImage" height="100%" width="100%" style={{marginLeft: "15px", marginRight: "15px", borderRadius: "30px 30px 0px 0px", position: "absolute"}} />
                </Button2>
            </div>
            <div style={{height: "500px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                <div style={{height: "100px", width: "200px", border: "1px solid grey", position: "absolute", top: "0",  borderRadius: "30px"}} />
                <Button>
                    <img src={LotusPNG} alt="LotusImage" height="100%" width="100%" style={{marginLeft: "15px", marginRight: "15px", borderRadius: "0px 0px 30px 30px", position: "absolute"}} />
                </Button>
            </div>
        </div>
    </div>
);

export default Work;


const Button = styled.button`
    border: none;
    background-color: transparent;
    height: 350px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s linear;

    &:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }

    &:active {
        transition: 0.1s linear;
        opacity: 90%;
    }
`;

const Button2 = styled.button`
    border: none;
    background-color: transparent;
    height: 350px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s linear;

    &:hover {
        transform: translateY(2px);
        cursor: pointer;
    }

    &:active {
        transition: 0.1s linear;
        opacity: 90%;
    }
`;