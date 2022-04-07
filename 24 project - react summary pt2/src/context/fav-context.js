import { useState, createContext } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favMeet) => {},
  removeFavorite: (meetId) => {},
  itemIsFavorite: (meetId) => {}
});

const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favMeet) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favMeet);
    });
  };

  const removeFavoriteHandler = (meetId) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((fav) => fav.id !== meetId);
    });
  };

  const itemIsFavoriteHandler = (meetId) => {
    return userFavorites.some(fav => fav.id === meetId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
