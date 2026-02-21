import { useRouteError } from "react-router";
import { H2 } from "../components/headers";
import Main from "../components/Main";

export default function NotFound() {
	return (
		<Main>
			<H2 className='text-[1.5rem]'>
				Такой страницы не существует (<code>404</code>)
			</H2>
		</Main>
	);
}

