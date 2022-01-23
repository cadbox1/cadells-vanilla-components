import React from "react";
import slugify from "slugify";
import {
	headingAnchorClass,
	headingAnchorSpanClass,
	h1Class,
} from "./styles.css";

export const H1 = ({ children, ...props }: { children: React.ReactNode }) => {
	const id =
		typeof children === "string"
			? slugify(children, { lower: true })
			: undefined;
	return (
		<h1 className={h1Class} id={id} {...props}>
			<a href={`#${id}`} className={headingAnchorClass}>
				<span className={headingAnchorSpanClass}>🔗</span>
			</a>
			{children}
		</h1>
	);
};
