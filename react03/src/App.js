import React, { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Postitem from "./components/Postitem";
import NotFound from "./components/404";
import Conditional from "./components/Conditional";
import PureComp from "./components/PureComp";
import User from "./hoc/User";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
            <h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <NavLink
                to="/"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
                exact
              >
                Home
              </NavLink>
              <NavLink
                to="/posts"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
              >
                posts
              </NavLink>
              <NavLink
                to="/profile"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
              >
                profile
              </NavLink>
              <NavLink
                to="/conditional"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
              >
                conditional
              </NavLink>
              <NavLink
                to="/purecomp"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
              >
                purecomp
              </NavLink>
              <NavLink
                to="/user"
                className="p-2 text-dark"
                activeStyle={{ fontWeight: "bold" }}
                activeClassName="selected"
              >
                user
              </NavLink>
            </nav>
          </div>
        </header>
        <div className="container">
          <Switch>
            <Route path="/posts/:id" component={Postitem} />
            <Route path="/posts" component={Posts} />
            <Route path="/profile" component={Profile} />
            <Route path="/conditional" component={Conditional} />
            <Route path="/purecomp" component={PureComp} />
            <Route path="/user" component={User} />
            <Route path="/" component={Home} exact />
            <Route render={() => <h3>Page not Found</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
