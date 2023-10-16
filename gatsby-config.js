module.exports = {
  siteMetadata: {
    title: "Beeee",
    description: "솔비의 블로그입니다",
    navLinks: [
      { name: "Main", path: "/" },
      { name: "Solbi", path: "/solbi" },
      { name: "Skill", path: "/skill" },
      { name: "Project", path: "/project" },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
