import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapsComponent } from '../leaflet-maps.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [LeafletMapsComponent],
  imports: [
    CommonModule,
    LeafletModule
  ],exports:[LeafletMapsComponent]
})
export class LeafletmapsModule { }
