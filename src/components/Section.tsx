import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function Section({
	children,
	id,
	className,
}: PropsWithChildren & { id: string; className?: string }) {
	return (
		<section
			className={clsx(
				`section flex gap-6 flex-col justify-center items-center px-16 py-2`,
				className,
			)}
			id={id}
		>
			{children}
		</section>
	);
}

