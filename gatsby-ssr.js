import React from "react";
import Layout from "./src/component/layout";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
