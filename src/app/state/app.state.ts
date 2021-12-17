import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import { Activity } from "../models/activities";
import { ActivitiesReducer } from "./reducers/activities.reducers";
import { slideReducer } from "./reducers/slide.reducer";
import { Slides } from "../models/slides";
import { Categories } from "../models/categories";
import { categoriesReducer } from "./reducers/categories.reducers";

export interface AppState {
  users: ReadonlyArray<User>;
  activities: ReadonlyArray<Activity>;
  slide: ReadonlyArray<Slides>;
  categories: ReadonlyArray<Categories>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  categories:categoriesReducer,
  activities: ActivitiesReducer,
  slide:slideReducer,
};
