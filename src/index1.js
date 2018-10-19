import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from './routes';

console.log(routes)

ReactDOM.render(<Router>
    <div>
        {routes.map(({ path, component, exact }) => (
            <Route path={path} component={component} exact={exact} />
        ))}
    </div>
</Router>, document.getElementById("root"));