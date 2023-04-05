import Nav from "../Components/Nav";
import InitialCollage from "../Components/InitialCollage";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import NewFooter from "../Components/NewFooter";






const Home = () => {
    return (
        <div id="Home" style={{width: "100%", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
            <div style={{marginTop: "180px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontFamily: "Nunito", fontSize: "2rem", fontWeight: "bold", margin: "0", textAlign: "center"}}>Hi I'm Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.4rem", fontWeight: "bold", color: "#3672FF", margin: "0", marginTop: "10px", textAlign: "center"}}>Software Developer</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.2rem", margin: "0", marginTop: "15px", fontWeight: "bold", textAlign: "center"}}>A fourth year computer science student studying at the University of Guelph</p>
            </div>
            <InitialCollage />
            <Education />
            <Skills />
            <Work />
            <NewFooter />
            <Nav />
        </div>
    )
};

export default Home;

