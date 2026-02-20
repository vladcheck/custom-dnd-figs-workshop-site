export default function Header() {
	return (
		<header className='flex gap-6 items-center border-b-gray-600 px-6 py-4 min-h-15'>
			<div className='mr-auto items-center flex gap-6 w-max'>
				<img
					className='aspect-square'
					src='/public/images/icons/anvil-impact-svgrepo-com.svg'
					width={48}
					height={48}
					alt='logo'
				/>
				<h1 className='text-2xl cormorant-unicase-bold'>
					<a className='text-nowrap' href='#'>
						Figure Workshop
					</a>
				</h1>
			</div>
			<button
				onClick={() => {
					window.location.href = "#place-order";
				}}
				className='px-1.5 py-1 bg-orange-400 hover:cursor-pointer uppercase'
			>
				Заказать
			</button>
		</header>
	);
}

