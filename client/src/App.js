//Dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';

// Styles
import "./styles.scss";

// App

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
