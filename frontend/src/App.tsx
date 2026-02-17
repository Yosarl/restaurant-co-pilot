import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import POS from './POS';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/pos" component={POS} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" exact>
                    <h1>Welcome to the Restaurant Co-Pilot</h1>
                </Route>
                <Route>
                    <h1>404 - Not Found</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
