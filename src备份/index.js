import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import A from './components/A';

import routes from './pages/routes';

ReactDOM.render(<Router>
    <div>
        {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
        ))}
    </div>
</Router>, document.getElementById("app"));