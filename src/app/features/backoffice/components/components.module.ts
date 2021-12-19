import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [CardComponent, SkeletonComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxSkeletonLoaderModule],
  exports: [SkeletonComponent],
})
export class ComponentsModule {}
