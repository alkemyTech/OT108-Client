import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { ActivityService } from "src/app/features/backoffice/services/activity.service";

@Injectable()
export class ActivitiesEffects {
  constructor(private actions$: Actions, private service: ActivityService) {}

  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Activities List/API] Load activities"),
      mergeMap(() =>
        this.service.getActivity().pipe(
          map((activities) => ({
            type: "[Activities List/API] Retrieve activities Success",
            items: activities.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
