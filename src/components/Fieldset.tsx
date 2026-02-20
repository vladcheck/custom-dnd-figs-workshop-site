import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function Fieldset({
	children,
	legend,
	className,
}: PropsWithChildren & { legend: string; className?: string }) {
	return (
		<fieldset
			className={clsx("flex flex-wrap gap-6 border p-4 w-full", className)}
		>
			<legend className='text-2xl font-bold'>{legend}</legend>
			{children}
		</fieldset>
	);
}

