import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { DonacionComponent } from "./pages/Donations/donacion/donacion.component";
import { GraciasComponent } from "./pages/Donations/gracias/gracias.component";

import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { DashboardScreenComponent } from "./pages/dashboard-screen/dashboard-screen.component";

import { CardComponent } from "./pages/card/card.component";
import { OrganizationDataComponent } from "./pages/organization/organization-data/organization-data.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { BackofficeUsersComponent } from "./pages/users/user-form/backoffice/backoffice-users/backoffice-users.component";
import { BackofficeActivitiesComponent } from "./pages/activities/backoffice/backoffice-activities/backoffice-activities.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "actividades",
    component: ActivityFormComponent,
  },

  {
    path: "actividades/:id",
    component: ActivityFormComponent,
  },

  { path: "users", component: UserFormComponent },
  { path: "users/:id", component: UserFormComponent },

  { path: "news", component: NewsFormComponent },
  { path: "news/:id", component: NewsFormComponent },

  { path: "categories", component: CategoriesFormComponent },
  { path: "categories/:id", component: CategoriesFormComponent },

  { path: "donar", component: DonacionComponent },

  { path: "gracias", component: GraciasComponent },

  { path: "card", component: CardComponent },

  {path:"categories", component: CategoriesFormComponent },
  {path:"categories/:id", component: CategoriesFormComponent},

  {path:"donar", component: DonacionComponent},

  {path:"gracias", component: GraciasComponent},

  {path:"backoffice/users", component: BackofficeUsersComponent},
  {path:"backoffice/users/create", component: UserFormComponent},

  {path:"backoffice/activities", component: BackofficeActivitiesComponent},
  {path:"backoffice/activities/create", component: ActivityFormComponent},

  {
    path: "slides/form",
    component: SlidesFormComponent,
  },
  {
    path: "slides/form/:id",
    component: SlidesFormComponent,
  },
  { path: "login", component: LoginFormComponent },
  {
    path: "backoffice/members/edit",
    component: MembersFormComponent,
  },
  {
    path: "backoffice/members/edit/:id",
    component: MembersFormComponent,
  },
   {path: "backoffice/organization", component:OrganizationDataComponent },
  {
    path: "backoffice/organization/edit",
    component: OrganizationFormComponent
  },

  { path: "register", component: RegisterFormComponent },

  { path: "backoffice", component: DashboardScreenComponent },
  { path: "register", component: RegisterFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}