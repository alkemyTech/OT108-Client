import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { SlideService } from "src/app/services/slide.service";
import * as slideActions from "../actions/slide.actions";

@Injectable()
export class SlideEffects {
  getAllSlides$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Slides] Get All"),
      switchMap(() =>
        this.slideService.getAllSlides().pipe(
          map((slide) => ({
            type: "[Slides] Get All Success",
            slide: slide.data,
          })),
          catchError((error) => of(slideActions.getAllSlidesFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private slideService: SlideService) {}
}
