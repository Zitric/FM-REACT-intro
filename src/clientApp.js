import React from "react";
import { hydrate } from "react-dom";
import App from "./app/App";

// any other browser-only things
// when call to hydrate the content is markup already, not re-render
hydrate(<App />, document.getElementById("roof"));
