import React from "react";
import { Helmet } from "react-helmet"; // SEO 목적으로 head 태그를 관리하는 라이브러리
import { useStaticQuery, graphql } from "gatsby";
import { bounceInTop, pTag } from "../component/index.module.css";

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

  const { title, description } = data.site.siteMetadata;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1 className={bounceInTop}>SolBee's Blog</h1>
      <p className={pTag}>
        Just me in a lonely city 외로운 도시에 나 홀로 In the middle of the
        noisy streets 떠들썩한 거리 한 가운데에 있어요 Never ending 영원히 끝날
        것 같지 않아 Then I saw you out there 마침 그때 거기 서 있던 그대를 본
        거죠 Something about you felt familiar 뭔가 낯설지 않은 기분이 들었어요
        Like I've met you before 예전에 그대를 만나기라도 한 것처럼 Feels like
        you and I were meant to go so high 우리 너무 높이 가려고 했었나봐요
      </p>
    </div>
  );
};

export default Index;
