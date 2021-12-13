import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SlideEffects } from './slide.effects'
import { reducer } from './slide.reducer';
import { featureKey } from './slide.state';

@NgModule({
    imports: [
      StoreModule.forFeature(featureKey, reducer),
      EffectsModule.forFeature([SlideEffects])
    ]
  })
  export class SlideStoreModule { }