import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { TitlesComponent } from "./titles/titles.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "src/app/components/footer/footer.component";
<<<<<<< HEAD
import { CountdownComponent } from './countdown/countdown.component';
import { ComponentcampaignComponent } from './componentcampaign/componentcampaign.component';

@NgModule({
  declarations: [SlidesComponent, NavbarComponent,TitlesComponent, FooterComponent, CountdownComponent, ComponentcampaignComponent],
  imports: [CommonModule, NgbModule,RouterModule,],
=======
import { DialogconfirmationComponent } from './dialogconfirmation/dialogconfirmation.component';
import { NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer'
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [SlidesComponent, NavbarComponent,TitlesComponent, FooterComponent, DialogconfirmationComponent],
  imports: [CommonModule, NgbModule,RouterModule,NgxExtendedPdfViewerModule, MatDialogModule],
>>>>>>> main
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
