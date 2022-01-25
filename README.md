# Cadell's Vanilla Components

A basic component library built with [vanilla-extract](https://vanilla-extract.style/) for use in my NextJS sites, namely [prawn.cadell.dev](https://prawn.cadell.dev/) and [emojis.cadell.dev](https://emojis.cadell.dev/).

It uses [tsup](https://github.com/egoist/tsup) and [np](https://github.com/sindresorhus/np) for building and publishing to NPM.

## Commands

- `yarn build` - Build the package.
- `npm run release` - Publish a new version to NPM.

## Use with NextJS

1. Add cadells-vanilla-components.
    ```
    yarn add cadells-vanilla-components
    ```
1. Add MDX dependencies.
    ```
    yarn add --dev @next/mdx @mdx-js/loader
    ```
1. (Optional) Add vanilla-extract dependencies.
    ```
    yarn add --dev @vanilla-extract/css @vanilla-extract/babel-plugin @vanilla-extract/next-plugin
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

    const App = ({ Component, pageProps }) => (
        <Container>
            <ThemeToggle />
            <Component {...pageProps} />
        </Container>
    );

    export default App;
    ```


References:
- https://nextjs.org/docs/advanced-features/using-mdx#setup-nextmdx-in-nextjs
- https://vanilla-extract.style/documentation/setup/#nextjs

## Roadmap
1. Storybook.
1. Tests.

## References

- https://github.com/seek-oss/vanilla-extract/discussions/281
- https://github.com/egoist/tsup
- https://github.com/sindresorhus/np
- Couldn't get this method working: https://souporserious.com/bundling-typescript-with-esbuild-for-npm/