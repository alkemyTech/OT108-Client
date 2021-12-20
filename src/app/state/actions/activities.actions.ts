import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/models/activities";
export const Activities_FAIL = "[Activities List/API] Activities fail";
export const loadActivitiesList = createAction(
  "[Activities List/API] Load activities"
);
export const retrievedActivitiesList = createAction(
  "[Activities List/API] Retrieve activities Success",
  props<{ items: ReadonlyArray<Activity> }>()
);
export const FailActivitiesList = createAction(Activities_FAIL);
