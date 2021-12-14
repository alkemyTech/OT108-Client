import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { loadUsersList, retrievedUsersList } from "../actions/users.actions";

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(loadUsersList, (state) => {
    return [...state];
  }),

  on(retrievedUsersList, (state, { users }) => {
    return [...state, ...users];
  })
);
