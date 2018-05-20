export enum Status {
    Open,
    Failed,
    Completed,
} 

export interface Set {
    status: Status;
}

export interface ExerciseHistory {
    weight: number;
    status: Status;
}

export interface Exercise {
    id: number;
    name: string,
    weight: number;
    history: ExerciseHistory[];
}

export interface WorkoutPart {
    exercise: Exercise;
    sets: Set[];
    reps: number;
    done: boolean;
}

export interface Workout {
    exercise: Exercise;
    parts: WorkoutPart[];
}

export interface Session {
    name: string;
    workouts: Workout[];
}

export interface SessionOverview {
    name: string;
    active: boolean;
    exercises: Exercise[];
}

export interface AppState {
    exercise: Exercise;
}

// Development globals
declare global {
    interface Window {
        store: any;
        reactHistory: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }

    interface NodeModule {
        hot: any;
    }
}