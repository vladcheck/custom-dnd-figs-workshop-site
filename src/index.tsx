import "./global.sass";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
import NotFound from "./pages/404";
import ContactsPage from "./pages/ContactsPage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<LandingPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);

