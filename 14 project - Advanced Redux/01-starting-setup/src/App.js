import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";

import { sendCartData } from "./store/cart-actions";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Notification from "./Components/UI/Notification";
import Product from "./Components/Shop/Product";

let initial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Product />
      </Layout>
    </Fragment>
  );
}

export default App;
