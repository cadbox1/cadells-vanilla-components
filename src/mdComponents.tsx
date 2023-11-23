import React from "react";

import { H1 } from "./H1";
import { H2 } from "./H2";
import { P } from "./P";
import { IMG } from "./IMG";
import { A } from "./A";
import { LI } from "./LI";
import { H3 } from "./H3";
import { UL } from "./UL";
import { OL } from "./OL";
import { PRE } from "./PRE";
import { CODE } from "./CODE";

export const mdComponents = {
	h1: (props: any) => <H1 {...props} />,
	h2: (props: any) => <H2 {...props} />,
	h3: (props: any) => <H3 {...props} />,
	p: (props: any) => <P {...props} />,
	a: (props: any) => <A {...props} />,
	ul: (props: any) => <UL {...props} />,
	ol: (props: any) => <OL {...props} />,
	li: (props: any) => <LI {...props} />,
	pre: (props: any) => <PRE {...props} />,
	inlineCode: (props: any) => <CODE {...props} />,
	img: (props: any) => <IMG {...props} />,
};
