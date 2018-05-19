import * as React from 'react';
import './ExerciseRow.scss';

import { Exercise, Status } from '../../types';

export interface Props {
    exercise: Exercise;
}

function ExerciseRow({ exercise }: Props) {
    return (
        <div className="exercise-row">
            <span className='exercise-row--name'>{exercise.name}</span>
            <span className="exercise-row--weight">{exercise.weight} kg</span>
            <span className="exercise-status--container">
                {exercise.history.map(({ status }, index) => {
                    return (
                        <span key={index} className={'exercise-status ' + getPartClassName(status)}></span>
                    )
                })}
            </span>
        </div>
    )
}

const getPartClassName = (status: Status) => {
    switch (status) {
        case Status.Open:
            return 'exercise-status--open';
        case Status.Completed:
            return 'exercise-status--completed';
        case Status.Failed:
            return 'exercise-status--failed';
        default:
            return 'exercise-status--open';
    }
}

export default ExerciseRow;
