import React from "react";
import Coins from "Routes/Coins";
import Prices from "Routes/Prices";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default () => (
  <>
    <p>Coin Explorer</p>
    <Router>
      <Route path="/" exact component={Coins} />
      <Route path="/prices" component={Prices} />
      <Redirect from="*" to="/" />
    </Router>
  </>
);
