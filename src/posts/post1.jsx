import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"; // <-- 추가

export default function post1({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      {post.frontmatter.image && ( // <-- 이미지가 있는 경우만 렌더링
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
