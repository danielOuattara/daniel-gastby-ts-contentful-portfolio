import * as React from "react";
import socialLinks from "../constants/social_links";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => (
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
        <h4>
          copyright &copy; 2019 - {new Date().getFullYear()}{" "}
          <span>Web & Mobile </span> all right reserved
        </h4>
        <p>Powered using Gatsby5+, Typescript, Contentful</p>
        <p>
          <a href="#" target="_blank" rel="noreferrer">
            Github Source
          </a>
        </p>
      </div>
    </footer>
  );
}
