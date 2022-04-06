import { useReducer, useEffect, useCallback } from "react";

const httpReducer = (currHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...currHttpState, loading: false, data: action.data };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...currHttpState, error: null };
    default:
      return currHttpState;
  }
};

const useHttp = () => {
  const [state, dispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback(async (url, method, body) => {
    dispatch({ type: "SEND" });

    try {
      const response = await fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      dispatch({ type: "RESPONSE", data: data });

     }catch (error) {

      dispatch({ type: "ERROR", errorMessage: error.message });
    }
  }, []);

  return {
      loading: state.loading,
      data: state.data,
      error: state.error,
      sendRequest: sendRequest
  }
};

export default useHttp;


/*

- import the hook first
- call it :
   const {loading ,error, data, sendRequest} = useHttp();
- use constants.





*/