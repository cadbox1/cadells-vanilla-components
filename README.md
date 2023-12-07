# Cadell's Vanilla Components

A basic component library built with [vanilla-extract](https://vanilla-extract.style/) for use in my NextJS sites, namely [prawn.cadell.dev](https://prawn.cadell.dev/) and [emojis.cadell.dev](https://emojis.cadell.dev/).

It uses [tsup](https://github.com/egoist/tsup) and [np](https://github.com/sindresorhus/np) for building and publishing to NPM.

## Commands

- `npm run build` - Build the package.
- `npm run release` - Publish a new version to NPM.
- `npm run build-release` - Build and Publish to NPM.

## Use with NextJS

[Cadell's NextJS Template](https://github.com/cadbox1/cadells-nextjs-template) uses this package.

1. Add cadells-vanilla-components.
    ```
    npm install cadells-vanilla-components @fontsource/source-sans-pro
    ```
1. Add MDX dependencies.
    ```
    npm install --save-dev @next/mdx
    ```
1. Add vanilla-extract dependencies.
    ```
    npm install --save-dev @vanilla-extract/css @vanilla-extract/next-plugin
    ```
1. Setup `next.config.js`.
    ```
    const withMDX = require("@next/mdx")({
        extension: /\.mdx$/,
    });

    const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
    const withVanillaExtract = createVanillaExtractPlugin();

    const nextConfig = {
        pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    };

    module.exports = withVanillaExtract(withMDX(nextConfig));
    ```
1. Configure `_document.tsx` inside `/pages`.
    ```
    import { InitialiseTheme } from "cadells-vanilla-components";
    import Document, { Html, Head, Main, NextScript } from "next/document";

    export default class MyDocument extends Document {
        static async getInitialProps(ctx: any) {
            const initialProps = await Document.getInitialProps(ctx);
            return { ...initialProps };
        }

        render() {
            return (
                <Html lang="en">
                    <Head>
                        <link
                            rel="icon"
                            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😏</text></svg>"
                        />
                    </Head>
                    <body>
                        <InitialiseTheme />
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            );
        }
    }
    ```
1. Configure `_app.tsx` inside `/pages`.
    ```
    import { Container, ThemeToggle } from "cadells-vanilla-components";
    import "cadells-vanilla-components/dist/index.css";
    import "@fontsource/source-sans-pro/400.css";
    import "@fontsource/source-sans-pro/600.css";

    const App = ({ Component, pageProps }) => (
        <Container>
            <ThemeToggle />
            <Component {...pageProps} />
        </Container>
    );

    export default App;
    ```
1. Create `mdx-components.tsx`.
    ```
    import { mdComponents } from "cadells-vanilla-components";

    export function useMDXComponents() {
        return mdComponents;
    }
    ```


References:
- https://nextjs.org/docs/advanced-features/using-mdx#setup-nextmdx-in-nextjs
- https://vanilla-extract.style/documentation/integrations/next/

## Implementation
I've built NextJS apps with MDX and custom components for projects like [prawn.cadell.dev](https://prawn.cadell.dev) before but I wanted to split this out into a separate package for [emojis.cadell.dev](https://emojis.cadell.dev). This is the result! I also created [template.cadell.dev](https://template.cadell.dev) as a template for showing how to use it. 

Creating this package was a bit harder than first thought but I'm happy with the result and I think [emojis.cadell.dev](https://emojis.cadell.dev) looks great. I originally tried using [tsdx](https://github.com/jaredpalmer/tsdx) but the typescript types weren't correct and I couldn't work out why. I decided to change direction and started looking for a tool based on [esbuild](https://github.com/evanw/esbuild) instead of [Rollup](https://github.com/rollup/rollup) and found [tsup](https://github.com/egoist/tsup) which pretty much worked out of the box. Happy days! Tsdx did introduce me to [np](https://github.com/sindresorhus/np) for publishing to NPM so I kept that and it works really well. Everything happened for a reason.

## Todo
1. Storybook.
1. Tests.

## References

- https://github.com/seek-oss/vanilla-extract/discussions/281
- https://github.com/egoist/tsup
- https://github.com/sindresorhus/np
- Couldn't get this method working: https://souporserious.com/bundling-typescript-with-esbuild-for-npm/
