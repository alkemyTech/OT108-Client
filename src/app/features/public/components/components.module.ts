import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SlidesComponent, NavbarComponent],
  imports: [CommonModule, NgbModule],
  exports: [
    SlidesComponent,
    NavbarComponent],
})
export class ComponentsModule {}
