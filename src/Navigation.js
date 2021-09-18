import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import MostPopular from "./pages/MostPopular";
import PalleteDetail from "./pages/PalleteDetail";
import Rising from "./pages/Rising";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/featured" component={Featured} />
          <Route path="/popular" component={MostPopular} />
          <Route path="/rising" component={Rising} />
          <Route path="/pallete/:id" component={PalleteDetail} />
        </Switch>
      </div>
    </Router>
  );
}
