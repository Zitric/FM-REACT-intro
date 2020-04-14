// Mostly code from reactjs.org/docs/error-boundaries.html

import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    return this.state.hasError ? (
      <h1>
        There was an error with this listing. <Link to="/">Click here</Link> to
        go back to the home page or wait five seconds.
      </h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
