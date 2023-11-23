import React from "react";
import {
  mainContainer,
  websiteSec1,
  siteListTitle,
  siteListContiner,
  slider__wrapper,
  flex__container,
  flex__item,
  project,
  project__content,
  project__count,
  project__title,
  button,
  project__img,
} from "../styles/project.module.css";

const Project = () => {
  return (
    <div className={mainContainer}>
      <section className={websiteSec1}>
        <div className={siteListTitle}>
          <h3>Project</h3>
        </div>
        <div className={siteListContiner}>
          <div className={slider__wrapper}>
            <div className={flex__container}>
              <div className={flex__item}>
                <div className={project}>
                  <p className={project__count}>01-06</p>
                  <h1 className={project__title}>SolBee</h1>
                  <p className={project__content}>
                    술 한잔해요 날씨가 쌀쌀하니까 따끈따끈 국물에 소주 한 잔
                    어때요 시간 없다면 내 시간 빌려줄게요 그대 떠나간 후에 내
                    시간은 넘쳐요
                  </p>
                  <a href="http://localhost:8000/post/1" className={button}>
                    MoreView
                  </a>
                </div>
              </div>
              <img
                className={project__img}
                src={require("../content/1/happy.jpg").default}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

// export const query = graphql`
//   query {
//     markdownRemark(frontmatter: { slug: { eq: "/1" } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
