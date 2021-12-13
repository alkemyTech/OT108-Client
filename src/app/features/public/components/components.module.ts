import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { TitlesComponent } from "./titles/titles.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SlidesComponent, NavbarComponent,TitlesComponent],
  imports: [CommonModule, NgbModule,RouterModule,],
  exports: [
    SlidesComponent,
    NavbarComponent,
    TitlesComponent
  ],
})
export class ComponentsModule {}
