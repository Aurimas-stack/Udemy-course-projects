import { useReducer } from "react";

const initialInputState = {
    enteredValue: "",
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === "INPUT") {
        return {enteredValue: action.value, isTouched: state.isTouched};
    }
    if(action.type === "BLUR") {
        return {isTouched: true, enteredValue: state.enteredValue};
    }
    if(action.type === "RESET") {
        return initialInputState;
    }
    return initialInputState
};

const useBasicInput = (validationFn) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const enteredValueIsValid = validationFn(inputState.enteredValue);
  const inputHasError = !enteredValueIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({type: "INPUT", value: event.target.value})
  };

  const inputBlurHandler = () => {
    dispatch({type: "BLUR"});
  };

  const reset = () => {
    dispatch({type: "RESET"})
  };

  return {
    enteredValue: inputState.value,
    isTouched: inputState.isTouched,
    inputChangeHandler,
    inputBlurHandler,
    reset,
    enteredValueIsValid,
    inputHasError,
  };
};

export default useBasicInput;
