import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Header from './Header';
import "../assets/App.css";

import BottomAdSense from '../AdSense/BottomAdSense';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/translation-service" exact component={Home} />
        <Redirect from="*" to="/translation-service" />
      </Switch>

      <div className="bottom-google-ad">
        <BottomAdSense/>
      </div>
    </>
  </Router>
);
