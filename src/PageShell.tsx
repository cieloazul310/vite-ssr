import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layout';
import { PageContextProvider } from './usePageContext';
import theme from './theme';
import type { PageContext } from './types';

function PageShell({
  children,
  pageContext,
  helmetContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
  helmetContext: object;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider theme={theme}>
          <HelmetProvider context={helmetContext}>
            <Layout>{children}</Layout>
          </HelmetProvider>
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
