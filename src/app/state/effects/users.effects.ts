import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { UsersService } from "src/app/features/backoffice/services/users.service";

@Injectable()
export class Usersffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Users List/API] Load Users"),
      mergeMap(() =>
        this.service.getUsers().pipe(
          map((users) => ({
            type: "[Users List/API] Retrieve Users Success",
            users,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: UsersService) {}
}
