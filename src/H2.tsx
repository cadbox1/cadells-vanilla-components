import React from "react";
import slugify from "slugify";
import {
	h2Class,
	headingAnchorClass,
	headingAnchorSpanClass,
} from "./styles.css";

export const H2 = ({ children, ...props }: { children: React.ReactNode }) => {
	const id =
		typeof children === "string"
			? slugify(children, { lower: true })
			: undefined;

	return (
		<h2 className={h2Class} id={id} {...props}>
			{id && (
				<a href={`#${id}`} className={headingAnchorClass}>
					<span className={headingAnchorSpanClass}>🔗</span>
				</a>
			)}
			{children}
		</h2>
	);
};
