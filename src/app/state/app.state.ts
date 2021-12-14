import { ActionReducerMap } from "@ngrx/store";
import { Activity } from "../models/activities";
import { ActivitiesState } from "./models/activities.state";
import { ActivitiesReducer } from "./reducers/activities.reducers";

export interface AppState {
  activities: ReadonlyArray<Activity>;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  activities: ActivitiesReducer,
};
