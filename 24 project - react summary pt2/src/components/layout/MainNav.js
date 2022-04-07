import { useContext } from "react";

import { FavoriteContext } from "../../context/fav-context";

import { NavLink } from "react-router-dom";

import classes from "./MainNav.module.css";

const MainNav = () => {
  const favCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <NavLink to="/">All Meetups</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            Favorites
            <span className={classes.badge}>{favCtx.totalFavorites}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-meetup">Add a meet up</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
