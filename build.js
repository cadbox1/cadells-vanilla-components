const { build } = require("esbuild");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const { Generator } = require("npm-dts");
const { dependencies, peerDependencies } = require("./package.json");

const shared = {
	entryPoints: ["src/index.ts"],
	bundle: true,
	minify: true,
	sourcemap: true,
	plugins: [vanillaExtractPlugin()],
	external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
	...shared,
	outfile: "dist/index.js",
}).catch(() => process.exit(1));

build({
	...shared,
	outfile: "dist/index.esm.js",
	format: "esm",
}).catch(() => process.exit(1));

new Generator(
	{
		entry: "src/index.ts",
		output: "dist/index.d.ts",
		logLevel: "debug",
	},
	true,
	true
).generate();
