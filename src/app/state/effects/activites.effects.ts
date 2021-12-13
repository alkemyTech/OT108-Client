import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { ActivityService } from "src/app/features/backoffice/services/activity.service";

import * as ActivitiesActions from "../actions/activities.actions";

@Injectable()
export class ActivitiesEffects {
  findAllActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.findAllActivities),
      switchMap(() =>
        this.service.getActivity().pipe(
          map((Activities) =>
            ActivitiesActions.findAllActivitiesSuccess({ Activities })
          ),
          catchError((error) =>
            of(ActivitiesActions.findAllActivitiesFail({ error }))
          )
        )
      )
    )
  );

  findOneById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.findOneActivity),
      switchMap((action) =>
        this.service.getActivity(action.id).pipe(
          map((Activity) => ActivitiesActions.findOneSuccess({ Activity })),
          catchError((error) =>
            of(ActivitiesActions.findOneActivityFail({ error }))
          )
        )
      )
    )
  );

  createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.createActivity),
      switchMap((action) =>
        this.service.creationActivity(action.Activity).pipe(
          map((Activity) =>
            ActivitiesActions.createActivitySuccess({ Activity })
          ),
          catchError((error) =>
            of(ActivitiesActions.createActivityFail({ error }))
          )
        )
      )
    )
  );

  updateActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.updateActivity),
      switchMap((action) =>
        this.service
          .editActivity(action.Activity.id.toString(), action.Activity)
          .pipe(
            map((Activity) =>
              ActivitiesActions.updateActivitySuccess({ Activity })
            ),
            catchError((error) =>
              of(ActivitiesActions.updateActivityFail({ error }))
            )
          )
      )
    )
  );

  deleteActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.deleteActivity),
      switchMap((action) =>
        this.service.delateActivity(action.id).pipe(
          map(() => ActivitiesActions.deleteActivitySuccess({ id: action.id })),
          catchError((error) =>
            of(ActivitiesActions.deleteActivityFail({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ActivityService) {}
}
