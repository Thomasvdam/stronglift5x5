import * as React from 'react';
import './ProgressBar.scss';
import { Set, Status } from '../../types';

export interface Props {
    active: boolean;
    sets: Set[];
}

function ProgressBar({ active, sets }: Props) {
    if (!active) {
        return null;
    }

    return (
        <div className="progress-bar">
            {sets.map((set, index) => {
                return (
                    <div key={index} className={'progress-bar--part ' + getPartClassName(set.status)}></div>
                )
            })}
        </div>
    )
}

const getPartClassName = (status: Status) => {
    switch (status) {
        case Status.Open:
            return 'progress-bar--part--open';
        case Status.Completed:
            return 'progress-bar--part--completed';
        case Status.Failed:
            return 'progress-bar--part--failed';
        default:
            return 'progress-bar--part--open';
    }
}

export default ProgressBar;
