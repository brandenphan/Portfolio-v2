import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/WidthContext"
import Temp from "./Pages/temp";

const App = () => {
	return (
		<Router>
			<ContextProvider>
				<Routes>
					<Route exact path="/" element={<Temp />} />
				</Routes>
			</ContextProvider>
		</Router>
	)
}

export default App;
