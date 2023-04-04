import Nav from "../Components/Nav";
import InitialCollage from "../Components/InitialCollage";
import Education from "../Components/Education";


// import styled from "styled-components";

const Home = () => {
    return (
        <div style={{width: "100%", overflow: "hidden", position: "absolute", top: "0", left: "0"}}>
            {/* <Nav /> */}


            <div style={{marginTop: "180px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontFamily: "Nunito", fontSize: "2rem", fontWeight: "bold", margin: "0", textAlign: "center"}}>Hi I'm Branden Phan</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.4rem", fontWeight: "bold", color: "#3672FF", margin: "0", marginTop: "10px", textAlign: "center"}}>Software Developer</p>
                <p style={{fontFamily: "Nunito", fontSize: "1.2rem", margin: "0", marginTop: "15px", fontWeight: "bold", textAlign: "center"}}>A fourth year computer science student studying at the University of Guelph</p>
            </div>


            <InitialCollage />
            <Education />

            <div style={{width: "100vw", height: "500px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "450px", height: "450px", border: "1px solid #C8C8C8", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#3e50b5", borderRadius: "30px 30px 0px 0px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0", marginLeft: "40px", marginTop: "40px"}}>Languages</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>TypeScript</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>JavaScript</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>HTML</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>CSS</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>C</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Java</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Python</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "450px", height: "450px", border: "1px solid #C8C8C8", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "0px 0px 30px 30px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#3e50b5", borderRadius: "0px 0px 30px 30px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0", marginLeft: "40px", marginTop: "40px"}}>Skills</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>React</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gatsby</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>NextJS</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>GraphQL</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Node</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Express</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>MySQL</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Mongo</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Firebase</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Git</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Heroku</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Netlify</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "450px", height: "450px", border: "1px solid #C8C8C8", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#3e50b5", borderRadius: "30px 30px 0px 0px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0", marginLeft: "40px", marginTop: "40px"}}>Design Tools</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Figma</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gimp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            


        

           


            <div style={{height: "400vh"}} />

            <Nav />

        </div>
    )
};

export default Home;

