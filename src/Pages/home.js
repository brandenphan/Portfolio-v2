import Nav from "../Components/Nav";
import InitialCollage from "../Components/InitialCollage";
import Education from "../Components/Education";
import Skills from "../Components/Skills";


import cutsbyjzPNG from "../Images/Work/cutsbyjz/cutsbyjz.png"; 
import GuelphDenPNG from "../Images/Work/GuelphDental/GuelphDental.png";
import LotusPNG from "../Images/Work/Lotus/Lotus.png";
import styled from "styled-components";

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


    


            


        

           


            <div style={{height: "400vh"}} />

            <Nav />

        </div>
    )
};

export default Home;

const Button = styled.button`
    border: none;
    background-color: transparent;
    height: 350px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        transition: 0.3s linear;
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

    &:hover {
        transition: 0.3s linear;
        transform: translateY(2px);
        cursor: pointer;
    }

    &:active {
        transition: 0.1s linear;
        opacity: 90%;
    }
`;