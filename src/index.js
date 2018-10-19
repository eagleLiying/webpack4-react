import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import List from 'components/List';
import routes from './routes';

const history = createHistory();


const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({ itemRoutes }) => (
  <div>
    <h2>Tacos</h2>
    <List />
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>
    {itemRoutes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

////////////////////////////////////////////////////////////
// then our route config
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} itemRoutes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <Router history={history}>
    <div>
      <ul style={{ display: "flex", listStyle: "none", backgroundColor: "#eee" }}>
        <li style={{ margin: "0 10px" }}>
          <Link to="/home">home</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/add">Add</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/404">404</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        <Route render={() => <div>404</div>} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <RouteConfigExample />
  , document.getElementById('root'))
