import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './Layout';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './shared/NotFoundPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);