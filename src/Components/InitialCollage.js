import styled from "styled-components";
import Home1 from "../Images/home1.png";
import Home2 from "../Images/home2.png";
import Home3 from "../Images/home3.png";
import Home4 from "../Images/home4.png";
import Home5 from "../Images/home5.png";
import { useWidth } from "../Context/WidthContext";

const InitialCollage = () => {
    const { width } = useWidth();

    return (
        <>
            {width > 1000 ?
                <>
                    <Container style={{marginTop: "105px"}}>
                        <ImageContainer style={{width: width > 1600 ? "690px" : width > 1300 ? "590px" : "490px", borderRadius: "30px 0px 0px 0px"}}>
                            <img src={Home1} alt="HomeImage1" height="100%" width="100%" style={{borderRadius: "30px 0px 0px 0px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 1600 ? "350px" : width > 1300 ? "250px" : "150px"}}>
                            <img src={Home4} alt="HomeImage4" height="100%" width="100%" />
                        </ImageContainer>
                        <ImageContainer style={{width: width > 1600 ? "350px" : width > 1300 ? "250px" : "150px", borderRadius: "0px 30px 0px 0px"}}>
                            <img src={Home5} alt="HomeImage5" height="100%" width="100%" style={{borderRadius: "0px 30px 0px 0px"}} />
                        </ImageContainer>
                    </Container>

                    <Container style={{marginTop: "20px"}}>
                        <ImageContainer style={{width: width > 1600 ? "610px" : width > 1300 ? "460px" : "310px", borderRadius: "0px 0px 0px 30px"}}>
                            <img src={Home2} alt="HomeImage2" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 1600 ? "800px" : width > 1300 ? "650px" : "500px", borderRadius: "0px 0px 30px 0px"}}>
                            <img src={Home3} alt="HomeImage3" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px"}} />
                        </ImageContainer>
                    </Container>
                </>
            :
                <>
                    <Container style={{marginTop: "105px"}}>
                        <ImageContainer style={{width: width > 800 ? "470px" : width > 600 ? "370px" : width > 500 ? "320px" : "250px", borderRadius: "30px 0px 0px 0px"}}>
                            <img src={Home1} alt="HomeImage1" height="100%" width="100%" style={{borderRadius: "30px 0px 0px 0px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 600 ? "150px" : "100px", borderRadius: "0px 30px 0px 0px"}}>
                            <img src={Home4} alt="HomeImage4" height="100%" width="100%" style={{borderRadius: "0px 30px 0px 0px"}} />
                        </ImageContainer>
                    </Container>

                    <Container style={{marginTop: "10px"}}>
                        <ImageContainer style={{width: width > 800 ? "250px" : width > 600 ? "220px" : width > 500 ? "170px" : "150px", borderRadius: "0px 0px 0px 30px"}}>
                            <img src={Home2} alt="HomeImage2" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 800 ? "370px" : width > 600 ? "300px" : width > 500 ? "250px" : "200px", borderRadius: "0px 0px 30px 0px"}}>
                            <img src={Home3} alt="HomeImage3" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px"}} />
                        </ImageContainer>
                    </Container>
                </>  
            }

            <div id="Education" />
        </>
    )

};

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

    @media (max-width: 1600px) {
        height: 288px;
    }

    @media (max-width: 1300px) {
        height: 188px;
    }

    @media (max-width: 1000px) {
        margin-left: 5px;
        margin-right: 5px;
    }

    @media (max-width: 600px) {
        height: 138px;
    }

    @media (max-width: 500px) {
        height: 120px;
    }
`;