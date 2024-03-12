import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { Seo } from "../components";
import { IGatsbyImageData } from "gatsby-plugin-image";

//-------------------------------------------------------------------------------
export const query = graphql`
  query SingleProject($title: String) {
    contentfulPortfolioProjects(title: { eq: $title }) {
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
      images_list {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        id
        publicUrl
      }
    }
  }
`;

type TypeSingleProjectQuery = {
  contentfulPortfolioProjects: {
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
    images_list: Array<{
      gatsbyImageData: IGatsbyImageData;
      id: string;
      publicUrl: string;
    }>;
  };
};

type TypePageContext = {
  title: string;
};

export default function pageTemplateSingleProject({
  data,
  pageContext,
}: PageProps<TypeSingleProjectQuery, TypePageContext>) {
  const project = data.contentfulPortfolioProjects;

  return (
    <main className="project-template-page">
      <h2>{pageContext.title}</h2>
      <p>{project.description.description}</p>
      <a href={project.url_website} target="_blank" rel="noreferrer">
        <img src={project.featured_image.publicUrl} alt={project.title} />
      </a>
      <Link to="/projects" className="btn">
        back to projects
      </Link>
    </main>
  );
}

export const Head = ({
  data,
  pageContext,
}: PageProps<TypeSingleProjectQuery, TypePageContext>) => {
  const project = data.contentfulPortfolioProjects;
  return (
    <Seo
      title={project.title}
      description={project.description.description}
      image={project.featured_image.publicUrl}
    />
  );
};
