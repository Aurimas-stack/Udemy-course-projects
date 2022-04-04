import React, { useState } from "react";

const product_arr = [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
];

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState(product_arr);

  const toggleFav = (id) => {
    setProductsList((currList) => {
      const prodIndex = currList.findIndex((p) => p.id === id);
      const newFavStatus = !currList[prodIndex].isFavorite;
      const updatedProducts = [...currList];
      updatedProducts[prodIndex] = {
        ...currList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFav }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
