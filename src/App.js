import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/WidthContext"
import Index from "./Pages/index";
import Cutsbyjz from "./Pages/Work/cutsbyjz";
import GuelphDental from "./Pages/Work/GuelphDental";
import Lotus from "./Pages/Work/Lotus";

const App = () => {
	return (
		<Router>
			<ContextProvider>
				<Routes>
					<Route exact path="/" element={<Index />} />

					<Route path="/Cutsbyjz" element={<Cutsbyjz />} />
					<Route path="/GuelphDental" element={<GuelphDental />} />
					<Route path="/Lotus" element={<Lotus />} />
				</Routes>
			</ContextProvider>
		</Router>
	)
}

export default App;
