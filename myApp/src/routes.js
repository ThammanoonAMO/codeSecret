import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home';
import Write from './components/Write';
import Read from './components/Read';

const Routes = (props) => (
                           <Router {...props}>
                           <Route path="/" component={Home} />
                           <Route path="/post" component={Write} />
                           <Route path="/code-blog" component={Read} />
                           </Router>
                           );

export default Routes;
