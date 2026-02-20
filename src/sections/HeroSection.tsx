import { H2 } from "../components/headers";
import Section from "../components/Section";

export default function HeroSection({ id }: { id: string }) {
	return (
		<Section className='flex-row align-stretch min-h-[50dvh]' id={id}>
			<div className='flex-1 flex flex-col justify-center align-center'>
				<div className='flex flex-col gap-6 mx-auto'>
					<H2 className='text-left text-[1rem]/[2rem]'>
						Хочешь играть в ролевые игры
						<br />
						настоящими фигурками?
					</H2>
					<p>
						В своём стремлении повысить качество жизни, они забывают, что
						глубокий уровень погружения обеспечивает широкому кругу
						(специалистов) участие в формировании новых принципов формирования
						материально-технической и кадровой базы.
					</p>
					<button
						onClick={() => {
							window.location.href = "#place-order";
						}}
						className='px-1.5 py-1 bg-orange-400 w-max hover:cursor-pointer'
					>
						Заказать
					</button>
				</div>
			</div>
			<div className='flex-1 flex justify-center align-center'>
				<SideVideo />
			</div>
		</Section>
	);
}

function SideVideo() {
	return (
		<>
			<div
				className='tenor-gif-embed w-full h-full'
				data-postid='9996368885542083466'
				data-share-method='host'
				data-aspect-ratio='1.76596'
				data-width='800px'
			>
				<a href='https://tenor.com/view/cocoa-press-cocoapress-chocolatemoose-chocolate-moose-3dprinting-gif-9996368885542083466'>
					Cocoa Press Cocoapress GIF
				</a>
				from
				<a href='https://tenor.com/search/cocoa+press-gifs'>Cocoa Press GIFs</a>
			</div>
			<script
				type='text/javascript'
				async
				src='https://tenor.com/embed.js'
			></script>
		</>
	);
	// return (
	// 	<video
	// 		className='w-full h-full aspect-auto'
	// 		autoPlay
	// 		disablePictureInPicture
	// 		disableRemotePlayback
	// 		loop
	// 		muted
	// 		preload='auto'
	// 	>
	// 		<source src='/public/myVideo.webm' type='video/webm' />
	// 		<source src='/public/myVideo.mp4' type='video/mp4' />
	// 		<p>Ваш браузер не поддерживает проигрывание видео на этой странице.</p>
	// 	</video>
	// );
}

