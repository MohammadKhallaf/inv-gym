import React from "react";
import AppFooter from "./AppFooter";
import AppNavbar from "./AppNavbar";

type Props = {
  children: React.ReactNode;
};

const index = (props: Props) => {
  return (
    <div className="d-flex flex-column h-100">
      <AppNavbar />
      <div>{props.children}</div>;
      <AppFooter />
    </div>
  );
};

export default index;
