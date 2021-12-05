import { NgModule } from "@angular/core";
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
import { SlidesComponent } from "./pages/slides/slides.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { UsersComponent } from "./pages/users/users.component";
import { ActividadesDetalleComponent } from "./pages/views/activities/detail/actividades-detalle/actividades-detalle/actividades-detalle.component";
import { LoaderspinnerComponent } from "./pages/loaderspinner/loaderspinner/loaderspinner.component";

const router: Routes = [
  {
    path: "",
    component: DashboardComponent,
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
        path: "categories/create",
        component: CategoriesComponent,
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
        component: SlidesComponent,
      },
      {
        path: "slides/edit/:id",
        component: SlidesComponent,
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
        path: "actividades/:id",
        component: ActividadesDetalleComponent ,
      },

      {
        path: "spinner",
        component: LoaderspinnerComponent ,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
