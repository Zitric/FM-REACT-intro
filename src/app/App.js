import React, { useState, lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
// Reach router is similar to react router but is better for accesibility
// Reach router show the route match the most, the order doesn't matter

import ThemeContext from "../context/ThemeContext";
import NavBar from "../components/NavBar";

const Details = lazy(() => import("../pages/Details"));
const SearchParams = lazy(() => import("../pages/SearchParams"));

const App = () => {
  const themeHook = useState("darkBlue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <>
          <NavBar />
          <header>
            <Link to="/">
              <h1 id="something-important">Adopt Me!</h1>
            </Link>
          </header>
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
