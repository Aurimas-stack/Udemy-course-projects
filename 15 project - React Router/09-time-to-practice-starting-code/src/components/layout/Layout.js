import React from "react";

import MainNav from "./MainNav";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
