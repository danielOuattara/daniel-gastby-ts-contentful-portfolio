import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import image from "./../assets/images/hero2.svg";
import { Title, Seo } from "../components";
// import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query AboutMe {
    site {
      siteMetadata {
        aboutMe {
          text
          stack
          image
        }
      }
    }
  }
`;

export default function AboutPage({ data }: PageProps<TypeAboutMeQuery>) {
  const about = data.site.siteMetadata.aboutMe;

  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img src={image as unknown as string} alt="about" />
        {/* <StaticImage
          src="./../assets/images/hero2.svg"
          alt="portfolio"
          // className="hero-img"
          placeholder="blurred"
        /> */}
        <article className="about-text">
          <Title title={"about"} />
          <p>{about.text}</p>
          <div className="about-stack">
            {about.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
