import React from "react";
import { graphql } from "gatsby";

const Project = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default Project;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/post1" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
