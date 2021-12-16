import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { GiveTheTranksComponent } from "./pages/give-the-tranks/give-the-tranks.component";
import { HomeComponent } from "./pages/home/home.component";

const router: Routes = [
  {
    path: "",
    children: [
      { path: "login", component: LoginFormComponent },
      {
        path: "register",
        component: RegisterFormComponent,
      },
      {
        path: "donations",
        component: DonationsComponent,
      },
      {
        path: "thanks",
        component: GiveTheTranksComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
