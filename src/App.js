import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/WidthContext";
import ThemeProvider from "./Context/ThemeContext";
// import Index from "./Pages/index";
import Cutsbyjz from "./Pages/Work/cutsbyjz";
import GuelphDental from "./Pages/Work/GuelphDental";
import Lotus from "./Pages/Work/Lotus";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/home";

// import PersonalPortfolioNew from "./Pages/Project/PersonalPortfolioNew";
// import CourseSearch from "./Pages/Project/CourseSearch";
// import DiscordBot from "./Pages/Project/DiscordBot";
// import PersonalPortfolioOld from "./Pages/Project/PersonalPortfolioOld";
// import ScheduleMaker from "./Pages/Project/ScheduleMaker";
// import Brawlhalla from "./Pages/Project/Brawlhalla";
// import GPX from "./Pages/Project/GPX";

const App = () => {
	return (
		<Router>
			<ContextProvider>
				<ThemeProvider>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/Cutsbyjz" element={<Cutsbyjz />} />
						<Route path="/GuelphDental" element={<GuelphDental />} />
						<Route path="/Lotus" element={<Lotus />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ThemeProvider>
			</ContextProvider>
		</Router>
	)
}

export default App;
