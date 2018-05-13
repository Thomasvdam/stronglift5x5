export enum Status {
    Open,
    Failed,
    Completed,
} 

export interface Set {
    status: Status;
}

export interface Exercise {
    name: string,
    weight: number;
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

export interface ExerciseSummary {
    exercise: Exercise;
    summary: Status[];
}

export interface SessionOverview {
    name: string;
    active: boolean;
    exercises: ExerciseSummary[];
}

export interface AppState {
    exercise: Exercise;
}
