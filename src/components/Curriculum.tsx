import React from "react";
import { Title } from "./index";
import { Link } from "gatsby";

export default function Curriculum() {
  return (
    <section className="section projects">
      <Title title={"curriculum"} />
      <div className="section-center projects-center"></div>
      <Link to="/documents/curriculum" className="btn center-btn">
        curriculum
      </Link>
    </section>
  );
}
