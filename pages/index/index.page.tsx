import * as React from 'react';
import Layout from '../../components/layout';
import mdxComponents from '../../components/mdxComponents';
import Article from '../../components/mdx/article.mdx';

function Page() {
  return (
    <Layout title="水戸觀梅" description="大町桂月">
      <Article components={mdxComponents} />
    </Layout>
  );
}

export { Page };
