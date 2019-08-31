import React from "react";
import Coin from "Routes/Coin";
import { BrowerRouter as Router, Route } from "react-router-dom";

export default () => (
  <Router>
    <Route path="/" exact componet={Coin} />
  </Router>
);
