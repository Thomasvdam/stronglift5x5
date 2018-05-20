import { connect, Dispatch } from 'react-redux';
import WeightSelector from '../components/WeightSelector';
import * as actions from '../actions/weightActions';
import { AppState } from '../types';

export function mapStateToProps(state, ownProps) {
    const {exercises} = state.entities;
    const {exerciseId} = ownProps.match.params;

    return {
        exercise: exercises[exerciseId],
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.WeightAction>) {
    return {
        onIncrement: (id: number) => dispatch(actions.incrementWeight(id)),
        onDecrement: (id: number) => dispatch(actions.decrementWeight(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightSelector);
