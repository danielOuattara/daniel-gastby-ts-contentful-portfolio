import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

export default function IndexPage() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
