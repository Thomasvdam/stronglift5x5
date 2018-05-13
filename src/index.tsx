import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './app.scss';


import WorkoutRow from './components/WorkoutRow';
import { AppState, Exercise, SessionOverview, Status, WorkoutPart } from './types';
import SessionOverviewBox from './components/SessionOverviewBox';
import ExerciseRow from './components/ExerciseRow';
import WeightSelector from './containers/WeightSelector';
import configureStore from './store';

const squat:Exercise = {
  name: 'Squat',
  weight: 95,
};

const benchPress:Exercise = {
  name: 'Bench Press',
  weight: 85,
};

const barbellRow:Exercise = {
  name: 'Barbell Row',
  weight: 55,
};

const ohp:Exercise = {
  name: 'OHP',
  weight: 32.5,
};

const deadlift:Exercise = {
  name: 'Deadlift',
  weight: 100,
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
  exercises: [
    { exercise: squat, summary: [Status.Open, Status.Failed, Status.Completed]},
    { exercise: benchPress, summary: [Status.Open, Status.Failed, Status.Completed]},
    { exercise: barbellRow, summary: [Status.Open, Status.Failed, Status.Completed]},
  ]
}

const overview2: SessionOverview = {
  name: 'B',
  active: false,
  exercises: [
    { exercise: squat, summary: [Status.Open, Status.Failed, Status.Completed]},
    { exercise: ohp, summary: [Status.Open, Status.Failed, Status.Completed]},
    { exercise: deadlift, summary: [Status.Open, Status.Failed, Status.Completed]},
  ]
}

const store = configureStore({
  exercise: squat
});

const App = () => (
  <div>
    <h1>Stronglift 5x5</h1>
    <WorkoutRow workoutPart={workoutPart}></WorkoutRow>
    <WorkoutRow workoutPart={workoutPart2}></WorkoutRow>
    <WorkoutRow workoutPart={workoutPart3}></WorkoutRow>
    <div className="session-selector">
      <SessionOverviewBox overview={overview}></SessionOverviewBox>
      <SessionOverviewBox overview={overview2}></SessionOverviewBox>

    </div>

    <ExerciseRow exercise={squat}></ExerciseRow>
    <ExerciseRow exercise={benchPress}></ExerciseRow>
    <ExerciseRow exercise={barbellRow}></ExerciseRow>
    <ExerciseRow exercise={ohp}></ExerciseRow>
    <ExerciseRow exercise={deadlift}></ExerciseRow>

    <WeightSelector></WeightSelector>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept();
  module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').weight;
      store.replaceReducer(nextRootReducer);
  });
}
