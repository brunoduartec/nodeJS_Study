import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductDetail from './ProductDetail'
import PageNotFound from './PageNotFound'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
