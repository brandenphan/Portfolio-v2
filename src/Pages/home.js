import Nav from "../Components/Nav";
// import LandingWEBP from "../Images/Landing.webp";
import Home1 from "../Images/home1.png";
import Home2 from "../Images/home2.png";
import Home3 from "../Images/home3.png";
import Home4 from "../Images/home4.png";
import Home5 from "../Images/home5.png";

const Home = () => {
    return (
        <div style={{width: "100%", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
            <Nav />


            <div style={{marginTop: "180px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontFamily: "Nunito", fontSize: "2rem", fontWeight: "bold", margin: "0", textAlign: "center"}}>Hi I'm Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.4rem", fontWeight: "bold", color: "#3672FF", margin: "0", marginTop: "10px", textAlign: "center"}}>Software Developer</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.2rem", margin: "0", marginTop: "15px", fontWeight: "bold", textAlign: "center"}}>A fourth year computer science student studying at the University of Guelph</p>
            </div>


            <div style={{marginTop: "105px", width: "100vw", display: "flex", justifyContent: "center"}}>
                <div style={{width: "690px", marginLeft: "10px", marginRight: "10px", height: "40vh", border: "1px solid #C8C8C8", borderRadius: "30px 0px 0px 0px"}}>
                    <img src={Home1} alt="" height="100%" width="100%" style={{borderRadius: "30px 0px 0px 0px"}} />
                </div>

                <div style={{width: "350px", marginLeft: "10px", marginRight: "10px", height: "40vh", border: "1px solid #C8C8C8"}}>
                    <img src={Home4} alt="" height="100%" width="100%" />

                </div>
                <div style={{width: "350px", marginLeft: "10px", marginRight: "10px", height: "40vh", border: "1px solid #C8C8C8", borderRadius: "0px 30px 0px 0px"}}>
                    <img src={Home5} alt="" height="100%" width="100%" style={{borderRadius: "0px 30px 0px 0px"}} />
                </div>
            </div>

            <div style={{marginTop: "20px", width: "100vw", display: "flex", justifyContent: "center"}}>
                <div style={{width: "610px", marginLeft: "10px", marginRight: "10px", height: "40vh", border: "1px solid #C8C8C8", borderRadius: "0px 0px 0px 30px"}}>
                <img src={Home2} alt="" height="100%" width="100%" style={{borderRadius: "0px 0px 0px 30px"}} />

                </div>

                <div style={{width: "800px", marginLeft: "10px", marginRight: "10px", height: "40vh", border: "1px solid #C8C8C8", borderRadius: "0px 0px 30px 0px"}}>
                    <img src={Home3} alt="" height="100%" width="100%" style={{borderRadius: "0px 0px 30px 0px"}} />
                
                </div>
            </div>


            <div style={{height: "400vh"}} />


        </div>
    )
};

export default Home;