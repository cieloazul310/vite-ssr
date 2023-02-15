import * as React from 'react';
import Seo from '../components/Seo';
import { usePageContext } from '../usePageContext';

type LayoutProps = React.PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const pageContext = usePageContext();
  const title = pageContext.exports?.documentProps?.title;
  const description = pageContext.exports?.documentProps?.description;
  return (
    <>
      <Seo title={title} description={description} siteTitle="Vite SSR" />
      {children}
    </>
  );
}

export default Layout;
