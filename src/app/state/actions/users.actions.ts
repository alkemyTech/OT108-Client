import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export const retrievedUsersList = createAction(
  "[Users List/API] Retrieve Users Success",
  props<{ users: ReadonlyArray<User> }>()
);
