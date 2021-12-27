import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [CardComponent, SkeletonComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxSkeletonLoaderModule, FormsModule],
  exports: [SkeletonComponent,HeaderComponent,SidebarComponent],
})
export class ComponentsModule {}
