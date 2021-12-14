import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import { Activity } from "../models/activities";
import { ActivitiesReducer } from "./reducers/activities.reducers";

export interface AppState {
  users: ReadonlyArray<User>;
  activities: ReadonlyArray<Activity>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  activities: ActivitiesReducer,
};
