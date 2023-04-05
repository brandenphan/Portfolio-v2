import styled from "styled-components";
import Home1 from "../Images/home1.png";
import Home2 from "../Images/home2.png";
import Home3 from "../Images/home3.png";
import Home4 from "../Images/home4.png";
import Home5 from "../Images/home5.png";
import Home8 from "../Images/home8.png";
import Home9 from "../Images/home9.png";
import Home10 from "../Images/home10.png";
import Home11 from "../Images/home11.png";

import { useWidth } from "../Context/WidthContext";

const InitialCollage = () => {
    const { width } = useWidth();

    return (
        <>
            {width > 900 ?
                <>
                    <Container style={{marginTop: "105px"}}>
                        <ImageContainer style={{width: width > 1600 ? "690px" : width > 1300 ? "590px" : "400px", borderRadius: "30px 0px 0px 0px"}}>
                            <img src={Home1} alt="HomeImage1" height="100%" width="100%" style={{borderRadius: "30px 0px 0px 0px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 1600 ? "350px" : width > 1300 ? "250px" : "195px"}}>
                            <img src={Home4} alt="HomeImage4" height="100%" width="100%" />
                        </ImageContainer>
                        <ImageContainer style={{width: width > 1600 ? "350px" : width > 1300 ? "250px" : "195px", borderRadius: "0px 30px 0px 0px"}}>
                            <img src={Home5} alt="HomeImage5" height="100%" width="100%" style={{borderRadius: "0px 30px 0px 0px"}} />
                        </ImageContainer>
                    </Container>

                    <Container style={{marginTop: width > 1000 ? "20px" : "10px"}}>
                        <ImageContainer style={{width: width > 1600 ? "610px" : width > 1300 ? "460px" : width > 1000 ? "320px" : "310px", borderRadius: "0px 0px 0px 30px"}}>
                            <img src={Home2} alt="HomeImage2" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px"}} />
                        </ImageContainer>

                        <ImageContainer style={{width: width > 1600 ? "802px" : width > 1300 ? "652px" : "492px", borderRadius: "0px 0px 30px 0px"}}>
                            <img src={Home3} alt="HomeImage3" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px"}} />
                        </ImageContainer>
                    </Container>
                </>
            : width > 600 ?
                <div style={{marginTop: "105px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={Home8} alt="HomeImage8" height="50%" width="50%" style={{borderRadius: "30px 0px 0px 0px", marginRight: "5px", border: "1px solid #C8C8C8"}} />
                        <img src={Home9} alt="HomeImage9" height="50%" width="50%" style={{borderRadius: "0px 30px 0px 0px", marginLeft: "5px", border: "1px solid #C8C8C8"}} />
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                        <img src={Home10} alt="HomeImage10" height="50%" width="50%" style={{borderRadius: "0px 0px 0px 30px", marginRight: "5px", border: "1px solid #C8C8C8"}} />
                        <img src={Home11} alt="HomeImage11" height="50%" width="50%" style={{borderRadius: "0px 0px 30px 0px", marginLeft: "5px", border: "1px solid #C8C8C8"}} />
                    </div>
                </div>
            :
                <div style={{marginTop: "105px", paddingLeft: width > 500 ? "40px" : "20px", paddingRight: width > 500 ? "40px" : "20px"}}>
                    <img src={Home8} alt="HomeImage8" height="100%" width="100%" style={{borderRadius: "30px 30px 0px 0px", marginRight: "5px", border: "1px solid #C8C8C8"}} />
                    <img src={Home9} alt="HomeImage9" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 0px", marginRight: "5px", marginTop: "10px", border: "1px solid #C8C8C8"}} />
                    <img src={Home10} alt="HomeImage10" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 0px", marginRight: "5px", marginTop: "10px", border: "1px solid #C8C8C8"}} />
                    <img src={Home11} alt="HomeImage11" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 30px", marginRight: "5px", marginTop: "10px", border: "1px solid #C8C8C8"}} />
                </div>
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
        height: 110px;
    }
`;