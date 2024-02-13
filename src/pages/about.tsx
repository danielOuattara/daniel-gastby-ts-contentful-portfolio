import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

export default function AboutPage(props: PageProps) {
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
