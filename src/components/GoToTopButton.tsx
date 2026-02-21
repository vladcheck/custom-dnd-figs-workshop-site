export default function GoToTopButton() {
	return (
		<button
			onClick={() => {
				window.location.href = "#";
			}}
			className='fixed right-6 bottom-6 aspect-square rounded-full bg-orange-400 w-10 bg-center bg-contain hover:cursor-pointer z-9999'
		>
			^
		</button>
	);
}

