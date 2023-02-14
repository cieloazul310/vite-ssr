import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import helmetToString from '../components/helmetToString';
import logoUrl from './logo.svg';
import type { PageContextServer } from './types';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const helmetContext = {};
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext} helmetContext={helmetContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const helmetString = helmetToString(helmetContext);

  // See https://vite-plugin-ssr.com/head
  // const { documentProps } = pageContext.exports
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(helmetString)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}

export { render };
