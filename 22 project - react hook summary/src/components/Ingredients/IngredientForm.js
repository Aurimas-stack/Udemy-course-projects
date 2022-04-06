import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from "../UI/LoadingIndicator"
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [inputValues, setInputValues] = useState({
    title: "",
    amount: ""
  });


  const submitHandler = event => {
    event.preventDefault();
    
    props.onAddIngredient({
      title: inputValues.title,
      amount: inputValues.amount
    })
  };

  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;//because of closure below, event object is lost after 1st key stroke
    setInputValues(prevState => ({
        title: newTitle,
        amount: prevState.amount

    }));
  };

  const amountChangeHandler = (event) => {
    const newAmount = event.target.value;
    setInputValues(prevState => ({
        title: prevState.title,
        amount: newAmount
    }));
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputValues.title} onChange={titleChangeHandler}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputValues.amount} onChange={amountChangeHandler}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
