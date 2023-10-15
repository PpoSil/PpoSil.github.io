import React from "react";
import { Helmet } from "react-helmet"; // SEO 목적으로 head 태그를 관리하는 라이브러리
import { useStaticQuery, graphql } from "gatsby";

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>히히</h1>
      <p>솔비의 블로그입니다</p>
    </div>
  );
};

export default Index;
