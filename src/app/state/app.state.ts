import { ActionReducerMap } from "@ngrx/store";
import { Auth } from "../models/auth";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import * as auth from "./reducers/auth.reducers";
import { Activity } from "../models/activities";
import { ActivitiesReducer } from "./reducers/activities.reducers";
import { slideReducer } from "./reducers/slide.reducer";
import { Slides } from "../models/slides";

export interface AppState {
  users: ReadonlyArray<User>;
  authState: auth.AuthState;
  activities: ReadonlyArray<Activity>;
  slide: ReadonlyArray<Slides>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  authState: auth.AuthReducer,
  activities: ActivitiesReducer,
  slide: slideReducer,
};
