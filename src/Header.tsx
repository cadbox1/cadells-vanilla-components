import React from "react";
import { ThemeToggle } from "./themes";
import { navAnchorClass, navClass, themeToggleHeaderClass } from "./styles.css";

export const Header = () => {
	return (
		<nav className={navClass}>
			<a href="https://cadell.dev" className={navAnchorClass}>
				Cadell.dev
			</a>
			<a href="https://github.com/cadbox1" className={navAnchorClass}>
				GitHub
			</a>
			<a href="https://twitter.com/cadellchristo" className={navAnchorClass}>
				Twitter
			</a>
			<ThemeToggle className={themeToggleHeaderClass} />
		</nav>
	);
};
