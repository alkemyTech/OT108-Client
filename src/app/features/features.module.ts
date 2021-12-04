import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SlidesRoutingModule } from "./pages/slides/slides-routing.module";
import { AppRoutingModule } from "./app-routing.module";

import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { DonacionComponent } from "./pages/Donations/donacion/donacion.component";
import { GraciasComponent } from "./pages/Donations/gracias/gracias.component";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { CKEditorModule } from "ng2-ckeditor";
import { ActivitiesModule } from "./pages/activities/activity-form/activities.module";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { DashboardScreenModule } from "./pages/dashboard-screen/dashboard-screen.module";

import { RegisterFormModule } from "./pages/auth/register-form/register-form.module";
import { LoginFormModule } from "./pages/auth/login-form/login-form.module";
import { CardComponent } from './pages/card/card.component';


import { OrganizationDataComponent } from "./pages/organization/organization-data/organization-data.component";
import { BackofficeUsersComponent } from './pages/users/user-form/backoffice/backoffice-users/backoffice-users.component';
import { BackofficeActivitiesComponent } from './pages/activities/backoffice/backoffice-activities/backoffice-activities.component';
import { BackofficeSlidesComponent } from './pages/slides/backoffice/backoffice-slides/backoffice-slides.component';
import { ActividadesDetalleComponent } from './views/activities/detail/actividades-detalle/actividades-detalle.component';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    DonacionComponent,
    GraciasComponent,
    MembersFormComponent,
    CardComponent,
    OrganizationDataComponent,
    OrganizationFormComponent,
    BackofficeUsersComponent,
    BackofficeActivitiesComponent,
    BackofficeSlidesComponent,
    ActividadesDetalleComponent
  ],
  exports: [
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    MembersFormComponent,
  ],

  imports: [
    CommonModule,
    SlidesRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    LoginFormModule,
    RegisterFormModule,
    FormsModule,
    ActivitiesModule,
    CKEditorModule,
    DashboardScreenModule,
  ],

})
export class FeaturesModule {}
