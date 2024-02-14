import { GatsbyNode, PageProps } from "gatsby";
import path from "path";
import slugify from "slugify";
//--------------------------------------------------------------

type TypeGatsbyNodeQuery = {
  distinctProjectTypeList: {
    distinct: Array<string>;
  };
  allProjectsTitles: {
    nodes: Array<{
      title: string;
      type: string;
    }>;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeGatsbyNodeQuery>(`
    query GatsbyNode {
      distinctProjectTypeList: allContentfulPortfolioProjects {
        distinct(field: { type: SELECT })
      }

      allProjectsTitles: allContentfulPortfolioProjects {
        nodes {
          title
          type
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  console.log("data = ", data);

  if (data) {
    data.distinctProjectTypeList.distinct.forEach((type) => {
      return actions.createPage({
        path: "/projects/" + type,
        component: path.resolve(
          "./src/templates/pageTemplateByProjectType.tsx",
        ),
        context: { type },
      });
    });
    data.allProjectsTitles.nodes.forEach((project) => {
      return actions.createPage({
        path: `/projects/${project.type}/${slugify(project.title, {
          lower: true,
          trim: true,
        })}`,
        component: path.resolve("./src/templates/singleProjectTemplate.tsx"),
        context: { title: project.title },
      });
    });
  }
};
