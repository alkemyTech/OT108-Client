import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DonationsComponent } from "./donations/donations.component";
import { GiveTheTranksComponent } from "./give-the-tranks/give-the-tranks.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { LoaderspinnerModule } from "src/app/components/loaderspinner/loaderspinner.module";

import { RouterModule } from "@angular/router";
import { ActivitiesListComponent } from "./activities/activities-list/activities-list.component";
import { ActivitiesDetailsComponent } from "./activities/activities-details/activities-details.component";
import { ComponentssModule } from "src/app/components/components.module";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    DonationsComponent,
    GiveTheTranksComponent,
    HomeComponent,
    ActivitiesListComponent,
    ActivitiesDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    LoaderspinnerModule,
    RouterModule,
    ComponentssModule,
  ],
})
export class PagesModule {}
