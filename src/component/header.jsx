import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  nav,
  headerContainer,
  navLinks,
  navLinkItem,
  navTitle,
  hamburgerMenu,
  menuOpen,
  closeButton,
} from "../styles/header.module.css";
import { useLocation } from "@reach/router";
import { useEffect } from "react";

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

  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className={headerContainer}>
      <nav className={nav}>
        <div className={navTitle}>Bee</div>
        <div className={hamburgerMenu} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {isOpen && (
          <div className={closeButton} onClick={() => setIsOpen(false)} />
        )}
        <ul className={`${navLinks} ${isOpen ? menuOpen : ""}`}>
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
