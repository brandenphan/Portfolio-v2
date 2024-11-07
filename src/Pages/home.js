import Nav from "../Components/Nav";
import InitialCollage from "../Components/InitialCollage";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import NewFooter from "../Components/NewFooter";
import { useWidth } from "../Context/WidthContext";

const Home = () => {
    const { width } = useWidth();

    return (
        <div id="Home" style={{width: "100%", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
            <div style={{marginTop: "180px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontFamily: "Nunito", fontSize: width > 1400 ? "2rem" : "1.6rem", fontWeight: width > 600 ? "bold" : "", margin: "0", textAlign: "center"}}>Hi I'm Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontSize: width > 1400 ? "1.4rem" : "1rem", fontWeight: width > 600 ? "bold" : "", color: "#3672FF", margin: "0", marginTop: "10px", textAlign: "center"}}>Software Developer</p>
                {width > 600 ?
                    <p style={{fontFamily: "Nunito", fontSize: width > 1400 ? "1.2rem" : "0.8rem", margin: "0", marginTop: "15px", textAlign: "center"}}>University of Guelph Computer Science Alumni</p>
                :
                    <p style={{fontFamily: "Nunito", fontSize: width > 1400 ? "1.2rem" : "0.8rem", margin: "0", marginTop: "15px", textAlign: "center"}}>University of Guelph Computer Science Alumni</p>
                }
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