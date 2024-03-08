import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "slugify";
import { slugger } from "../utilities/slugger";

type TypeSingleProject = {
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
    gatsbyImageData: IGatsbyImageData;
  };
};

type TypeSingleProjectProps = {
  index: number;
  project: TypeSingleProject;
};

export default function Project({ index, project }: TypeSingleProjectProps) {
  return (
    <article className="project">
      <GatsbyImage
        image={
          getImage(project.featured_image.gatsbyImageData) as IGatsbyImageData
        }
        className="project-img"
        alt={project.title}
      />

      <div className="project-info">
        <Link
          to={`/projects/${slugger(project.category)}/${slugger(
            project.title,
          )}`}
          className="project-slug"
        >
          <h3>
            {" "}
            <span className="project-number">#{index + 1}</span>&nbsp;
            {project.title} &nbsp;
            <BsBoxArrowInUpRight className="goto project-number" />
          </h3>
        </Link>

        <p className="project-desc">
          {project.description.description.slice(0, 85) + "..."}
        </p>

        <div className="project-stack">
          {project.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.url_website} target="_blank" rel="noreferrer">
            <HiAtSymbol className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}
