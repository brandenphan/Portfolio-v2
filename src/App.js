import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/WidthContext"
import Index from "./Pages/index";
import New from "./Pages/new";

const App = () => {
	return (
		<Router>
			<ContextProvider>
				<Routes>
					<Route exact path="/" element={<Index />} />
					<Route path="/new" element={<New />} />
				</Routes>
			</ContextProvider>
		</Router>
	)
}

export default App;
