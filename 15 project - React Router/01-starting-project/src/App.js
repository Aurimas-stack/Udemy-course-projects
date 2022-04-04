import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./components/pages/Welcome";
import ProductDetail from "./components/pages/ProductDetail";
import Products from "./components/pages/Products";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
