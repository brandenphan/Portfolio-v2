import { useWidth } from "../Context/WidthContext";

const Skills = () => {
    const { width } = useWidth();

    return (
        width > 1500 ?
            <div style={{width: "100vw", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1C46DD", paddingTop: "100px", paddingBottom: "100px"}}>
                <div style={{width: width > 1500 ? "450px" : "400px", height: width > 1500 ? "450px" : "400px", border: "1px solid #FDE618", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#5375EE", borderRadius: "30px 30px 0px 0px"}}>
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

                <div style={{width: width > 1500 ? "450px" : "400px", height: width > 1500 ? "450px" : "400px", border: "1px solid #FDE618", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "0px 0px 30px 30px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#5375EE", borderRadius: "0px 0px 30px 30px"}}>
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

                <div style={{width: "450px", height: "450px", border: "1px solid #FDE618", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#5375EE", borderRadius: "30px 30px 0px 0px"}}>
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

                <div id="Work" style={{marginTop: "700px"}} />
            </div>
        :
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{backgroundColor: "#3e50b5", width: width > 1100 ? "1000px" : width > 900 ? "800px" : width > 600 ? "500px" : width > 450 ? "400px" : "350px", borderRadius: "30px", paddingTop: "40px", paddingBottom: "40px"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0"}}>Languages</p>
                        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                            <div style={{marginTop: "20px", display: "flex", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>TypeScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>JavaScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>HTML</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>CSS</p>
                                </div>
                            </div>
                            <div style={{marginTop: "20px", display: "flex", justifyContent: "center", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>C</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Java</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Python</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0", marginTop: "40px"}}>Skills</p>
                        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                            <div style={{marginTop: "20px", display: "flex", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>React</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Gatsby</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>NextJS</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>GraphQL</p>
                                </div>
                            </div>
                            <div style={{marginTop: "20px", display: "flex", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Node</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Express</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>MySQL</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Mongo</p>
                                </div>
                            </div>
                            <div style={{marginTop: "20px", display: "flex", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Firebase</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Git</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Heroku</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", margin: "0", marginTop: "40px"}}>Languages</p>
                        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                            <div style={{marginTop: "20px", display: "flex", flexDirection: "row"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Figma</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: width > 600 ? "100px" : "70px", height: "50px", borderRadius: "20px", backgroundColor: "#FDE618", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: width > 600 ? "1rem" : "0.8rem", fontWeight: "bold"}}>Gimp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Skills;