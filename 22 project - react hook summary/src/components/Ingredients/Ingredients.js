import React, { useState, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = useCallback(async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-http-731ee-default-rtdb.europe-west1.firebasedatabase.app/ingredient.json",
        {
          method: "POST",
          body: JSON.stringify(ingredient),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: data.name, ...ingredient },
      ]);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  const removeIngredientHandler = useCallback(async (ingredientId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://react-http-731ee-default-rtdb.europe-west1.firebasedatabase.app/ingredient/${ingredientId}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setLoading(false);
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={loading}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
