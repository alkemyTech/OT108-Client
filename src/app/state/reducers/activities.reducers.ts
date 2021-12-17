import { createReducer, on } from "@ngrx/store";
import { Activity } from "src/app/models/activities";
import {
  loadActivitiesList,
  retrievedActivitiesList,
} from "../actions/activities.actions";
import { ActivitiesState } from "../models/activities.state";

export const initialState: ReadonlyArray<Activity> = [];

export const ActivitiesReducer = createReducer(
  initialState,
  on(loadActivitiesList, (state) => {
    return [...state];
  }),
  on(retrievedActivitiesList, (state, { items }) => {
    return [...state, ...items];
  })
);
