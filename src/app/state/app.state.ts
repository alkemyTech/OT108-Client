import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import { Activity } from "../models/activities";
import { ActivitiesReducer } from "./reducers/activities.reducers";
import { slideReducer } from "./reducers/slide.reducer";
import { Slides } from "../models/slides";

export interface AppState {
  users: ReadonlyArray<User>;
  activities: ReadonlyArray<Activity>;
  slide: ReadonlyArray<Slides>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  activities: ActivitiesReducer,
  slide:slideReducer
};
