import Head from "next/head";
import Theme from "../styles/theme";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Yuanqin Fan | Developer</title>
            </Head>
            <Theme>
                <NextNProgress
                    color="#FFFFFF"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                />
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
