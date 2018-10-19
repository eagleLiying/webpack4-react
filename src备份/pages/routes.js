import Loadable from 'react-loadable';

const MyLoadingComponent = function ({ error, pastDelay }) {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

export default [
    {
        path: "/aa",
        component: Loadable({
            loader: () => import("./home"),
            loading: MyLoadingComponent,
        })
    },
    {
        path: "/notFound",
        component: Loadable({
            loader: () => import("./notFound"),
            loading: MyLoadingComponent,
        })
    },
]