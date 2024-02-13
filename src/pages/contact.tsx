import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

export default function ContactPage(props: PageProps) {
  return (
    <main>
      <h1>Contact Page</h1>
    </main>
  );
}

export const Head: HeadFC = () => <title>Contact Page</title>;
