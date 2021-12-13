import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ActivitiesEffects } from "./effects/activites.effects";
@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ActivitiesEffects]),
  ],
})
export class ActivityStoreModule {}
