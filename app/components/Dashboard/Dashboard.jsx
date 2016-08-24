
import React from 'react';

import DashboardRun from './Dashboard.run';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        DashboardRun();
        this.props.onTick();
    }

    render() {

        return (
            <section>
                <span>{ this.props.data.join(',') }</span>
            </section>
        );
    }


}

export default Dashboard;