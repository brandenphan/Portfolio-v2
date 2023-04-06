import styled from "styled-components";
import Home6 from "../Images/home6.jpg";
import Home7 from "../Images/home7.jpg";
import transcript from '../Images/transcript.pdf';
import { useWidth } from "../Context/WidthContext";

const Education = () => {
    const { width } = useWidth();

    return (
        width > 800 ?
            <Container>
                <GreenBackground />
                <EducationContainer>
                    <LeftContainer>
                        <InformationContainer style={{height: "100px", borderRadius: "30px 0px 0px 0px"}}>
                            <Text style={{fontSize: width > 1000 ? "1.8rem" : "1.6rem", fontWeight: "bold"}}>Education</Text>
                        </InformationContainer>
                        <InformationContainer style={{marginTop: "20px", height: "100px"}}>
                            <Text style={{fontSize: width > 1000 ? "1.2rem" : "1rem"}}>Sep 2019 - Present</Text>
                        </InformationContainer>
                        <InformationContainer style={{marginTop: "20px", height: "100px"}}>
                            <Text style={{fontSize: "1.2rem"}}>Bachelor of Computing</Text>
                        </InformationContainer>
                        <InformationContainer style={{marginTop: "20px", height: "200px", flexDirection: "column"}}>
                            <Text style={{fontSize: width > 1000 ? "1.1rem" : "0.9rem", margin: "0"}}>• Major in Computer Science</Text>
                            <Text style={{fontSize: width > 1000 ? "1.1rem" : "0.9rem", margin: "0", marginTop: "7px"}}>• Minor in Business</Text>
                            <Text style={{fontSize: width > 1000 ? "1.1rem" : "0.9rem", margin: "0", marginTop: "7px"}}>• 4.0 GPA (88%)</Text>
                            <Text style={{fontSize: width > 1000 ? "1.1rem" : "0.9rem", margin: "0", marginTop: "7px"}}>• Dean's List: 2019 - 2022</Text>
                        </InformationContainer>
                        <StyledAnchor href={transcript} target="_blank">
                            <Button>
                                <ButtonText>Transcript</ButtonText>
                            </Button>
                        </StyledAnchor>
                        <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml" target="_blank">
                            <Button style={{borderRadius: "0px 0px 0px 30px"}}>
                                <ButtonText>Degree Schedule</ButtonText>
                            </Button>
                        </StyledAnchor>
                    </LeftContainer>
                    <RightContainer>
                        <div style={{width: width > 800 ? "300px" : "250px", height: "500px", borderRadius: "0px 30px 0px 0px"}}>
                            <img src={Home6} alt="Home6" height="500px" width="300px" style={{borderRadius: "0px 30px 0px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}} />
                        </div>
                        <div style={{width: width > 800 ? "300px" : "250px", marginTop: "20px", height: "280px", borderRadius: "0px 0px 30px 0px"}}>
                            <img src={Home7} alt="Home7" height="280px" width="300px" style={{borderRadius: "0px 0px 30px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}} />
                        </div>
                    </RightContainer>
                </EducationContainer>
            </Container>
        :
            <Container>
                <GreenBackground />
                <div style={{position: "absolute", top: "0", width: "100vw"}}>
                    <div style={{width: "100vw", display: "flex", justifyContent: "center"}}>
                        <div style={{width: "100%", height: "100px", backgroundColor: "#62a5e0", marginLeft: "20px", marginRight: "10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "30px 0px 0px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}}>
                            <Text style={{fontSize: "1.6rem", fontWeight: width > 600 ? "bold" : "", paddingLeft: "5px", paddingRight: "5px"}}>Education</Text>
                        </div>
                        <div style={{width: "100%", height: "100px", backgroundColor: "#62a5e0", marginRight: "20px", marginLeft: "10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 30px 0px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}}>
                            <Text style={{fontSize: "1rem", paddingLeft: "5px", paddingRight: "5px"}}>Sep 2019 - Present</Text>
                        </div>
                    </div>
                    <div style={{width: "100vw", display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <div style={{width: "100%", height: "340px", marginLeft: "20px", backgroundColor: "transparent", marginRight: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "0px 0px 0px 0px"}}>
                            <div style={{width: "100%", height: "100px", backgroundColor: "#62a5e0", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Text style={{fontSize: "1rem", paddingLeft: "5px", paddingRight: "5px"}}>Bachelor of Computing</Text>
                            </div>
                            <div style={{width: "100%", height: "100px", backgroundColor: "#62a5e0", marginTop: "20px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <StyledAnchor style={{width: "100%", height: "100%", paddingLeft: "5px", paddingRight: "5px"}} href={transcript} target="_blank">
                                    <MobileButton>
                                        <ButtonText>Transcript</ButtonText>
                                    </MobileButton>
                                </StyledAnchor>
                            </div>
                            <div style={{width: "100%", height: "100px", backgroundColor: "#62a5e0", marginTop: "20px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <StyledAnchor style={{width: "100%", height: "100%", paddingLeft: "5px", paddingRight: "5px"}} href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml" target="_blank">
                                    <MobileButton>
                                        <ButtonText>Degree Schedule</ButtonText>
                                    </MobileButton>
                                </StyledAnchor>
                            </div>
                        </div>
                        <div style={{width: "100%", height: "340px", marginRight: "20px", backgroundColor: "transparent", marginLeft: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "0px 0px 0px 0px"}}>
                            <div style={{width: "100%", height: "160px", backgroundColor: "#62a5e0", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                                <Text style={{fontSize: "0.9rem", margin: "0", paddingLeft: "5px", paddingRight: "5px"}}>• Major in Computer Science</Text>
                                <Text style={{fontSize: "0.9rem", margin: "0", marginTop: "7px", paddingLeft: "5px", paddingRight: "5px"}}>• Minor in Business</Text>
                            </div>
                            <div style={{width: "100%", height: "160px", backgroundColor: "#62a5e0", marginTop: "20px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                                <Text style={{fontSize: "0.9rem", margin: "0", paddingLeft: "5px", paddingRight: "5px"}}>• 4.0 GPA (88%)</Text>
                                <Text style={{fontSize: "0.9rem", margin: "0", marginTop: "7px", paddingLeft: "5px", paddingRight: "5px"}}>• Dean's List: 2019 - 2022</Text>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "20px", display: "flex", justifyContent: "center", paddingLeft: "20px", paddingRight: "20px"}}>
                        <img src={Home7} alt="" height={width > 700 ? "500px" : width > 600 ? "450px" : width > 500 ? "400px" : width > 400 ? "350px" : "320px"} width="100%" style={{boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", borderRadius: "0px 0px 30px 30px"}} />
                    </div>
                </div>
            </Container>
    )
};

export default Education;

const Text = styled.p`
    font-family: Nunito;
    color: white;
    text-align: center;
`;

const Container = styled.div`
    margin-top: 180px;
    display: flex;
    justify-content: center;
    width: 100vw;
    position: relative;
    height: 1000px;

    @media (max-width: 800px) {
        flex-direction: column;
        height: 1200px;
    }

    @media (max-width: 700px) {
        height: 1150px;
    }

    @media (max-width: 600px) {
        height: 1100px;
    }

    @media (max-width: 500px) {
        height: 1050px;
    }

    @media (max-width: 400px) {
        height: 1020px;
    }
`;

const GreenBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 640px;
    margin-top: 80px;
    background-color: #D7FFDF;
    box-shadow: 0 0 5px 10px #D7FFDF;

    @media (max-width: 800px) {
        height: 820px;
    }

    @media (max-width: 700px) {
        height: 770px;
    }

    @media (max-width: 600px) {
        height: 720px;
    }

    @media (max-width: 500px) {
        height: 670px;
    }

    @media (max-width: 400px) {
        height: 640px;
    }
`;

const EducationContainer = styled.div`
    width: 75vw;
    position: absolute;
    display: flex;
    justify-content: center;
`;

const LeftContainer = styled.div`
    width: 300px;
    height: 800px;
    border-radius: 30px 0px 0px 30px;
    margin-left: 10px;
    margin-right: 10px
`;

const RightContainer = styled.div`
    width: 300px;
    height: 800px;
    border-radius: 0px 30px 0px 0px;
    margin-left: 10px;
    margin-right: 10px
`;

const InformationContainer = styled.div`
    width: 300px;
    background-color: #62a5e0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.25);

    @media (max-width: 700px) {
        width: 250px;
    }

    @media (max-width: 600px) {
        width: 200px
    }

    @media (max-width: 500px) {
        width: 160px;
    }
`;

const StyledAnchor = styled.a`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const Button = styled.button`
    width: 300px;
    height: 100px;
    border: none;
    margin-top: 20px;
    background-color: #62a5e0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.25);
    transition: 0.2s linear;

    &:hover {
        cursor: pointer;
        background-color: #58A8EC;
    }

    &:active {
        transition: 0s;
        background-color: #49A0EA;
    }

    @media (max-width: 700px) {
        width: 250px;
    }

    @media (max-width: 600px) {
        width: 200px
    }

    @media (max-width: 500px) {
        width: 160px;
    }
`;

const ButtonText = styled.p`
    font-size: 1.2rem;
    font-family: Nunito;
    font-weight: bold;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-weight: normal;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

const MobileButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.2s linear;

    &:hover {
        cursor: pointer;
        background-color: #58A8EC;
    }

    &:active {
        transition: 0s;
        background-color: #49A0EA;
    }
`;