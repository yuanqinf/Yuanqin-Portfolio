import Theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
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
