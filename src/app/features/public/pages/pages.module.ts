import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DonationsComponent } from './donations/donations.component';
import { GiveTheTranksComponent } from './give-the-tranks/give-the-tranks.component';
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { LoaderspinnerModule } from "src/app/components/loaderspinner/loaderspinner.module";
import { ContactoFormComponent } from "./contacto-form/contacto-form.component";
import { LeafletmapsModule } from "src/app/components/leaflet-maps/leafletmaps/leafletmaps.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    LoginFormComponent, 
    RegisterFormComponent, 
    DonationsComponent, 
    GiveTheTranksComponent,
    ContactoFormComponent,
    HomeComponent],
   imports: [CommonModule, ReactiveFormsModule,ComponentsModule,LoaderspinnerModule, RouterModule,LeafletmapsModule,],
})
export class PagesModule {}
