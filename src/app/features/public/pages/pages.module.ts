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

@NgModule({
  declarations: [
    LoginFormComponent, 
    RegisterFormComponent, 
    DonationsComponent, 
    GiveTheTranksComponent,
    HomeComponent],
  imports: [CommonModule, ReactiveFormsModule,ComponentsModule],
})
export class PagesModule {}
