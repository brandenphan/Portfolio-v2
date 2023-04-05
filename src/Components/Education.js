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
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <InformationContainer style={{height: "100px", borderRadius: "30px 0px 0px 0px", marginLeft: "10px", marginRight: "10px"}}>
                            <Text style={{fontSize: width > 1000 ? "1.8rem" : width > 500 ? "1.6rem" : "1.4rem", fontWeight: "bold"}}>Education</Text>
                        </InformationContainer>
                        <InformationContainer style={{height: "100px", borderRadius: "0px 30px 0px 0px", marginLeft: "10px", marginRight: "10px"}}>
                            <Text style={{fontSize: width > 1000 ? "1.2rem" : width > 500 ? "1rem" : "0.8rem"}}>Sep 2019 - Present</Text>
                        </InformationContainer>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <div>
                            <InformationContainer style={{height: "100px", borderRadius: "0px 0px 0px 0px", marginLeft: "10px", marginRight: "10px"}}>
                                <Text style={{fontSize: width > 1000 ? "1.2rem" : width > 500 ? "1rem" : "0.8rem"}}>Bachelor of Computing</Text>
                            </InformationContainer>
                            <StyledAnchor href={transcript} target="_blank">
                                <Button>
                                    <ButtonText>Transcript</ButtonText>
                                </Button>
                            </StyledAnchor>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml" target="_blank">
                                <Button style={{borderRadius: "0px 0px 0px 0px"}}>
                                    <ButtonText>Degree Schedule</ButtonText>
                                </Button>
                            </StyledAnchor>
                        </div>
                        <div>
                            <InformationContainer style={{height: "160px", flexDirection: "column", marginLeft: "10px", marginRight: "10px"}}>
                                <Text style={{fontSize: width > 1000 ? "1.1rem" : width > 500 ? "0.9rem" : "0.7rem", margin: "0"}}>• Major in Computer Science</Text>
                                <Text style={{fontSize: width > 1000 ? "1.1rem" : width > 500 ? "0.9rem" : "0.7rem", margin: "0", marginTop: "7px"}}>• Minor in Business</Text>
                            </InformationContainer> 
                            <InformationContainer style={{marginTop: "20px", height: "160px", flexDirection: "column", marginLeft: "10px", marginRight: "10px"}}>
                                <Text style={{fontSize: width > 1000 ? "1.1rem" : width > 500 ? "0.9rem" : "0.7rem", margin: "0", marginTop: "7px"}}>• 4.0 GPA (88%)</Text>
                                <Text style={{fontSize: width > 1000 ? "1.1rem" : width > 500 ? "0.9rem" : "0.7rem", margin: "0", marginTop: "7px"}}>• Dean's List: 2019 - 2022</Text>
                            </InformationContainer>
                        </div>
                    </div>
                    <div style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                        <img src={Home7} alt="" height={width > 700 ? "600px" : width > 600 ? "500px" : width > 500 ? "450px" : "350px"} width={width > 700 ? "620px" : width > 600 ? "520px" : width > 500 ? "420px" : "340px"} style={{boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)", borderRadius: "0px 0px 30px 30px"}} />
                    </div>
                </div>
            </Container>
    )
};

export default Education;

const Text = styled.p`
    font-family: Nunito;
    color: white;
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

    @media (max-width: 600px) {
        height: 1100px;
    }

    @media (max-width: 500px) {
        height: 1000px;
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
        height: 830px;
    }

    @media (max-width: 700px) {
        height: 760px;
    }

    @media (max-width: 500px) {
        height: 680px;
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
    background-color: #3591df;
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
    background-color: #3591df;
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
        background-color: #1A87E2;
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

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;