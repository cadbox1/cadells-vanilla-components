import React from "react";
import slugify from "slugify";
import {
	h3Class,
	headingAnchorClass,
	headingAnchorSpanClass,
} from "./styles.css";

export const H3 = ({ children, ...props }: { children: React.ReactNode }) => {
	const id =
		typeof children === "string"
			? slugify(children, { lower: true })
			: undefined;

	return (
		<h2 className={h3Class} id={id} {...props}>
			<a href={`#${id}`} className={headingAnchorClass}>
				<span className={headingAnchorSpanClass}>🔗</span>
			</a>
			{children}
		</h2>
	);
};
