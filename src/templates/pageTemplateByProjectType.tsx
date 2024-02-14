// pageTemplateByProjectType.tsx file

import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Projects, Seo } from "../components";
import { IGatsbyImageData } from "gatsby-plugin-image";

//-------------------------------------------------------------------------------
export const query = graphql`
  query AllProjectsByType($type: String) {
    allContentfulPortfolioProjects(filter: { type: { eq: $type } }) {
      nodes {
        id
        title
        type
        level
        description {
          description
        }
        url_website
        url_github
        featured
        featured_image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          publicUrl
        }
        technologies
      }
    }
  }
`;

type AllProjectsByTypeQuery = {
  allContentfulPortfolioProjects: {
    nodes: Array<{
      id: string;
      title: string;
      type: string;
      level: string;
      url_website: string;
      url_github: string;
      featured: boolean;
      technologies: Array<string>;
      description: { description: string };
      featured_image: {
        id: string;
        gatsbyImageData: IGatsbyImageData;
        publicUrl: string;
      };
    }>;
  };
};

type TypePageContext = {
  type: string;
};

export default function PageTemplateByProjectType({
  data,
}: PageProps<AllProjectsByTypeQuery, TypePageContext>) {
  const projects = data.allContentfulPortfolioProjects.nodes;
  return (
    <main>
      <section className="projects-page">
        <Projects title="backend projects" projects={projects} />
      </section>
    </main>
  );
}

// export const Head = () => <Seo title={"Backend Projects"} />;
