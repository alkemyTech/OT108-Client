import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/models/activities";

export const loadActivitiesList = createAction(
  "[Activities List/API] Load activities"
);
export const retrievedActivitiesList = createAction(
  "[Activities List/API] Retrieve activities Success",
  props<{ items: ReadonlyArray<Activity> }>()
);
