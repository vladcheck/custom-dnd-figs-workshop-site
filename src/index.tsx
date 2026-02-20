import "./global.sass";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";

const root = createRoot(document.getElementById("root")!);
root.render(
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<LandingPage />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);

