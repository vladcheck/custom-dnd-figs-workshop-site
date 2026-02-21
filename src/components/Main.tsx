import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
	return (
		<main className='w-full flex-1 bg-gray-950 flex flex-col justify-center items-center p-4 gap-8'>
			{children}
		</main>
	);
}

