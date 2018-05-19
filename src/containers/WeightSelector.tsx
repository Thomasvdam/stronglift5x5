import { connect, Dispatch } from 'react-redux';
import WeightSelector from '../components/WeightSelector';
import * as actions from '../actions';
import { AppState } from '../types';

export function mapStateToProps({ exercise }: AppState) {
    return {
        exercise,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.WeightAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementWeight()),
        onDecrement: () => dispatch(actions.decrementWeight()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightSelector);
