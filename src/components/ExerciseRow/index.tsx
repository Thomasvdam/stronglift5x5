import * as React from 'react';
import './ExerciseRow.scss';

import { Exercise } from '../../types';

export interface Props {
    exercise: Exercise;
}

function ExerciseRow({ exercise }: Props) {
    return (
        <div className="exercise-row">
            <span className='exercise-row--name'>{exercise.name}</span>
            <span className="exercise-row--weight">{exercise.weight}</span>
        </div>
    )
}

export default ExerciseRow;
