import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NotFound from "./component/NotFound";
import DetailCharacters from "./views/DetailCharacters";
import DetailPlanets from "./views/DetailPlanets";
import DetailVehicles from "./views/DetailVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/DetailCharacters/:name" element={<DetailCharacters />} />
						<Route path="/DetailPlanets/:name" element={<DetailPlanets />} />
						<Route path="/DetailVehicles/:name" element={<DetailVehicles />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
