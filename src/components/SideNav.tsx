import clsx from "clsx";
import { useState } from "react";

export default function SideNav({
	sections,
}: {
	sections: { id: string; title: string }[];
}) {
	const [isAsideShown, setIsAsideShown] = useState<boolean>(true);

	return (
		<>
			<button
				className='fixed aspect-square top-20 left-4 z-9000 bg-orange-400 w-[32px] h-[32px]'
				onClick={() => {
					setIsAsideShown(!isAsideShown);
				}}
			>
				&gt;
			</button>
			<aside
				className={clsx(
					"top-0 fixed h-full bg-gray-900 p-4 z-8000",
					isAsideShown ? "aside-shown" : "-left-9999",
				)}
			>
				<ul className='flex flex-col h-full justify-center gap-4 p-4'>
					{sections.map((s) => (
						<li className='text-gray-500 hover:text-white w-full' key={s.id}>
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

