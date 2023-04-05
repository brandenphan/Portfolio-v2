import styled from "styled-components";
import Home6 from "../Images/home6.jpg";
import Home7 from "../Images/home7.jpg";

const Education = () => (
    <Container>
        <GreenBackground />
            
        <EducationContainer>
            <LeftContainer>
                <InformationContainer style={{height: "100px", borderRadius: "30px 0px 0px 0px"}}>
                    <Text style={{fontSize: "1.8rem", fontWeight: "bold"}}>Education</Text>
                </InformationContainer>
                <InformationContainer style={{marginTop: "20px", height: "100px"}}>
                    <Text style={{fontSize: "1.2rem"}}>Sep 2019 - Present</Text>
                </InformationContainer>
                <InformationContainer style={{marginTop: "20px", height: "100px"}}>
                    <Text style={{fontSize: "1.2rem"}}>Bachelor of Computing</Text>
                </InformationContainer>
                <InformationContainer style={{marginTop: "20px", height: "200px", flexDirection: "column"}}>
                    <Text style={{fontSize: "1.1rem", margin: "0"}}>• Major in Computer Science</Text>
                    <Text style={{fontSize: "1.1rem", margin: "0", marginTop: "7px"}}>• Minor in Business</Text>
                    <Text style={{fontSize: "1.1rem", margin: "0", marginTop: "7px"}}>• 4.0 GPA (88%)</Text>
                    <Text style={{fontSize: "1.1rem", margin: "0", marginTop: "7px"}}>• Dean's List: 2019 - 2022</Text>
                </InformationContainer>
                <Button>
                    <ButtonText>Transcript</ButtonText>
                </Button>
                <Button style={{borderRadius: "0px 0px 0px 30px"}}>
                    <ButtonText>Degree Schedule</ButtonText>
                </Button>
            </LeftContainer>
            <RightContainer>
                <div style={{width: "300px", height: "500px", borderRadius: "0px 30px 0px 0px"}}>
                    <img src={Home6} alt="Home6" height="500px" width="300px" style={{borderRadius: "0px 30px 0px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}} />
                </div>
                <div style={{width: "300px", marginTop: "20px", height: "280px", borderRadius: "0px 0px 30px 0px"}}>
                    <img src={Home7} alt="Home7" height="280px" width="300px" style={{borderRadius: "0px 0px 30px 0px", boxShadow: "0px 6px 8px 0px rgba(0,0,0,0.25)"}} />
                </div>
            </RightContainer>
        </EducationContainer>

    </Container>
);

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
`;

const GreenBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 640px;
    margin-top: 80px;
    background-color: #D7FFDF;
    box-shadow: 0 0 5px 10px #D7FFDF;
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
`;

const ButtonText = styled.p`
    font-size: 1.2rem;
    font-family: Nunito;
    font-weight: bold;
    color: white;
`;