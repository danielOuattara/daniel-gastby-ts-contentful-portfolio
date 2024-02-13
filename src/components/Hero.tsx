import * as React from "react";
import { Link } from "gatsby";
import { social_links } from "../constants";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-card">
            <h1>I am Daniel</h1>
            <div className="underline"></div>
            <h4> Fullstack Developer: Web & Mobile</h4>
            <Link to="/contact" className="btn">
              Contact
            </Link>
            <div className="social-links">
              {social_links.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="./../assets/images/hero2.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
}
