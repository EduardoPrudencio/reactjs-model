import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Details from '../Pages/Details';

const Routes: React.FC = () => {
    return (
    <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/Details" exact component={Details} />
    </Switch>)
};
export default Routes; 