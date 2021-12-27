import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { TitlesComponent } from "./titles/titles.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { CountdownComponent } from './countdown/countdown.component';
import { ComponentcampaignComponent } from './componentcampaign/componentcampaign.component';

@NgModule({
  declarations: [SlidesComponent, NavbarComponent,TitlesComponent, FooterComponent, CountdownComponent, ComponentcampaignComponent],
  imports: [CommonModule, NgbModule,RouterModule,],
  exports: [
    SlidesComponent,
    NavbarComponent,
    TitlesComponent,
    FooterComponent,
    CountdownComponent,
    ComponentcampaignComponent,
  ],
})
export class ComponentsModule {}
