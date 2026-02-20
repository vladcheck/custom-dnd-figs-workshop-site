import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export default function A({
	children,
	props,
}: PropsWithChildren & { props: AnchorHTMLAttributes<HTMLAnchorElement> }) {
	return <a {...props}>{children}</a>;
}

