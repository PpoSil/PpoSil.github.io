import * as React from "react";
import { layoutContainer, content } from "./layout.module.css"; // CSS 모듈 import
import Header from "./header";
import { Helmet } from "react-helmet";
import { pageTitle } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutContainer}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <div className={content}>{children}</div>
    </div>
  );
};

export default Layout;
