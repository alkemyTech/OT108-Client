import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CardsComponent } from "./cards/cards.component";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";



@NgModule({
  declarations: [CardComponent, CardsComponent,SkeletonComponent],
  imports: [CommonModule, ReactiveFormsModule,NgxSkeletonLoaderModule],
  exports: [CardsComponent,SkeletonComponent],
})
export class ComponentsModule {}
