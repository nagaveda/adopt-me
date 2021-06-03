import React, { useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const theme = useState("violet");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1 id="my-brand">Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id" exact component={Details} />
            <Route path="/" exact component={SearchParams} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
