import React from "react";
import Layout from "../component/layout";

const index = () => {
  return (
    <section>
      <Layout />
      <h1>히히</h1>
      <p>솔비의 블로그입니다</p>
    </section>
  );
};

export const Head = () => <title>Main</title>;

export default index;
