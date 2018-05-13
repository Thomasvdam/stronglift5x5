import * as React from 'react';
import './WorkoutRow.scss'
import { WorkoutPart, Status } from '../../types';
import ProgressBar from '../ProgressBar';

export interface Props {
    workoutPart: WorkoutPart;
}

function WorkoutRow({ workoutPart }: Props) {
    const { sets, reps, done, exercise } = workoutPart;

    return (
        <div>
            <div className={'workout--row ' + (done ? 'workout--done' : '')}>
                <span>
                    <span className="workout--number">{sets.length}</span> x <span className="workout--number">{reps}</span>
                </span>
                <span className="workout--number">{exercise.weight}</span>
            </div>
            <ProgressBar sets={sets} active={true}></ProgressBar>
        </div>
    )
}

export default WorkoutRow;
