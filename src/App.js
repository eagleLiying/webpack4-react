import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import routes from './routes';

const history = createHistory();

const RouteItem = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} itemRoutes={route.routes} />
    )}
  />
);

const App = () => (
  <Router history={history}>
    <div>
      <ul style={{ display: "flex", listStyle: "none", backgroundColor: "#eee" }}>
        <li style={{ margin: "0 10px" }}>
          <Link to="/messages">messages</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/add">Add</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/404">404</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => <RouteItem key={i} {...route} />)}
        <Route render={() => <div>404</div>} />
      </Switch>
    </div>
  </Router>
);

export default App;
