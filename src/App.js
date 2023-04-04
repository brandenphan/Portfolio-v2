import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/WidthContext";
import ThemeProvider from "./Context/ThemeContext";
import Index from "./Pages/index";
import Cutsbyjz from "./Pages/Work/cutsbyjz";
import GuelphDental from "./Pages/Work/GuelphDental";
import Lotus from "./Pages/Work/Lotus";
import NotFound from "./Pages/NotFound";

import PersonalPortfolioNew from "./Pages/Project/PersonalPortfolioNew";
import CourseSearch from "./Pages/Project/CourseSearch";
import DiscordBot from "./Pages/Project/DiscordBot";
import PersonalPortfolioOld from "./Pages/Project/PersonalPortfolioOld";
import ScheduleMaker from "./Pages/Project/ScheduleMaker";
import Brawlhalla from "./Pages/Project/Brawlhalla";
import GPX from "./Pages/Project/GPX";

import Home from "./Pages/home";


const App = () => {
	return (
		<Router>
			<ContextProvider>
				<ThemeProvider>
					<Routes>
						<Route exact path="/" element={<Index />} />

						<Route path="/Cutsbyjz" element={<Cutsbyjz />} />
						<Route path="/GuelphDental" element={<GuelphDental />} />
						<Route path="/Lotus" element={<Lotus />} />
						<Route path="*" element={<NotFound />} />

						<Route path="/PersonalPortfolioNew" element={<PersonalPortfolioNew />} />
						<Route path="/CourseSearch" element={<CourseSearch />} />
						<Route path="/DiscordBot" element={<DiscordBot />} />
						<Route path="/PersonalPortfolioOld" element={<PersonalPortfolioOld />} />
						<Route path="/ScheduleMaker" element={<ScheduleMaker />} />
						<Route path="/Brawlhalla" element={<Brawlhalla />} />
						<Route path="/GPX" element={<GPX />} />


						<Route path="/home" element={<Home />} />
					</Routes>
				</ThemeProvider>
			</ContextProvider>
		</Router>
	)
}

export default App;
