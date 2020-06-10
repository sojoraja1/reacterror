import React from "react";

import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";

import About from '../Pages/about'
import Details from '../Pages/details'
const Navbar = () => {
  return (
    <Router>
      <div className="navigationBar">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            RoutingTutorial
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to={"/detail"}>
                Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route
          exact
          path={"/"}
          render={() => {
            return (
              <div>
                <h1>Hello</h1>
              </div>
            );
          }}
        />
        <Route
          exact
          path={"/detail"}
          component={Details}
        />

        <Route
          exact
          path={"/about"}
          component={About}
        />
      
      </Switch>
    </Router>
  );
};

export default Navbar;
