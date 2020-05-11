import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/app/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((request, response) => {
  const reactMarkup = (
    <ServerLocation url={request.url}>
      <App />
    </ServerLocation>
  );
  response.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  response.end();
});

console.log("listening on " + PORT);
app.listen(PORT);
