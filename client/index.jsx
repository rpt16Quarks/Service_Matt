import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import queryString from 'query-string';
import App from './app.jsx';

const Gallery = (
  <Router>
    <Route path="/" component={App}></Route>
  </Router>
);

ReactDOM.render(Gallery, document.getElementById('Gallery'));