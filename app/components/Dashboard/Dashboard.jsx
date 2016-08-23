import React from 'react';
import pubsub from 'pubsub-js';

import DashboardRun from './Dashboard.run';

class Dashboard extends React.Component {

    componentWillMount() {
        pubsub.publish('setPageTitle', this.constructor.name);
    }

    componentDidMount() {
        DashboardRun();
    }

    render() {
        return (
            <section>
                <h1>Hello, World</h1>
            </section>
        );
    }
}

export default Dashboard;
