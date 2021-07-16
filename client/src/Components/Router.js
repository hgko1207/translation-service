import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Header from './Header';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
      <Route path="/translation-service" exact component={Home} />
        <Redirect from="*" to="/translation-service" />
      </Switch>
    </>
  </Router>
);
