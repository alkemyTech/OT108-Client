import { Action,createReducer, on } from "@ngrx/store";
import { Slides } from "src/app/models/slides";
import * as slideActions from '../actions/slide.actions';
import * as slideState from '../models/slide.state';

export const initialState: ReadonlyArray<Slides> = [];

export const slideReducer = createReducer(
    initialState,
    on(slideActions.getAllSlides, (state) => {
      return [...state];
    }),
  
    on(slideActions.getAllSlidesSuccess, (state, { slide }) => {
      return [...state, ...slide];
    })
  );

    // export function reducer(state: slideState.SlideState, action: Action) {
    //     return slideReducer(state, action);
    //   }    