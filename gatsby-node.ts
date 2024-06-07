/* gatsby-node.ts */

import { GatsbyNode, PageProps } from "gatsby";
import path from "path";
import { slugger } from "./src/utilities/slugger";
//--------------------------------------------------------------

type TypeGatsbyNodeQuery = {
  distinctProjectsTypeList: {
    distinct: Array<string>;
  };
  allProjectsTitles: {
    nodes: Array<{
      title: string;
      category: string;
    }>;
  };
  distinctDocumentsTypeList: {
    distinct: Array<string>;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeGatsbyNodeQuery>(`
    query GatsbyNode {
      distinctProjectsTypeList: allContentfulPortfolioProjects {
        distinct(field: { category: SELECT })
      }

      allProjectsTitles: allContentfulPortfolioProjects {
        nodes {
          title
          category
        }
      }

      distinctDocumentsTypeList: allContentfulPortfolioDocuments {
        distinct(field: { category: SELECT })
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  if (data) {
    data.distinctProjectsTypeList.distinct.forEach((category) => {
      return actions.createPage({
        path: "/projects/" + slugger(category),
        component: path.resolve(
          "./src/templates/pageTemplateProjectsByCategory.tsx",
        ),
        context: { category },
      });
    });
    data.allProjectsTitles.nodes.forEach((project) => {
      return actions.createPage({
        path: `/projects/${slugger(project.category)}/${slugger(
          project.title,
        )}`,
        component: path.resolve(
          "./src/templates/pageTemplateSingleProject.tsx",
        ),
        context: { title: project.title },
      });
    });

    data.distinctDocumentsTypeList.distinct.forEach((category) => {
      return actions.createPage({
        path: "/documents/" + slugger(category) + "s",
        component: path.resolve(
          "./src/templates/pageTemplateDocumentsByCategory.tsx",
        ),
        context: { category },
      });
    });
  }
};
