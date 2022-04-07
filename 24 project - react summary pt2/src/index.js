import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import FavoriteContextProvider from "./context/fav-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoriteContextProvider>
    <Router>
      <App />
    </Router>
  </FavoriteContextProvider>,
  document.getElementById("root")
);
