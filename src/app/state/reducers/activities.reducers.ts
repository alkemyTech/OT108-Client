import * as ActivitiesState from "../app.state";
import * as ActivitiesActions from "../actions/activities.actions";
import { Action, createReducer, on } from "@ngrx/store";

export const ActivitiesReducer = createReducer(
  ActivitiesState.initialstate,
  //selecciono una actividad
  on(ActivitiesActions.SelectActivity, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  //buscar todas las actividades
  on(ActivitiesActions.findAllActivities, (state) => ({
    ...state,
    action: ActivitiesActions.type.FIND_ALL_ACTIVITIES,
    loading: true,
    error: null,
  })),
  on(ActivitiesActions.findAllActivitiesSuccess, (state, { Activities }) => {
    return ActivitiesState.adapter.addMany(Activities, {
      ...state,
      loading: false,
    });
  }),
  on(ActivitiesActions.findAllActivitiesFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),
  //buscar una actividad
  on(ActivitiesActions.findOneActivity, (state) => ({
    ...state,
    action: ActivitiesActions.type.FIND_ONE_ACTIVITY,
    loading: true,
    error: null,
  })),
  on(ActivitiesActions.findOneSuccess, (state, { Activity }) => {
    return ActivitiesState.adapter.setOne(Activity, {
      ...state,
      loading: false,
    });
  }),
  on(ActivitiesActions.findOneActivityFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),
  //crear una actividad
  on(ActivitiesActions.createActivity, (state) => ({
    ...state,
    action: ActivitiesActions.type.CREATE_ACTIVITY,
    loading: true,
    error: null,
  })),
  on(ActivitiesActions.createActivitySuccess, (state, { Activity }) => {
    return ActivitiesState.adapter.addOne(Activity, {
      ...state,
      loading: false,
    });
  }),
  on(ActivitiesActions.createActivityFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),
  //editar una actividad
  on(ActivitiesActions.updateActivity, (state) => ({
    ...state,
    action: ActivitiesActions.type.UPDATE_ACTIVITY,
    loading: true,
    error: null,
  })),
  on(ActivitiesActions.updateActivitySuccess, (state, { Activity }) => {
    return ActivitiesState.adapter.updateOne(
      { id: Activity.id, changes: Activity },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(ActivitiesActions.updateActivityFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),
  //eliminar una actividad
  on(ActivitiesActions.deleteActivity, (state) => ({
    ...state,
    action: ActivitiesActions.type.DELETE_ACTIVITY,
    loading: true,
    error: null,
  })),
  on(ActivitiesActions.deleteActivitySuccess, (state, { id }) => {
    return ActivitiesState.adapter.removeOne(id, {
      ...state,
      loading: false,
    });
  }),
  on(ActivitiesActions.deleteActivityFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  }))
);
export function reducer(
  state: ActivitiesState.ActivitiesState,
  action: Action
) {
  return ActivitiesReducer(state, action);
}
