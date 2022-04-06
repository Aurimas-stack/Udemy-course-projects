import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(filter === inputRef.current.value) {
        const fetchIngredients = async () => {
          const query =
            filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
          const response = await fetch(
            "https://react-http-731ee-default-rtdb.europe-west1.firebasedatabase.app/ingredient.json" +
              query
          );
          const data = await response.json();
  
          const loadedData = [];
          for (const key in data) {
            loadedData.push({
              id: key,
              title: data[key].title,
              amount: data[key].amount,
            });
          }
  
          onLoadIngredients(loadedData);
        };
  
        fetchIngredients();
      }
    }, 500);

    return () => {
      clearTimeout(timer)    
    };

  }, [filter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
