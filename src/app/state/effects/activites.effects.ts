import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { ActivityService } from "src/app/features/backoffice/services/activity.service";
import { DialogService } from "src/app/services/dialog.service";
import {
  Activities_FAIL,
  FailActivitiesList,
} from "../actions/activities.actions";

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private service: ActivityService,
    private serviceDialog: DialogService
  ) {}

  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Activities List/API] Load activities"),
      mergeMap(() =>
        this.service.getActivity().pipe(
          map((activities) => ({
            type: "[Activities List/API] Retrieve activities Success",
            items: activities.data,
          })),
          catchError(() => of({ type: Activities_FAIL }))
        )
      )
    )
  );

  activitiesFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FailActivitiesList),
      tap((action) => {
        this.serviceDialog.openErrorDialog("Error al cargar las actividades");
      })
    )
  );
}
