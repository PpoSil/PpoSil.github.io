import * as React from "react";
import { layoutContainer } from "./layout.module.css"; // CSS 모듈 import
import Header from "./header";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutContainer}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
