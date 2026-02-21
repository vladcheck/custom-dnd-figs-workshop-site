import { H2, H3 } from "../../components/headers";
import Section from "../../components/Section";
import photos from "../../db/photos";
import { PhotoMeta } from "../../types";

export default function PhotoGallerySection({ id }: { id: string }) {
	return (
		<Section id={id}>
			<H2>Фото миниатюр</H2>
			<div className='grid gallery grid-cols-4 gap-4'>
				{photos.map((p) => (
					<PhotoCard {...p} />
				))}
			</div>
		</Section>
	);
}

function PhotoCard({ src, alt, title }: PhotoMeta) {
	return (
		<div className='flex flex-col gap-6 card'>
			<img src={src} alt={alt} />
			<H3>{title}</H3>
			<button
				onClick={() => {
					window.location.href = "#place-order";
				}}
				className='bg-orange-500 w-max px-2 hover:cursor-pointer'
			>
				Добавить в корзину
			</button>
		</div>
	);
}

