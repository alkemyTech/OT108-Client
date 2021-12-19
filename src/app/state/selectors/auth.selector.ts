import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "../reducers/auth.reducers";
export const creatFeature = (state: AppState) => state.authState;

export const selectAuth = createSelector(
  creatFeature,
  (state: AuthState) => state.isAuthenticated
);

export const selectUser = createSelector(
  creatFeature,
  (state: AuthState) => state.user?.email
);
