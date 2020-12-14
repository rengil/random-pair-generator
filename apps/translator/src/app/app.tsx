import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Flow } from './flow/flow';
import './app.scss';

const NotFound = () => <div>Page not found</div>;

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={Flow} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
