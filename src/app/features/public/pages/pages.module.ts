import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DonationsComponent } from './donations/donations.component';
import { GiveTheTranksComponent } from './give-the-tranks/give-the-tranks.component';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, DonationsComponent, GiveTheTranksComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PagesModule {}
