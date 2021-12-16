import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Activity } from "src/app/models/activities";
import { AppState } from "../app.state";
import { ActivitiesState } from "../models/activities.state";

export const selectActivities =
  createFeatureSelector<ReadonlyArray<Activity>>("activities");
