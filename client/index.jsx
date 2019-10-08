import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import queryString from 'query-string';
import App from './app.jsx';

const router = (
  <Router>
    <Route path="/" component={App}></Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));