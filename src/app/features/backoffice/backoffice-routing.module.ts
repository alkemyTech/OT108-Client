import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { ActivityFormComponent } from "./pages/activity-form/activity-form.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { MemberFormComponent } from "./pages/member-form/member-form.component";
import { NewsComponent } from "./pages/news/news.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { OrganizationEditComponent } from "./pages/organization-edit/organization-edit.component";
import { SlideComponent } from "./pages/slide/slide.component";
import { SlideFormComponent } from "./pages/slide-form/slide-form.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { UsersComponent } from "./pages/users/users.component";
import { ActividadesDetalleComponent } from "./pages/views/activities/detail/actividades-detalle/actividades-detalle/actividades-detalle.component";
import { SetupProgressComponent } from "./pages/setup-progress/setup-progress/setup-progress.component";
import { CategoriesListComponent } from "./pages/categories-list/categories-list.component";
import { CategoriesDetailsComponent } from "./pages/categories-details/categories-details.component";
import { HomeFormComponent } from "./pages/home-form/home-form.component";
import { AuthGuard } from "../guards/auth.guard";
import { HomeComponent } from "../public/pages/home/home.component";

const router: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "backoffice",
    children: [
      {
        path: "activities-list",
        component: ActivitiesComponent,
      },
      {
        path: "activities/create",
        component: ActivityFormComponent,
      },
      {
        path: "activities/edit/:id",
        component: ActivityFormComponent,
      },
      {
        path: "actividades/:id",
        component: ActividadesDetalleComponent,
      },
      {
        path: "categories-list",
        component: CategoriesListComponent,
      },
      {
        path: "categories/create",
        component: CategoriesComponent,
      },
      {
        path: "categories/:id",
        component: CategoriesDetailsComponent,
      },
      {
        path: "categories/edit/:id",
        component: CategoriesComponent,
      },
      {
        path: "member/create",
        component: MemberFormComponent,
      },
      {
        path: "member/edit/:id",
        component: MemberFormComponent,
      },
      {
        path: "news/create",
        component: NewsComponent,
      },
      {
        path: "news/edit/:id",
        component: NewsComponent,
      },
      {
        path: "organization",
        component: OrganizationComponent,
      },
      {
        path: "organization/edit",
        component: OrganizationEditComponent,
      },
      {
        path: "slides",
        component: SlideComponent,
      },
      {
        path: "slides/create",
        component: SlideFormComponent,
      },
      {
        path: "slides/edit/:id",
        component: SlideFormComponent,
      },
      {
        path: "user-list",
        component: UsersListComponent,
      },
      {
        path: "user/create",
        component: UsersComponent,
      },
      {
        path: "user/edit/:id",
        component: UsersComponent,
      },

      {
        path: "progress",
        component: SetupProgressComponent,
      },
      {
        path: "home-form",
        component: HomeFormComponent,
      },
      {
        path: "Dashboard",
        component: DashboardComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
