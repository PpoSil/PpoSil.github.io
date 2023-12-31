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
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              withWebp: true,
            },
          },
        ],
      },
    },
  ],
};
