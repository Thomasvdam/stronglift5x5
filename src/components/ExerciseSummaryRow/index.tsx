import * as React from 'react';
import './ExerciseSummaryRow.scss'
import { ExerciseSummary, Status } from '../../types';

export interface Props {
    summary: ExerciseSummary;
}

function ExerciseSummaryRow({ summary }: Props) {
    return (
        <div className="exercise-summary--container">
            <span className='exercise-summary--name'>{summary.exercise.name}</span>
            <span className="exercise-status--container">
                {summary.summary.map((status, index) => {
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

export default ExerciseSummaryRow;


