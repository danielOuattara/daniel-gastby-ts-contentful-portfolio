type TypeAboutMeQuery = {
  site: {
    siteMetadata: {
      aboutMe: {
        text: string;
        stack: Array<string>;
        image: string;
      };
    };
  };
};
