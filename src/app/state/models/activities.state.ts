import { Activity } from "src/app/models/activities";

export interface ActivitiesState {
  loading: boolean;
  items: ReadonlyArray<Activity>;
}
