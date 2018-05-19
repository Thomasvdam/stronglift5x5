import * as React from 'react';
import './SessionOverviewBox.scss'
import { SessionOverview, Status } from '../../types';

export interface Props {
    overview: SessionOverview;
}

function SessionOverviewBox({ overview }: Props) {
    return (
        <div className={`session-overview--container ${overview.active ? 'active' : ''}`}>
            <h2>{overview.name}</h2>
            {overview.exercises.map((exercise, index) => (
                <h4 key={index}>{exercise.name}</h4>
            ))}
        </div>
    )
}

export default SessionOverviewBox;
