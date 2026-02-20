import { useRouteError } from "react-router";
import { H2 } from "../components/headers";

export default function NotFound() {
	return (
		<main className='flex-1 flex flex-col justify-center items-center gap-2'>
			<H2 className='text-[1.5rem]'>
				Такой страницы не существует (<code>404</code>)
			</H2>
		</main>
	);
}

