export default function Footer({ id }: { id: string }) {
	return (
		<footer
			id={id}
			className='w-full min-h-25 flex flex-col justify-center items-center p-4'
		>
			<div className='flex w-full px-10 justify-between items-center'>
				<ul className='flex gap-6'>
					<li>+7 919-191-15-13</li>
					<li>
						<a href='https://vk.ru' target='_blank' rel='noopener noreferer'>
							VK
						</a>
					</li>
					<li>
						<a
							href='https://web.telegram.org'
							target='_blank'
							rel='noopener noreferer'
						>
							TG
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='.'>Договор об оферте</a>
					</li>
				</ul>
			</div>
			<span>2026</span>
		</footer>
	);
}

