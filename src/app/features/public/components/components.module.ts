import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SlidesComponent, NavbarComponent],
  imports: [CommonModule, NgbModule,RouterModule],
=======
import { TitlesComponent } from "./titles/titles.component";

@NgModule({
  declarations: [SlidesComponent, NavbarComponent,TitlesComponent],
  imports: [CommonModule, NgbModule],
>>>>>>> main
  exports: [
    SlidesComponent,
    NavbarComponent,
    TitlesComponent
  ],
})
export class ComponentsModule {}
