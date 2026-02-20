import { PropsWithChildren } from "react";
import { H2, H3 } from "../components/headers";
import Section from "../components/Section";

export default function HowItHappensSection({ id }: { id: string }) {
	return (
		<Section id={id}>
			<H2>Как это происходит</H2>
			<div className='grid grid-cols-3 gap-10'>
				<ProcessCard
					title='Моделируете модель у нас или загружаете готовый файл'
					src='/public/images/icons/axis-chart-alerted-svgrepo-com.svg'
					alt='model-icon'
					stageNumber={1}
				>
					Смоделируйте минифиг в нашем
					<a href='#editor-demo'>редакторе</a> или загрузите уже готовую модель.
					Мы поддерживаем все распространенные расширения, включая{" "}
					<code>.obj</code>, <code>.3dmax</code>
				</ProcessCard>
				<ProcessCard
					title='Оформляете заказ'
					src='/public/images/icons/handshake-svgrepo-com.svg'
					alt='order-icon'
					stageNumber={2}
				>
					Заполните адрес в нашей <a href='#place-order-form'>форме</a>,
					оплатите заказ (СПБ или номер карты), и все готово!
				</ProcessCard>
				<ProcessCard
					title='Кропотливая печать'
					src='/public/images/icons/cube-1-svgrepo-com.svg'
					alt='3d-print-icon'
					stageNumber={3}
				>
					После оформления мы сразу же приступаем к печати.
				</ProcessCard>
				<ProcessCard
					title='Методично красим фигурки'
					src='/public/images/icons/brush-svgrepo-com.svg'
					alt='paint-icon'
					stageNumber={4}
				>
					Каждая фигурка красится отдельно балончиками и акрилом, а затем
					покрывается лаком.
				</ProcessCard>
				<ProcessCard
					title='Пакуем и доставляем'
					src='/public/images/icons/truck-fast-svgrepo-com.svg'
					alt='truck-icon'
					stageNumber={5}
				>
					Подробнее можете почитать в <a href='#faq'>FAQ.</a>
				</ProcessCard>
				<ProcessCard
					title='Заберите посылку'
					src='/public/images/icons/soldier-svgrepo-com.svg'
					alt='soldier-icon'
					stageNumber={6}
				>
					Доставим в ближайшее почтовое отделение или курьером к вам в квартиру.
					Забирайте и наслаждайтесь!
				</ProcessCard>
			</div>
		</Section>
	);
}

function ProcessCard({
	title,
	src,
	alt,
	children,
	stageNumber,
}: PropsWithChildren & {
	src: string;
	alt: string;
	title: string;
	stageNumber: number;
}) {
	return (
		<div className='flex flex-col justify-between gap-4 p-4'>
			<div className='flex justify-between gap-10'>
				<img src={src} alt={alt} className='icon aspect-square w-14 h-14' />
				<H3>{title}</H3>
			</div>
			<p className='flex-1'>{children}</p>
			<div className='relative full-w'>
				<span className='absolute font-bold right-6 bottom-2'>
					{stageNumber}
				</span>
			</div>
		</div>
	);
}

