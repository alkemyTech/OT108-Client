import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { retrievedUsersList } from "../actions/users.actions";

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUsersList, (oldState, { users }) => {
    return [...oldState, ...users];
  })
);
