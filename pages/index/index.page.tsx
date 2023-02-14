import * as React from 'react';
import mdxComponents from '../../components/mdxComponents';
import Article from '../../components/mdx/article.mdx';

function Page() {
  return <Article components={mdxComponents} />;
}

export { Page };

export const documentProps = {
  // This title and description will override the defaults
  title: '水戸觀梅',
  description: '大町桂月',
};
