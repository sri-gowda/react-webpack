import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Loader, Nav } from './components';
import { routes, ProtectectedRoutes } from './routes';

const App = () => {
    console.log("routes", routes);
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDelay(true);
        }, 3000);
    }, [delay])

    console.log("delay", delay);

    return (
        <div>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Nav />
                    <Switch>
                        {
                            routes.map(route => {
                                return (
                                    <ProtectectedRoutes key={route.path} {...route} />
                                );
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

export default App;