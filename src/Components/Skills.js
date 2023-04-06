import { useWidth } from "../Context/WidthContext";

const Skills = () => {
    const { width } = useWidth();

    return (
        width > 1500 ?
            <div style={{width: "100vw", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#d7e3fc", paddingTop: "100px", paddingBottom: "100px"}}>
                <div style={{width: width > 1500 ? "450px" : "400px", height: width > 1500 ? "450px" : "400px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginBottom: "0", marginRight: "0", marginLeft: "40px", marginTop: "40px"}}>Languages</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>TypeScript</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>JavaScript</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>HTML</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>CSS</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>C</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Java</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Python</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: width > 1500 ? "450px" : "400px", height: width > 1500 ? "450px" : "400px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "0px 0px 30px 30px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#667AEB", borderRadius: "0px 0px 30px 30px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginBottom: "0", marginRight: "0", marginLeft: "40px", marginTop: "40px"}}>Skills</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>React</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gatsby</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>NextJS</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>GraphQL</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Node</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Express</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>MySQL</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Mongo</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Firebase</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Git</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Heroku</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Netlify</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "450px", height: "450px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "400px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginBottom: "0", marginRight: "0", marginLeft: "40px", marginTop: "40px"}}>Design Tools</p>
                        <div style={{width: "400px", marginTop: "20px", marginLeft: "35px", display: "flex", flexDirection: "row"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Figma</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gimp</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Work" style={{marginTop: "700px"}} />
            </div>
        : width > 1300 ?
            <div style={{width: "100vw", height: "650px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#d7e3fc", paddingTop: "100px", paddingBottom: "100px"}}>
                <div style={{width: "400px", height: "600px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "350px", height: "550px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Languages</p>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>TypeScript</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>JavaScript</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>HTML</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>CSS</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>C</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Java</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Python</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "400px", height: "600px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "0px 0px 30px 30px"}}>
                    <div style={{width: "350px", height: "550px", backgroundColor: "#667AEB", borderRadius: "0px 0px 30px 30px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Skills</p>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>React</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gatsby</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>NextJS</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>GraphQL</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Node</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Express</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>MySQL</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Mongo</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Firebase</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Git</p>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Heroku</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Netlify</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "400px", height: "600px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "350px", height: "550px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Design Tools</p>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Figma</p>
                            </div>
                            <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gimp</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Work" style={{marginTop: "700px"}} />
            </div>
        : width > 700 ?
            <div style={{width: "100vw", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#d7e3fc", paddingTop: "100px", paddingBottom: "100px"}}>
                <div style={{width: "450px", height: "400px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "30px 30px 0px 0px"}}>
                    <div style={{width: "400px", height: "350px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Languages</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>TypeScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>JavaScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>HTML</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>HTML</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>CSS</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>C</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>Python</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: "bold"}}>Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "20px", width: "450px", height: "470px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px"}}>
                    <div style={{width: "400px", height: "420px", backgroundColor: "#667AEB", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Skills</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>React</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gatsby</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>NextJS</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>GraphQL</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Node</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Express</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>MySQL</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Mongo</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Git</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Heroku</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "20px", width: "450px", height: "260px", border: "1px solid #667AEB", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", marginRight: "10px", borderRadius: "0px 0px 30px 30px"}}>
                    <div style={{width: "400px", height: "210px", backgroundColor: "#667AEB", borderRadius: "0px 0px 30px 30px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontWeight: "bold", fontSize: "1.6rem", color: "white", marginLeft: "0", marginRight: "0", marginBottom: "0", marginTop: "40px"}}>Design Tools</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Figma</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "1rem", fontWeight: "bold"}}>Gimp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="Work" />
            </div>
        :
            <div style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#d7e3fc", paddingTop: "100px", paddingBottom: "100px"}}>
                <div style={{width: "100%"}}>
                    <div style={{marginLeft: "20px", marginRight: "20px", paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#667AEB", borderRadius: "30px 30px 0px 0px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontSize: "1.6rem", color: "white", margin: "0"}}>Languages</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>TypeScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>JavaScript</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>HTML</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>HTML</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>CSS</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>C</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Python</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "100%", marginTop: "20px"}}>
                    <div style={{marginLeft: "20px", marginRight: "20px", paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#667AEB", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontSize: "1.6rem", color: "white", margin: "0"}}>Skills</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>React</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Gatsby</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>NextJS</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>GraphQL</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Node</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Express</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>MySQL</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight:width > 700 ? "bold" : ""}}>Mongo</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Git</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Heroku</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "100%", marginTop: "20px"}}>
                    <div style={{marginLeft: "20px", marginRight: "20px", paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#667AEB", borderRadius: "0px 0px 30px 30px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                        <p style={{fontFamily: "Nunito", fontSize: "1.6rem", color: "white", margin: "0"}}>Design Tools</p>
                        <div style={{width: "400px", marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div style={{width: "400px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Figma</p>
                                </div>
                                <div style={{marginLeft: "5px", marginRight: "5px", width: "100px", height: "50px", borderRadius: "20px", backgroundColor: "#ffe45e", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p style={{fontFamily: "Nunito", fontSize: "0.8rem", fontWeight: width > 700 ? "bold" : ""}}>Gimp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="Work" />
            </div>
    )
};

export default Skills;