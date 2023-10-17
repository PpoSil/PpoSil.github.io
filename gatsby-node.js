const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `post${node.frontmatter.slug}`,
      component: path.resolve("./src/template/post.jsx"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
