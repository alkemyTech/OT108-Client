import { ActionReducerMap } from "@ngrx/store";
import { Slides } from 'src/app/models/slides';
import { slideReducer } from '../reducers/slide.reducer'

export interface AppState {
  slide: ReadonlyArray<Slides>;
}

