import { createSelector, createFeatureSelector } from "@ngrx/store";
import { User } from "src/app/models/user";

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>("users");
