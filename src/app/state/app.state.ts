import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState {
  users: ReadonlyArray<User>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
};
