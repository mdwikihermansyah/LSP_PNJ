import RootLayout from "./layout";
import { MantineProvider } from '@mantine/core';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
      </MantineProvider>
      </>
    );
  }