import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SlidesRoutingModule } from "./pages/slides/slides-routing.module";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MembersFormComponent } from './pages/members/members-form/members-form.component';
import { CKEditorModule } from "ng2-ckeditor";
import { DashboardScreenModule } from "./pages/dashboard-screen/dashboard-screen.module";



@NgModule({
  declarations: [

    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    MembersFormComponent,

  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    MembersFormComponent
  ],
  imports: [
    CommonModule,
    SlidesRoutingModule,
    AppRoutingModule, 
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    DashboardScreenModule

  ],
})
export class FeaturesModule {}
