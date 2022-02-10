import React from "react";
import { ThemeToggle } from "./themes";
import { navAnchorClass, navClass, themeToggleHeaderClass } from "./styles.css";

export const Header = ({
	githubHref = "https://github.com/cadbox1",
	twitterHref = "https://twitter.com/cadellchristo",
}: {
	githubHref?: string;
	twitterHref?: string;
}) => {
	return (
		<nav className={navClass}>
			<a href="https://cadell.dev" className={navAnchorClass}>
				Cadell.dev
			</a>
			<a href={githubHref} className={navAnchorClass}>
				GitHub
			</a>
			<a href={twitterHref} className={navAnchorClass}>
				Twitter
			</a>
			<ThemeToggle className={themeToggleHeaderClass} />
		</nav>
	);
};
