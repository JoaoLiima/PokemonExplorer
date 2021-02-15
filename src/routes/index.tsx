import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemon/:pokemon+" exact component={Pokemon} />
  </Switch>
);

export default Routes;
