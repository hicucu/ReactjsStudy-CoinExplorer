import React from "react";
import Coins from "Routes/Coins";
import Prices from "Routes/Prices";
import Exchanges from "Routes/Exchanges";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default () => (
  <>
    <p>Coin Explorer</p>
    <Router>
      <Switch>
        <Route path="/" exact component={Coins} />
        <Route path="/prices" component={Prices} />
        <Route path="/exchanges" component={Exchanges} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);
