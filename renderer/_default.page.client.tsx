import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const helmetContext = {};
  hydrateRoot(
    document.getElementById('page-view')!,
    <PageShell pageContext={pageContext} helmetContext={helmetContext}>
      <Page {...pageProps} />
    </PageShell>
  );
}

export { render };
/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
