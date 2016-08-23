
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history'

import Core from './components/Core/Core';
import Dashboard from './components/Dashboard/Dashboard';

$(() => { // prevent page reload when using dummy anchors
    $(document).on('click', '[href=""],[href="#"]', () => {
        return false;
    })
})

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })

// Declare routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Core}>

            {/* Default route*/}
            <IndexRoute component={Dashboard} />

        </Route>

    </Router>,
    document.getElementById('app')
);
