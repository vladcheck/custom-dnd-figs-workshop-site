import { H2 } from "../components/headers";
import Section from "../components/Section";

export default function EditorDemoSection({ id }: { id: string }) {
	return (
		<Section id={id}>
			<H2>Создай свою миниатюру в редакторе</H2>
			<div className='w-[80dvw] max-w-[1000px] bg-gray-500 mx-auto flex justify-center items-center'>
				<img src='/public/images/editor preview.png' alt='editor preview' />
			</div>
		</Section>
	);
}

