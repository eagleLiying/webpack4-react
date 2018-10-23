import React from 'react';
import Loadable from "react-loadable";

const MyLoadingComponent = function ({ error, pastDelay }) {
    if (error) {
        console.log(error);
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

const routes = [
    {
        path: "/add",
        component: Loadable({
            loader: () => import("./pages/add"),
            loading: MyLoadingComponent
        }),
    },
    {
        path: "/home",
        component: Loadable({
            loader: () => import("./pages/home"),
            loading: MyLoadingComponent
        })
    }
]

export default routes;
