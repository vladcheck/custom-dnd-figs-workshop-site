import clsx from "clsx";
import { useState } from "react";

export default function SideNav({
	sections,
}: {
	sections: { id: string; title: string }[];
}) {
	const [isAsideShown, setIsAsideShown] = useState<boolean>(false);

	return (
		<>
			<button
				className='fixed aspect-square top-20 left-4 z-9000 bg-gray-400/50 w-10 hover:cursor-pointer rounded-full bg-center bg-no-repeat bg-contain'
				onClick={() => {
					setIsAsideShown(!isAsideShown);
				}}
			>
				&gt;
			</button>
			<aside
				className={clsx(
					"left-0 top-0 fixed h-full bg-gray-900 p-4 z-8000 transition-transform transition-200 ease-in-out",
					isAsideShown ? "translate-x-0" : "-translate-x-[100%]",
				)}
			>
				<ul className='flex flex-col h-full justify-center gap-4 p-4'>
					{sections.map((s) => (
						<li
							className='text-gray-500 hover:text-white w-full'
							key={s.id}
						>
							<a
								className='block text-2xl text-inherit w-full transition-all cormorant-unicase-bold smooth-scroll'
								href={"#" + s.id}
							>
								{s.title}
							</a>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
}

