import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { SlideService } from 'src/app/services/slide.service';
import * as slideActions from './slide.actions';

@Injectable()
export class SlideEffects{
    getAllSlides$ = createEffect(() => 
    this.actions$.pipe(
      ofType(slideActions.getAllSlides),
      switchMap(() =>
        this.slideService.getAllSlides().pipe(
          map((slide) => slideActions.getAllSlidesSuccess({ slide })),
          catchError((error) => of(slideActions.getAllSlidesFail({ error })))
        )
    )
    )
  )

  constructor(
    private actions$: Actions,
    private slideService: SlideService
  ) {}
}