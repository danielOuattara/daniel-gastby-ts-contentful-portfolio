import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Documents } from "../../components";
import Curriculum from "../../components/Curriculum";
export default function DocumentsPage({
  data,
}: PageProps<TypeDocumentsPageQuery>) {
  const certificates = data.certificates.nodes;
  const diplomas = data.diplomas.nodes;
  return (
    <main>
      <Curriculum />

      <Documents
        showLinkToCertificates={true}
        showItemNumber={false}
        documents={certificates}
        title={"certificates"}
      />

      <Documents
        showLinkToDiploma={true}
        showItemNumber={false}
        documents={diplomas}
        title={"diploma"}
      />

      <section>
        <h2>package</h2>
      </section>
    </main>
  );
}

export type TypeDocumentsPageQuery = {
  certificates: {
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
  diplomas: {
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

export const query = graphql`
  query DocumentsPageQuery {
    certificates: allContentfulPortfolioDocuments(
      filter: { category: { eq: "certificate" } }
      limit: 3
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
    diplomas: allContentfulPortfolioDocuments(
      filter: { category: { eq: "diploma" } }
      limit: 3
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
