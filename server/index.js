import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";

import fs from "fs";

import App from "../src/app/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((request, response) => {
  response.write(parts[0]);

  const reactMarkup = (
    <ServerLocation url={request.url}>
      <App />
    </ServerLocation>
  );
  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(response, { end: false });
  stream.on("end", () => {
    response.write(parts[1]);
    response.end();
  });
});

console.log("listening on " + PORT);
app.listen(PORT);
