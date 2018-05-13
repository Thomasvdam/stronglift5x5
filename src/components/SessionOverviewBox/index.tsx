import * as React from 'react';
import './SessionOverviewBox.scss'
import { SessionOverview, Status } from '../../types';
import ExerciseSummaryRow from '../ExerciseSummaryRow';

export interface Props {
    overview: SessionOverview;
}

function SessionOverviewBox({ overview }: Props) {

    return (
        <div className={`session-overview--container ${overview.active ? 'active' : ''}`}>
            <h2>{overview.name}</h2>
            <div>
                {overview.exercises.map((exercise, index) => <ExerciseSummaryRow key={index} summary={exercise}></ExerciseSummaryRow>)}
            </div>
        </div>
    )
}

export default SessionOverviewBox;
