import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
