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

import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },

  { path: "users", component: UserFormComponent },
  { path: "users/:id", component: UserFormComponent },

  { path: "news", component: NewsFormComponent },
  { path: "news/:id", component: NewsFormComponent },

  { path: "categories", component: CategoriesFormComponent },
  { path: "categories/:id", component: CategoriesFormComponent },

  { path: "donar", component: DonacionComponent },

  { path: "gracias", component: GraciasComponent },

  {
    path: "slides/form",
    component: SlidesFormComponent,
  },
  {
    path: "slides/form/:id",
    component: SlidesFormComponent,
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "backoffice/members/edit",
    component: MembersFormComponent,
  },
  {
    path: "backoffice/members/edit/:id",
    component: MembersFormComponent,
  },

  { path: "register", component: RegisterFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
