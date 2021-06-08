import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          image
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`${site.siteMetadata.title} | %s`}>
      <html lang="vi" />
      <title>{title}</title>
      {/* Fav icons */}
      {/* <link
        rel="icon"
        type="image/svg+xml"
        href={`${site.siteMetadata.siteUrl}/favicon.svg`}
      /> */}
      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}${site.siteMetadata.image}`}
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description || site.siteMetadata.description}
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}
