import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero, Services, Projects, Seo } from "../components";

export default function HomePage(props: PageProps) {
  return (
    <main>
      <Hero />
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
