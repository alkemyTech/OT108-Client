import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { ActionReducerMap } from "@ngrx/store";
import { Activity } from "../models/activities";
import { ActivitiesReducer } from "./reducers/activities.reducers";

export const adapter = createEntityAdapter<Activity>({
  selectId: (sensor: Activity) => sensor.id,
  sortComparer: false,
});

export interface ActivitiesState extends EntityState<Activity> {
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}
export const initialstate: ActivitiesState = adapter.getInitialState({
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null,
});

export const featureKey = "activities";
