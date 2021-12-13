import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ActivitiesState, featureKey, adapter } from "../app.state";
import * as ActivitiesActions from "../actions/activities.actions";
const { selectEntities, selectAll } = adapter.getSelectors();

const getActivityState = createFeatureSelector<ActivitiesState>(featureKey);

const selectActivityEntities = createSelector(getActivityState, selectEntities);

const selectActivitySensorId = createSelector(
  getActivityState,
  (state: ActivitiesState) => state.selectedId
);

export const selectAllActivities = createSelector(getActivityState, selectAll);

export const selectCurrentActivity = createSelector(
  selectActivityEntities,
  selectActivitySensorId,
  (userEntities, userId) => userId && userEntities[userId]
);
export const isCreateSuccess = createSelector(
  getActivityState,
  (state: ActivitiesState) =>
    state.action === ActivitiesActions.type.CREATE_ACTIVITY &&
    !state.loading &&
    !state.error
);

export const isUpdateSuccess = createSelector(
  getActivityState,
  (state: ActivitiesState) =>
    state.action === ActivitiesActions.type.UPDATE_ACTIVITY &&
    !state.loading &&
    !state.error
);

export const isDeleteSuccess = createSelector(
  getActivityState,
  (state: ActivitiesState) =>
    state.action === ActivitiesActions.type.DELETE_ACTIVITY &&
    !state.loading &&
    !state.error
);
