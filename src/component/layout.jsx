import * as React from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinkItem } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/solbi">SolBi</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
