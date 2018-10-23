import React from 'react';
import Loadable from "react-loadable";

const MyLoadingComponent = function ({ error, pastDelay }) {
    if (error) {
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
            loader: () => import(/* webpackChunkName: "add" */ "./pages/add"),
            loading: MyLoadingComponent
        }),
    },
    {
        path: "/message/:id",
        component: Loadable({
            loader: () => import(/* webpackChunkName: "message" */ "./pages/message"),
            loading: MyLoadingComponent
        }),
    },
    {
        path: "/messages",
        component: Loadable({
            loader: () => import(/* webpackChunkName: "messages" */ "./pages/messages"),
            loading: MyLoadingComponent
        })
    }
]

export default routes;
