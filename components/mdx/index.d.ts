declare module '*.mdx' {
  import type { MDXContent } from 'mdx/types';
  const mdxContent: MDXContent;
  export default mdxContent;
}
