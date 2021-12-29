import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { GiveTheTranksComponent } from "./pages/give-the-tranks/give-the-tranks.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactoFormComponent } from "./pages/contacto-form/contacto-form.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ToycampaignComponent } from "./pages/toycampaign/toycampaign.component";
import { SearchNewsComponent } from "./pages/search-news/search-news.component";
import { RegisterGuard } from "../guards/register.guard";

const router: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "public",
    children: [
      { path: "login", component: LoginFormComponent },
      {
        path: "register",
        component: RegisterFormComponent,
        canActivate: [RegisterGuard],
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
      {
        path: "contacts",
        component: ContactoFormComponent,
      },
      {
        path: "actividades",
        component: ActivitiesListComponent,
      },
      {
        path: "searchNews",
        component: SearchNewsComponent,
      },
      {
        path: "toycampaign",
        component: ToycampaignComponent,
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
