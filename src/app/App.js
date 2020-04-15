import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// Reach router is similar to react router but is better for accesibility
// Reach router show the route match the most, the order doesn't matter

import SearchParams from "../pages/SearchParams";
import Details from "../pages/Details";

const App = () => (
  <React.StrictMode>
    <div>
      <header>
        <Link to="/">
          <h1 id="something-important">Adopt Me!</h1>
        </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
