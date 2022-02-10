import React from "react";
import { buttonClass } from "./styles.css";

export const Button = ({
	className = buttonClass,
	...props
}: {
	className?: string;
}) => {
	return <button className={className} {...props} />;
};
