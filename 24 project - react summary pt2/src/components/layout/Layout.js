import MainNav from "./MainNav";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
