import * as React from "react";
import fullStackLogo from "./../assets/images/full_stack_logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { page_links } from "../constants";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={fullStackLogo as never as string}
              alt="fullStack Web Developer"
              className="logo"
            />
          </Link>
          <button type="button" className="toggle-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link key={link.id} to={link.url} className="link-btn">
              {link.page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
