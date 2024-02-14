import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Seo } from "../components";

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <h3>page not found 😔</h3>
          <p style={paragraphStyles}>
            Sorry, we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in{" "}
                <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
          </p>
          <Link to="/" className="btn">
            back safely to home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
