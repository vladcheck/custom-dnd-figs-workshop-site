import clsx from "clsx";
import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren & { className?: string };

export function H1({ className, children }: TitleProps) {
	return (
		<h1 className={clsx("cormorant-unicase-bold", className)}>{children}</h1>
	);
}

export function H2({ className, children }: TitleProps) {
	return (
		<h2
			className={clsx(
				"text-[2rem] cormorant-unicase-bold text-center",
				className,
			)}
		>
			{children}
		</h2>
	);
}

export function H3({ className, children }: TitleProps) {
	return (
		<h3 className={clsx("text-[1.2rem] cormorant-unicase-reqular", className)}>
			{children}
		</h3>
	);
}

export function H4({ className, children }: TitleProps) {
	return (
		<h4 className={clsx("cormorant-unicase-reqular", className)}>{children}</h4>
	);
}

export function H5({ className, children }: TitleProps) {
	return (
		<h5 className={clsx("cormorant-unicase-reqular", className)}>{children}</h5>
	);
}

export function H6({ className, children }: TitleProps) {
	return (
		<h6 className={clsx("cormorant-unicase-regular", className)}>{children}</h6>
	);
}

