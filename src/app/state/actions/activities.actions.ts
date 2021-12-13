import { createAction, props } from "@ngrx/store";
import { Activity, ActivityId } from "src/app/models/activities";

export enum type {
  SELECT_ACTIVITY = "[ ACTIVITY ] Select a Activity",
  FIND_ALL_ACTIVITIES = "[ ACTIVITY ] Find All Activities",
  FIND_ALL_ACTIVITIES_FAIL = "[ ACTIVITY ] Find All Activities Fail",
  FIND_ALL_ACTIVITIES_SUCCESS = "[ ACTIVITY ] Find All Activities Success",
  FIND_ONE_ACTIVITY = "[ ACTIVITY ] Find One Activity",
  FIND_ONE_ACTIVITY_FAIL = "[ ACTIVITY ] Find One Activity Fail",
  FIND_ONE_ACTIVITY_SUCCESS = "[ ACTIVITY ] Find One Activity Success",
  CREATE_ACTIVITY = "[ ACTIVITY ] Create Activity",
  CREATE_ACTIVITY_FAIL = "[ ACTIVITY ] Create Activity Fail",
  CREATE_ACTIVITY_SUCCESS = "[ ACTIVITY ] Create Activity Success",
  UPDATE_ACTIVITY = "[ ACTIVITY ] Update Activity",
  UPDATE_ACTIVITY_FAIL = "[ ACTIVITY ] Update Activity Fail",
  UPDATE_ACTIVITY_SUCCESS = "[ ACTIVITY ] Update Activity Success",
  PATCH_ACTIVITY = "[ ACTIVITY ] Patch Activity",
  PATCH_ACTIVITY_FAIL = "[ ACTIVITY ] Patch Activity Fail",
  PATCH_ACTIVITY_SUCCESS = "[ ACTIVITY ] Patch Activity Success",
  DELETE_ACTIVITY = "[ ACTIVITY ] Delete Activity",
  DELETE_ACTIVITY_FAIL = "[ ACTIVITY ] Delete Activity Fail",
  DELETE_ACTIVITY_SUCCESS = "[ ACTIVITY ] Delete Activity Success",
}

export const SelectActivity = createAction(
  type.SELECT_ACTIVITY,
  props<{ id: string }>()
);
export const findAllActivities = createAction(type.FIND_ALL_ACTIVITIES);
export const findAllActivitiesFail = createAction(
  type.FIND_ALL_ACTIVITIES_FAIL,
  props<{ error: any }>()
);
export const findAllActivitiesSuccess = createAction(
  type.FIND_ALL_ACTIVITIES_SUCCESS,
  props<{ Activities: Object }>()
);
export const findOneActivity = createAction(
  type.FIND_ONE_ACTIVITY,
  props<{ id: string }>()
);
export const findOneActivityFail = createAction(
  type.FIND_ONE_ACTIVITY_FAIL,
  props<{ error: any }>()
);
export const findOneSuccess = createAction(
  type.FIND_ONE_ACTIVITY_SUCCESS,
  props<{ Activity: object }>()
);
export const createActivity = createAction(
  type.CREATE_ACTIVITY,
  props<{ Activity: Activity }>()
);
export const createActivityFail = createAction(
  type.CREATE_ACTIVITY_FAIL,
  props<{ error: any }>()
);
export const createActivitySuccess = createAction(
  type.CREATE_ACTIVITY_SUCCESS,
  props<{ Activity: Activity }>()
);
export const updateActivity = createAction(
  type.UPDATE_ACTIVITY,
  props<{ Activity: Activity }>()
);
export const updateActivityFail = createAction(
  type.UPDATE_ACTIVITY_FAIL,
  props<{ error: any }>()
);
export const updateActivitySuccess = createAction(
  type.UPDATE_ACTIVITY_SUCCESS,
  props<{ Activity: Activity }>()
);
export const patchActivity = createAction(
  type.PATCH_ACTIVITY,
  props<{ id: string; Activity: Partial<Activity> }>()
);
export const patchActivityFail = createAction(
  type.PATCH_ACTIVITY_FAIL,
  props<{ error: any }>()
);
export const patchActivitySuccess = createAction(
  type.PATCH_ACTIVITY_SUCCESS,
  props<{ Activity: Activity }>()
);
export const deleteActivity = createAction(
  type.DELETE_ACTIVITY,
  props<{ id: string }>()
);
export const deleteActivityFail = createAction(
  type.DELETE_ACTIVITY_FAIL,
  props<{ error: any }>()
);
export const deleteActivitySuccess = createAction(
  type.DELETE_ACTIVITY_SUCCESS,
  props<{ id: string }>()
);
