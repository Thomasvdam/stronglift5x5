import * as React from 'react';
import './WeightSelector.scss'
import { Exercise, Status } from '../../types';

export interface Props {
    exercise?: Exercise;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
}

function WeightSelector(props: Props) {
    const {exercise, onDecrement, onIncrement} = props;
    if (!exercise) {
        return null;
    }

    return (
        <div className="weight-selector--container">
            <button onClick={() => onDecrement(exercise.id)}>-</button>
            <span>{exercise.weight}</span>
            <button onClick={() => onIncrement(exercise.id)}>+</button>
        </div>
    )
}

export default WeightSelector;


