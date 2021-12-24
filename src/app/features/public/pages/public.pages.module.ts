import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ReactiveFormsModule, FormsModule  } from "@angular/forms";
import { DonationsComponent} from "./donations/donations.component";
import { GiveTheTranksComponent } from "./give-the-tranks/give-the-tranks.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { LoaderspinnerModule } from "src/app/components/loaderspinner/loaderspinner.module";
import { ContactoFormComponent } from "./contacto-form/contacto-form.component";
import { LeafletmapsModule } from "src/app/components/leaflet-maps/leafletmaps/leafletmaps.module";
import { PagesModule } from "../../backoffice/pages/pages.module";

import { RouterModule } from "@angular/router";
import { ComponentssModule } from "src/app/components/components.module";

import { GoogleMapsModule } from "@angular/google-maps";
import { ActivitiesDetailsComponent } from "./activities/activities-details/activities-details.component";
import { ActivitiesListComponent } from "./activities/activities-list/activities-list.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SearchNewsComponent } from "./search-news/search-news.component";
@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    DonationsComponent,
    GiveTheTranksComponent,
    HomeComponent,
    ActivitiesDetailsComponent,
    ContactoFormComponent,
    ActivitiesListComponent,
    SearchNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    LoaderspinnerModule,
    RouterModule,
    LeafletmapsModule,
    ComponentssModule,
    GoogleMapsModule,
    GooglePlaceModule,
    PagesModule,
    FormsModule
  ],
})
export class PublicPagesModule {}
