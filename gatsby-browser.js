import React from "react";
import Layout from "./src/component/layout";
import "./src/styles/main.css";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
