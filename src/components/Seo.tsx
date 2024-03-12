import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

type TypeSeoQuery = {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      image: string;
      linkedInUsername: string;
      twitterUsername: string;
      name: string;
      date: string;
      aboutMe: {
        text: string;
        stack: Array<string>;
        image: string;
      };
    };
  };
};

export const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        siteUrl
        description
        image
        linkedInUsername
        twitterUsername
        name
        date
        aboutMe {
          text
          stack
          image
        }
      }
    }
  }
`;

type TypeSeoProps = {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};
export default function Seo({
  title,
  description,
  image,
  children,
}: TypeSeoProps) {
  const data: TypeSeoQuery = useStaticQuery(query);

  const { pathname } = useLocation();

  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    linkedInUsername,
    twitterUsername,
    name,
    date,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image} ` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
    twitterUsername,
    name,
    date,
  };

  console.log("seo = ", seo);
  return (
    <>
      <html lang="en-US" />
      <title> {`${seo.title} | Portfolio`}</title>
      <meta name="author" content={seo.name} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Fullstack Portfolio" />
      <meta itemProp="published" content={seo.date} />
      <meta itemProp="publishDate" content={seo.date} />
      <meta itemProp="date" content={seo.date} />
      <meta itemProp="description" content={seo.description} />
      <meta itemProp="image" content={seo.image} />

      {/* ok with linkedIn + facebook */}
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* twitter specific */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
}
