import { RefObject } from "react";

export default function ({
	ref,
}: {
	ref: RefObject<HTMLInputElement | null>;
}) {
	const handleDragOver = (e: any) => {
		const fileItems = [...e.dataTransfer.items].filter(
			(item) => item.kind === "file",
		);
		if (fileItems.length > 0) {
			e.preventDefault();
			if (fileItems.some((item) => item.type.startsWith("image/"))) {
				e.dataTransfer.dropEffect = "copy";
			} else {
				e.dataTransfer.dropEffect = "none";
			}
		}
	};

	return (
		<>
			<div
				className='drop-zone w-full h-[min(50dvh,300px)] border-[2px] border-dashed flex justify-center align-center relative hover:cursor-pointer bg-gray-500/10'
				onDragOver={handleDragOver}
			>
				{!ref.current?.files?.length ? (
					<div className='absolute mx-auto top-1/4 font-[sans-serif] flex flex-col justify-center items-center gap-4'>
						<span className='text-[1.3rem]'>
							Перетащите сюда один или более файлов
						</span>
						<img
							className='w-12 h-12 aspect-square'
							src='/public/images/icons/cube-1-svgrepo-com.svg'
							alt='cube'
						/>
					</div>
				) : null}
				<input
					ref={ref}
					className='opacity-1 w-full h-full'
					type='file'
					name='model'
					id='model'
					accept='*.obj,*.3dsmax'
					multiple
					required
				/>
			</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					ref.current!.files = new FileList();
				}}
				className='clear bg-gray-600 px-2 py-1 hover:cursor-pointer'
				type='button'
			>
				Очистить
			</button>
		</>
	);
}

