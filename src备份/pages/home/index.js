import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/aa">Will Match22</Link>
        </li>
        <li>
          <Link to="/aa/will-match">Will Match</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/aa/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
    that matches. A <code>&lt;Route></code> with no <code>path</code> always
    matches.
  </p>
);

const WillMatch = () => <h3>Matched!</h3>;

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatchExample;