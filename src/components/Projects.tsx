import * as React from "react";
import { Title, Project } from "./index";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TypeProjects = Array<{
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
    gatsbyImageData: IGatsbyImageData;
  };
}>;

type TypeProjectsProp = {
  title: string;
  showLinkToProjects?: boolean;
  projects: TypeProjects;
};

export default function Projects({
  title,
  projects,
  showLinkToProjects,
}: TypeProjectsProp) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.id} index={index} project={project} />
        ))}
      </div>

      {showLinkToProjects && (
        <Link to="/projects" className="btn center-btn">
          go to projects
        </Link>
      )}
    </section>
  );
}
