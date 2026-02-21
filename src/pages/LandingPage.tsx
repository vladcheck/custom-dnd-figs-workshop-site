import GoToTopButton from "../components/GoToTopButton";
import Main from "../components/Main";
import SideNav from "../components/SideNav";
import EditorDemoSection from "./sections/EditorDemoSection";
import FAQ from "./sections/FAQ";
import HeroSection from "./sections/HeroSection";
import HowItHappensSection from "./sections/HowItHappensSection";
import PhotoGallerySection from "./sections/PhotoGallerySection";
import PlaceOrderSection from "./sections/PlaceOrderSection";
import TeamSection from "./sections/TeamSection";

type LinkMeta = { id: string; title: string };

export const SECTIONS: {
	[key: string]: LinkMeta;
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

export default function LandingPage() {
	return (
		<>
			<GoToTopButton />
			<SideNav sections={Object.values(SECTIONS)} />
			<Main>
				<HeroSection id={SECTIONS.hero!.id} />
				<EditorDemoSection id={SECTIONS.editorDemo!.id} />
				<HowItHappensSection id={SECTIONS.howItHappens!.id} />
				<PhotoGallerySection id={SECTIONS.photos!.id} />
				<TeamSection id={SECTIONS.team!.id} />
				<FAQ id={SECTIONS.faq!.id} />
				<PlaceOrderSection id={SECTIONS.placeOrder!.id} />
			</Main>
		</>
	);
}

