import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export type SeoProps = React.PropsWithChildren<{
  title?: string;
  description?: string;
  siteTitle: string;
  type?: 'website' | 'book' | 'profile' | string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  image?: string;
}>;

function Seo({
  title,
  description,
  siteTitle,
  image,
  children,
  type = 'website',
  twitterCard = 'summary',
}: SeoProps) {
  const pageTitle = title ? `${title} - ${siteTitle}` : siteTitle;

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="og:type" content={type} />
      <meta name="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:site" content={siteTitle} />
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      ) : null}
      <meta name="twitter:card" content={twitterCard} />
      {image ? (
        <>
          <meta name="image" content={image} />
          <meta name="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      ) : null}
      {children}
    </Helmet>
  );
}

Seo.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  type: 'website',
  twitterCard: 'summary',
};

export default Seo;
