import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Projects, Seo } from "../components";
import { IGatsbyImageData } from "gatsby-plugin-image";

//-------------------------------------------------------------------------------
export const query = graphql`
  query AllProjectsByType($category: String) {
    allContentfulPortfolioProjects(filter: { category: { eq: $category } }) {
      nodes {
        id
        title
        category
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
      category: string;
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
  category: string;
};

export default function pageTemplateProjectsByCategory({
  data,
  pageContext,
}: PageProps<AllProjectsByTypeQuery, TypePageContext>) {
  const projects = data.allContentfulPortfolioProjects.nodes;
  return (
    <main>
      <section className="projects-page">
        <Projects
          title={`${pageContext.category} projects`}
          projects={projects}
        />
      </section>
    </main>
  );
}

// export const Head = () => <Seo title={"Backend Projects"} />;
