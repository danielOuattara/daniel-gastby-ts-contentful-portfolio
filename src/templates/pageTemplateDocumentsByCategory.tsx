import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Documents, Seo } from "../components";

//-------------------------------------------------------------------------------

export const query = graphql`
  query DocumentsPageQuery($category: String) {
    allContentfulPortfolioDocuments(
      filter: { category: { eq: $category } }
      sort: { date: DESC }
    ) {
      nodes {
        id
        title
        verification_url
        origin
        date
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          publicUrl
        }
      }
    }
  }
`;

type TypeAllDocumentsQuery = {
  allContentfulPortfolioDocuments: {
    nodes: Array<{
      id: string;
      title: string;
      category: string;
      verification_url: string;
      origin: string;
      date: string;
      image: {
        id: string;
        gatsbyImageData: IGatsbyImageData;
        publicUrl: string;
      };
    }>;
  };
};

type TypePageContext = {
  category: string;
};

export default function PageTemplateDocumentsByCategory({
  data,
  pageContext,
}: PageProps<TypeAllDocumentsQuery, TypePageContext>) {
  const documents = data.allContentfulPortfolioDocuments.nodes;
  return (
    <main>
      <section className="projects-page">
        <Documents
          showLinkToCertificates={false}
          showItemNumber={true}
          documents={documents}
          title={`${pageContext.category}s`}
        />
      </section>
    </main>
  );
}

export const Head = ({
  pageContext,
}: PageProps<TypeAllDocumentsQuery, TypePageContext>) => {
  const category = pageContext.category;
  return (
    <Seo
      title={`${category.charAt(0).toUpperCase() + category.slice(1)}s`}
      // description={project.description.description}
      image={`/${category}.png`}
    />
  );
};
