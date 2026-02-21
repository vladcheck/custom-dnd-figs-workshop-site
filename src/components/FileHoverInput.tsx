import React, { useState, useCallback } from "react";

interface FileUploaderProps {
	inputRef: React.RefObject<HTMLInputElement | null>;
	onFilesChange?: (files: File[]) => void;
}

export default function FileUploader({
	inputRef,
	onFilesChange,
}: FileUploaderProps) {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [files, setFiles] = useState<File[]>([]);

	const updateFiles = useCallback(
		(newFiles: File[]) => {
			setFiles(newFiles);
			if (onFilesChange) {
				onFilesChange(newFiles);
			}

			if (inputRef.current) {
				const dt = new DataTransfer();
				newFiles.forEach((file) => dt.items.add(file));
				inputRef.current.files = dt.files;
			}
		},
		[onFilesChange, inputRef],
	);

	const handleDragEnter = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(true);
		},
		[],
	);

	const handleDragLeave = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);
		},
		[],
	);

	const handleDragOver = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isDragging) {
				setIsDragging(true);
			}
		},
		[isDragging],
	);

	const handleDrop = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);

			const droppedFiles = Array.from(e.dataTransfer.files).filter(
				(file) => file.name.match(/\.(obj|3dsmax)$/i),
			);

			if (droppedFiles.length > 0) {
				updateFiles(droppedFiles);
			}
		},
		[updateFiles],
	);

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.files) {
				const selectedFiles = Array.from(e.target.files);
				updateFiles(selectedFiles);
			}
		},
		[updateFiles],
	);

	const handleClear = useCallback(() => {
		setFiles([]);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
		if (onFilesChange) {
			onFilesChange([]);
		}
	}, [inputRef, onFilesChange]);

	const handleContainerClick = useCallback(() => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	}, [inputRef]);

	return (
		<div className='flex flex-col gap-4 w-full'>
			<div
				className={`
          drop-zone w-full h-[min(30dvh,200px)] 
          border-[2px] border-dashed flex justify-center items-center 
          relative cursor-pointer bg-gray-500/10 transition-colors duration-200
          ${isDragging ? "border-blue-500 bg-blue-500/20" : "border-gray-400"}
        `}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={handleContainerClick}
			>
				<input
					ref={inputRef}
					className='absolute inset-0 w-full h-full opacity-0 pointer-events-none'
					type='file'
					name='model'
					id='model'
					accept='*.obj,*.dae,*.stl,*.stp,*.3ds,*.fbx,*.max,*.amf,*.3mf'
					multiple
					required
					onChange={handleInputChange}
				/>

				{files.length === 0 ? (
					<div className='absolute flex flex-col justify-center items-center gap-4 pointer-events-none'>
						<span className='text-[1.3rem] font-sans text-gray-700'>
							Перетащите сюда один или более файлов
						</span>
						<img
							className='w-12 h-12 aspect-square'
							src='/images/icons/cube-1-svgrepo-com.svg'
							alt='cube'
						/>
					</div>
				) : null}
			</div>

			{files.length > 0 && (
				<div className='file-list bg-gray-100 p-4 rounded border border-gray-300'>
					<h3 className='font-bold mb-2 text-sm text-gray-700'>
						Загружено файлов: {files.length}
					</h3>
					<ul className='list-disc pl-5 text-sm text-gray-600 max-h-40 overflow-y-auto'>
						{files.map((file, index) => (
							<li key={`${file.name}-${index}`} className='truncate'>
								{file.name}
							</li>
						))}
					</ul>
				</div>
			)}

			<button
				onClick={handleClear}
				disabled={files.length === 0}
				className={`
          clear px-4 py-2 rounded text-white font-medium transition-colors
          ${
						files.length === 0
							? "bg-gray-400 cursor-not-allowed"
							: "bg-gray-600 hover:bg-gray-700 cursor-pointer"
					}
        `}
				type='button'
			>
				Очистить
			</button>
		</div>
	);
}

