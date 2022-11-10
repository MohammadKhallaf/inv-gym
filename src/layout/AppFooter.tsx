import React from "react";

type Props = {};

const AppFooter = (props: Props) => {
  return (
    <footer className="bg-primary text-white py-3 fs-6 text-center">
      ©{new Date().getFullYear()} AL-GYM All Rights Reserved.
    </footer>
  );
};

export default AppFooter;
