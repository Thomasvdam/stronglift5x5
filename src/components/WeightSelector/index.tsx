import * as React from 'react';
import './WeightSelector.scss'
import { Exercise, Status } from '../../types';

export interface Props {
    exercise?: Exercise;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function WeightSelector({ exercise, onDecrement, onIncrement }: Props) {
    if (!exercise) {
        return null;
    }

    return (
        <div className="weight-selector--container">
            <button onClick={onDecrement}>-</button>
            <span>{exercise.weight}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

export default WeightSelector;


