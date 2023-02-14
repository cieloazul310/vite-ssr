import * as React from 'react';
import Seo from './Seo';
import { usePageContext } from '../renderer/usePageContext';

type LayoutProps = React.PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const pageContext = usePageContext();
  const title = pageContext.exports?.documentProps?.title;
  const description = pageContext.exports?.documentProps?.description;
  return (
    <>
      <Seo title={title} description={description} />
      {children}
    </>
  );
}

export default Layout;
