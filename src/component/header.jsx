import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navTitle,
} from "./header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navLinks {
            name
            path
          }
        }
      }
    }
  `);

  const links = data.site.siteMetadata.navLinks;

  return (
    <div className={container}>
      <nav>
        <div className={navTitle}>Bee</div>
        <ul className={navLinks}>
          {links.map((link) => (
            <li key={link.path} className={navLinkItem}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
