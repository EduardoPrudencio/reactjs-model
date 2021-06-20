import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Details from '../Pages/Details';

const Routes: React.FC = () => {
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Details" exact component={Details} />
    </Switch>)
};
export default Routes; 