import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderspinnerComponent } from './loaderspinner/loaderspinner.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [LoaderspinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],exports:[LoaderspinnerComponent]
})
export class LoaderspinnerModule { }
