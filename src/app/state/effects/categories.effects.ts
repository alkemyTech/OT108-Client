import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { CategoriesService } from "src/app/features/backoffice/services/categories.service";


@Injectable()
export class CategoriesEffects {
  constructor(private actions$: Actions, private service: CategoriesService) {}
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Categories List/API] Load Categories"),
      mergeMap(() =>
      this.service.getCategory().pipe(
          map((categories) => ({
            type: "[Categories List/API] Retrieve Categories Success",
            categories: categories.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}