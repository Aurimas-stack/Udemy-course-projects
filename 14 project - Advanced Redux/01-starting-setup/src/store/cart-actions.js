import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
    return dispatch => {
        const fetchData = async () => {
            const response = await fetch("https://react-http-731ee-default-rtdb.europe-west1.firebasedatabase.app/cart.json");

            const data = response.json();

            if(!response.ok) {
                throw new Error("Error has occured")
            };

            return data;
        };

        
    }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendReq = async () => {
      const response = await fetch(
        "https://react-http-731ee-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!.");
      }
    };
    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Failed cart data",
        })
      );
    }
  };
};
