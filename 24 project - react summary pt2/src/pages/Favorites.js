import { useContext } from "react";

import { FavoriteContext } from "../context/fav-context";
import MeetupList from "../components/Meetups/MeetupList";

const FavoritesPage = () => {
  const favCtx = useContext(FavoriteContext);

  let content;

  if (favCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet</p>;
  } else {
    content = <MeetupList meetups={favCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
