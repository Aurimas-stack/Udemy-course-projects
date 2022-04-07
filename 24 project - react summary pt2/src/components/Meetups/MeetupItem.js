import { useContext } from "react";

import { FavoriteContext } from "../../context/fav-context";

import Card from "../UI/Card";

import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favCtx = useContext(FavoriteContext);

  const itemisFav = favCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemisFav) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        describe: props.describe,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemisFav ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
