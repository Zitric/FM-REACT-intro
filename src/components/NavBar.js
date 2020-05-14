import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";

import colors from "../styles/colors";

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const [speed, setSpeed] = useState(1);
  const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <header
      role="button"
      tabIndex="0"
      onKeyDown={() => {}}
      // onClick={() => setPadding(padding + 10)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <button
        onClick={() => setSpeed(speed < 0.1 ? 1 : speed - 0.1)}
        onKeyDown={() => {}}
        css={css`
          background-color: ${colors.secondary};
          border-color: ${colors.secondary};
          font-size: 60px;
          display: inline-block;
          animation: ${speed}s ${spin} linear infinite;
          &:hover {
            animation: ${speed}s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
      >
        <span role="img" aria-label="logo">
          🐕
        </span>
      </button>
    </header>
  );
};
export default NavBar;
