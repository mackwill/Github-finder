import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/Pages/About";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
