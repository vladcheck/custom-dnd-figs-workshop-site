import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import EditorDemoSection from "./sections/EditorDemoSection";
import FAQ from "./sections/FAQ";
import HeroSection from "./sections/HeroSection";
import HowItHappensSection from "./sections/HowItHappensSection";
import PhotoGallerySection from "./sections/PhotoGallerySection";
import PlaceOrderSection from "./sections/PlaceOrderSection";
import TeamSection from "./sections/TeamSection";

export const SECTIONS: {
	[key: string]: { id: string; title: string };
} = {
	hero: { id: "hero", title: "Погнали" },
	editorDemo: {
		id: "editor-demo",
		title: "Создай свою миниатюру в редакторе",
	},
	howItHappens: { id: "how-it-happens", title: "Как это происходит" },
	photos: { id: "photos", title: "Фото" },
	team: { id: "team", title: "Наша команда" },
	faq: { id: "faq", title: "Частые вопросы" },
	placeOrder: { id: "place-order", title: "Оформи заказ" },
};

export default function App() {
	return (
		<>
			<Header />
			<GoToTopButton />
			<SideNav sections={Object.values(SECTIONS)} />
			<main className='w-full flex-1 bg-gray-950 flex flex-col justify-center items-center p-4 gap-8'>
				<HeroSection id={SECTIONS.hero!.id} />
				<EditorDemoSection id={SECTIONS.editorDemo!.id} />
				<HowItHappensSection id={SECTIONS.howItHappens!.id} />
				<PhotoGallerySection id={SECTIONS.photos!.id} />
				<TeamSection id={SECTIONS.team!.id} />
				<FAQ id={SECTIONS.faq!.id} />
				<PlaceOrderSection id={SECTIONS.placeOrder!.id} />
			</main>
			<Footer id='footer' />
		</>
	);
}

