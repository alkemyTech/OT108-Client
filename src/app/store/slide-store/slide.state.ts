import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ActionReducerMap } from "@ngrx/store";
import { Slides } from 'src/app/models/slides';
import { slideReducer } from './slide.reducer'

export interface AppState {
  slide: ReadonlyArray<Slides>;
}

export const ROOT_REDUCERS_SLIDES: ActionReducerMap<AppState> = {
  slide:slideReducer,
};