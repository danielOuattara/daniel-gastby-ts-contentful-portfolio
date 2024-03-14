import * as React from "react";
import { Title, Document } from "./index";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TypeDocuments = Array<{
  id: string;
  title: string;
  verification_url?: string;
  origin: string;
  date: string;
  image: {
    id: string;
    gatsbyImageData: IGatsbyImageData;
    publicUrl: string;
  };
}>;

type TypeDocumentsProps = {
  title: string;
  showLinkToCertificates?: boolean;
  showLinkToDiploma?: boolean;
  showItemNumber?: boolean;
  documents: TypeDocuments;
};

export default function Documents({
  title,
  documents,
  showItemNumber,
  showLinkToCertificates,
  showLinkToDiploma,
}: TypeDocumentsProps) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {documents.map((document, index) => (
          <Document
            key={document.id}
            index={index}
            document={document}
            showItemNumber={showItemNumber}
          />
        ))}
      </div>

      {showLinkToCertificates && (
        <Link to="/documents/certificates" className="btn center-btn">
          all certificates
        </Link>
      )}
      {showLinkToDiploma && (
        <Link to="/documents/diploma" className="btn center-btn">
          all diploma
        </Link>
      )}
    </section>
  );
}
