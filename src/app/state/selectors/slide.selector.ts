import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Slides } from 'src/app/models/slides';



  export const selectAllSlides = createFeatureSelector<ReadonlyArray<Slides>>("slide");