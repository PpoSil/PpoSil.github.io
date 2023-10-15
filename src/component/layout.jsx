import * as React from "react";
import { layoutContainer, content } from "./layout.module.css"; // CSS 모듈 import
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className={layoutContainer}>
      <Header />
      <div className={content}>{children}</div>
    </div>
  );
};

export default Layout;
