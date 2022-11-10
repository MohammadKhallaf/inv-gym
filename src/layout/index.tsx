import React from "react";
import AppFooter from "./AppFooter";
import AppNavbar from "./AppNavbar";

type Props = {
  children: React.ReactNode;
};

const index = (props: Props) => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <AppNavbar />
      <main className="flex-grow-1">{props.children}</main>;
      <AppFooter />
    </div>
  );
};

export default index;
