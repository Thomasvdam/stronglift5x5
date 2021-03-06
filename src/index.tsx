import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import './app.scss';


import WorkoutRow from './components/WorkoutRow';
import { AppState, Exercise, SessionOverview, Status, WorkoutPart } from './types';
import SessionOverviewBox from './components/SessionOverviewBox';
import ExerciseRow from './components/ExerciseRow';
import WeightSelector from './containers/WeightSelector';
import configureStore from './store';

const squat:Exercise = {
  name: 'Squat',
  weight: 100,
  history: [
    { weight: 97.5, status: Status.Completed },
    { weight: 95, status: Status.Completed },
    { weight: 92.5, status: Status.Completed },
  ]
};

const benchPress:Exercise = {
  name: 'Bench Press',
  weight: 85,
  history: [
    { weight: 82.5, status: Status.Completed },
    { weight: 80, status: Status.Completed },
    { weight: 0, status: Status.Open },
  ]
};

const barbellRow:Exercise = {
  name: 'Barbell Row',
  weight: 55,
  history: [
    { weight: 52.5, status: Status.Completed },
    { weight: 50, status: Status.Completed },
    { weight: 0, status: Status.Open },
  ]
};

const ohp:Exercise = {
  name: 'OHP',
  weight: 35,
  history: [
    { weight: 32.5, status: Status.Completed },
    { weight: 30, status: Status.Completed },
    { weight: 0, status: Status.Open },
  ]
};

const deadlift:Exercise = {
  name: 'Deadlift',
  weight: 105,
  history: [
    { weight: 100, status: Status.Completed },
    { weight: 95, status: Status.Completed },
    { weight: 0, status: Status.Open },
  ]
};

const workoutPart:WorkoutPart = {
  sets: [{ status: Status.Open}],
  exercise: squat,
  reps: 5,
  done: false
}

const workoutPart2:WorkoutPart = {
  sets: [{ status: Status.Open}, { status: Status.Failed}],
  exercise: squat,
  reps: 5,
  done: false
}

const workoutPart3:WorkoutPart = {
  sets: [{ status: Status.Open}, { status: Status.Failed}, { status: Status.Completed}],
  exercise: squat,
  reps: 5,
  done: false
}

const overview: SessionOverview = {
  name: 'A',
  active: true,
  exercises: [squat, benchPress, barbellRow],
}

const overview2: SessionOverview = {
  name: 'B',
  active: false,
  exercises: [squat, ohp, deadlift],
}

const history = window.reactHistory || createHistory();
window.reactHistory = history;

const store = configureStore({
  exercise: ohp,
}, history);

const HomePage = () => (
  <div>
    <h1>Stronglift 5x5</h1>
    <div className="session-selector">
      <SessionOverviewBox overview={overview}></SessionOverviewBox>
      <SessionOverviewBox overview={overview2}></SessionOverviewBox>

    </div>

    <ExerciseRow exercise={squat}></ExerciseRow>
    <ExerciseRow exercise={benchPress}></ExerciseRow>
    <ExerciseRow exercise={barbellRow}></ExerciseRow>
    <ExerciseRow exercise={ohp}></ExerciseRow>
    <ExerciseRow exercise={deadlift}></ExerciseRow>
  </div>
);

const WorkoutPage = () => (
  <div>
    <WorkoutRow workoutPart={workoutPart}></WorkoutRow>
    <WorkoutRow workoutPart={workoutPart2}></WorkoutRow>
    <WorkoutRow workoutPart={workoutPart3}></WorkoutRow>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/workout' component={WorkoutPage}></Route>
        <Route path='/weightselector/:exerciseId' component={WeightSelector}></Route>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
