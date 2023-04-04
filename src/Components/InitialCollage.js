import styled from "styled-components";
import Home1 from "../Images/home1.png";
import Home2 from "../Images/home2.png";
import Home3 from "../Images/home3.png";
import Home4 from "../Images/home4.png";
import Home5 from "../Images/home5.png";

const InitialCollage = () => (
    <>
        <Container style={{marginTop: "105px"}}>
            <ImageContainer style={{width: "690px", borderRadius: "30px 0px 0px 0px"}}>
                <img src={Home1} alt="HomeImage1" height="100%" width="100%" style={{borderRadius: "30px 0px 0px 0px"}} />
            </ImageContainer>

            <ImageContainer style={{width: "350px"}}>
                <img src={Home4} alt="HomeImage4" height="100%" width="100%" />

            </ImageContainer>
            <ImageContainer style={{width: "350px", borderRadius: "0px 30px 0px 0px"}}>
                <img src={Home5} alt="HomeImage5" height="100%" width="100%" style={{borderRadius: "0px 30px 0px 0px"}} />
            </ImageContainer>
        </Container>

        <Container style={{marginTop: "20px"}}>
            <ImageContainer style={{width: "610px", borderRadius: "0px 0px 0px 30px"}}>
                <img src={Home2} alt="HomeImage2" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px"}} />
            </ImageContainer>

            <ImageContainer style={{width: "800px", borderRadius: "0px 0px 30px 0px"}}>
                <img src={Home3} alt="HomeImage3" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px"}} />
            </ImageContainer>
        </Container>
    </>

);

export default InitialCollage;

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const ImageContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    height: 388px;
    border: 1px solid #C8C8C8;
`;