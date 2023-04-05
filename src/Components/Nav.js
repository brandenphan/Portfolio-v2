import styled from "styled-components"
import { Scroll } from "react-fns";

const Nav = () => (
    <Scroll render={({y}) => (
        <NavContainer style={{marginTop: y !== 0 && "20px"}}>
            <NavBar style={{height: y > 0 ? "70px" : "80px", borderRadius: y !== 0 ? "30px" : "0px 0px 30px 30px", boxShadow: y !== 0 ? "0px 4px 6px 2px rgba(0,0,0,0.25)" : "0px 8px 10px 0px rgba(0,0,0,0.25)"}}>
                <StyledAnchor href="#Home">
                    <Button style={{position: "absolute", left: "30px"}}>Branden Phan</Button>
                </StyledAnchor>
                <Button type="button" onClick="location.href='https://google.com';">Home</Button>
                <Button>Education</Button>
                <Button>Work</Button>
                {/* <Button>Projects</Button> */}
                <ContactButton>Contact</ContactButton>
            </NavBar>
        </NavContainer>
    )} />
);

export default Nav;

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.2s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
`;

const NavBar = styled.div`
    position: relative;
    background-color: black;
    width: 80vw;
    transition: 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAnchor = styled.a`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-family: Nunito;
    font-weight: bold;
    padding: 10px 15px 10px 15px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.2s linear;
    
    &:hover {
        background-color: #848484;
        cursor: pointer;
    }

    &:active {
        transition: 0s;
        background-color: #6A6A6A;
    }
`;

const ContactButton = styled.button`
    background-color: #3672FF;
    border: none;
    padding: 10px 25px 10px 25px;
    font-family: Nunito;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    border-radius: 30px;
    position: absolute;
    right: 50px;
    transition: 0.2s linear;
    
    &:hover {
        cursor: pointer;
        background-color: #6492FF;
    }

    &:active {
        transition: 0s linear;
        background-color: #3D74F4;
    }
`;