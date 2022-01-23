import React from "react";
import { containerClass } from "./styles.css";

export const Container = ({
	children,
	...props
}: {
	children: React.ReactNode;
}) => (
	<div className={containerClass} {...props}>
		{children}
	</div>
);
