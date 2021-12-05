import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [SlidesComponent],
  imports: [CommonModule, NgbModule],
  exports: [SlidesComponent],
})
export class ComponentsModule {}
