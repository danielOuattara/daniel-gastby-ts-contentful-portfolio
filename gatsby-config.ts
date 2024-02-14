import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    // title: `daniel-gastby-ts-contentful-portfolio`,
    title: "Fullstack Portfolio",
    // siteUrl: `https://www.yourdomain.tld`,
    siteUrl: "https://daniel-gatsby-portfolio.netlify.app",
    description:
      "Portfolio Gatsby & Contentful powered website where I present myself and show my skills on different kind of projects and using a wide range of effective web design technologies.",
    titleTemplate: `%s | Fullstack Portfolio `,
    image: "/homeImage.png",
    linkedInUsername: "daniel-b-ouattara-677146ab",
    twitterUsername: "@danielOuattara",
    name: "Daniel Ouattara",
    date: "Sept. 2023",
    aboutMe: {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodiaperiam officiis nostrum maxime reprehenderit, totam eaque corporisrepudiandae soluta quos neque omnis dolore quibusdam aliquam,consectetur excepturi error suscipit.",
      stack: [
        "html",
        "javascript",
        "typescript",
        "node",
        "deno",
        "express",
        "postgresql",
        "mongodb",
        "css",
        "sass",
        "react",
        "vue",
        "gatsby",
        "next",
      ],
      image: "./src/assets/images/hero2.svg",
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // The unique name for each instance
        path: `${__dirname}/src/assets/images`, // Path to the directory
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
