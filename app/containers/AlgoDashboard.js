import { connect } from 'react-redux';
import { fetchRandomData } from '../actions';
import Dashboard from '../components/Dashboard/Dashboard'

const mapStateToProps = (state) => {
    return {
        data: state.randomData || []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTick: () => {
            const action = fetchRandomData();
            setInterval(() => {
                dispatch(action)
            }, 3000);
        }
    }
};

const AlgoDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default AlgoDashboard



