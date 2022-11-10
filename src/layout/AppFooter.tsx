import React from "react";

type Props = {};

const AppFooter = (props: Props) => {
  return (
    <footer className="mt-auto">
      ©{new Date().getFullYear()} ALGYM All Rights Reserved.
    </footer>
  );
};

export default AppFooter;
