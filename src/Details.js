import React from "react";

const Details = (props) => (
  // to see the data from the API
  <pre>
    <code>{JSON.stringify(props, null, 4)}</code>
  </pre>
);

export default Details;
