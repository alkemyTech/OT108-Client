import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import { Categories } from "../models/categories";
import { categoriesReducer } from "./reducers/categories.reducers";

export interface AppState {
  users: ReadonlyArray<User>;
  categories: ReadonlyArray<Categories>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  categories:categoriesReducer,
};
