import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "slugify";
import { slugger } from "../utilities/slugger";

type TypeSingleDocument = {
  id: string;
  title: string;
  url?: string;
  origin: string;
  date: string;
  image: {
    id: string;
    gatsbyImageData: IGatsbyImageData;
    publicUrl: string;
  };
};

type TypeSingleDocumentProps = {
  index: number;
  document: TypeSingleDocument;
  showItemNumber?: boolean;
};

export default function Document({
  index,
  document,
  showItemNumber,
}: TypeSingleDocumentProps) {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(document.image.gatsbyImageData) as IGatsbyImageData}
        className="project-img"
        alt={document.title}
      />

      <div className="project-info">
        <Link
          to={`/documents/${slugger(document.title)}`}
          className="project-slug"
        >
          <h3>
            {showItemNumber && (
              <span className="project-number">#{index + 1}</span>
            )}
            {document.title} &nbsp;
            <BsBoxArrowInUpRight className="goto project-number" />
          </h3>
        </Link>

        {/* <p className="project-desc">
          {project.description.description.slice(0, 85) + "..."}
        </p> */}

        {/* <div className="project-stack">
          {project.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div> */}

        {/* <div className="project-links">
          <a href={project.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.url_website} target="_blank" rel="noreferrer">
            <HiAtSymbol className="project-icon" />
          </a>
        </div> */}
      </div>
    </article>
  );
}
