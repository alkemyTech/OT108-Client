import { ActionReducerMap } from "@ngrx/store";
import { Auth } from "../models/auth";
import { User } from "../models/user";
import { usersReducer } from "./reducers/users.reducers";
import * as auth from "./reducers/auth.reducers";

export interface AppState {
  users: ReadonlyArray<User>;
  authState: auth.AuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
  authState: auth.AuthReducer,
};
