import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SlideState, featureKey, adapter } from './slide.state';
import * as slideActions from './slide.actions';

const {
    selectEntities,
    selectAll
  } = adapter.getSelectors();

  const getSlideState = createFeatureSelector<SlideState>(featureKey);

  const selectActivitySensorId = createSelector(
    getSlideState,
    (state: SlideState) => state.selectedId
  );

  export const selectAllSlides = createSelector(getSlideState, selectAll);