import { PropsWithChildren } from "react";

export default function LabelInputContainer({
	children,
	htmlFor,
	label,
}: PropsWithChildren & { htmlFor: string; label: string }) {
	return (
		<div className='flex flex-col gap-1 label-input-container'>
			<label htmlFor={htmlFor} className='text-2xl'>
				{label}
			</label>
			{children}
		</div>
	);
}

