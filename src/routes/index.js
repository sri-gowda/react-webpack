import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { canAccessable } from '../service/authSrvc';

let Home = lazy(() => import('../pages/home'));
let About = lazy(() => import('../pages/about'));
let Contact = lazy(() => import('../pages/contact'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    }
]

const ProtectectedRoutes = route => {
    console.log("route", route);
    const Component = route.component;
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={props => {
                // if(canAccessable(route)){
                //     return <Component {...props} routes={route.routes}/>
                // }else{
                //     return <Redirect to="/" />;
                // }
                return <Component {...props} routes={route.routes} />
            }}
        />
    )
}

export { routes, ProtectectedRoutes };

