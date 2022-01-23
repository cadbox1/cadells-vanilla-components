import React from "react";
import { pClass } from "./styles.css";

export const P = ({ children, ...props }: { children: React.ReactNode }) => (
	<p className={pClass} {...props}>
		{children}
	</p>
);
