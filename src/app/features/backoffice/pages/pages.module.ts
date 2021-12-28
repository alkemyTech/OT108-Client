import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivitiesComponent } from "./activities/activities.component";
import { ActivityFormComponent } from "./activity-form/activity-form.component";
import { CategoriesComponent } from "./categories/categories.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MemberFormComponent } from "./member-form/member-form.component";
import { NewsComponent } from "./news/news.component";
import { OrganizationComponent } from "./organization/organization.component";
import { OrganizationEditComponent } from "./organization-edit/organization-edit.component";
import { SlideComponent } from "./slide/slide.component";
import { SlideFormComponent } from "./slide-form/slide-form.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { UsersComponent } from "./users/users.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "ng2-ckeditor";
import { RouterModule } from "@angular/router";
import { ActividadesDetalleComponent } from "./views/activities/detail/actividades-detalle/actividades-detalle/actividades-detalle.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { SetupProgressComponent } from "./setup-progress/setup-progress/setup-progress.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { ComponentssModule } from "../../../components/components.module";
import { CategoriesDetailsComponent } from "./categories-details/categories-details.component";
import { ComponentsModule } from "../components/components.module";
import { HomeFormComponent } from "./home-form/home-form.component";
import { SlideSearchComponent } from "./home-form/slide-search/slide-search.component";
import { ActivitiesDetailsComponent } from './activities-details/activities-details.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SlidesDetailComponent } from './slides-detail/slides-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivityFormComponent,
    CategoriesComponent,
    DashboardComponent,
    MemberFormComponent,
    NewsComponent,
    OrganizationComponent,
    OrganizationEditComponent,
    SlideFormComponent,
    SlideComponent,
    TestimonialsComponent,
    UsersComponent,
    UsersListComponent,
    ActividadesDetalleComponent,
    SetupProgressComponent,
    CategoriesListComponent,
    MemberListComponent,
    NewsListComponent,
    CategoriesDetailsComponent,
    HomeFormComponent,
    SlideSearchComponent,
    ActivitiesDetailsComponent,
    NewsDetailComponent,
    SlidesDetailComponent,
    UserDetailComponent,
    MemberDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ComponentsModule,
    NgxSkeletonLoaderModule,
    ComponentssModule,
    FormsModule,
  ],
  exports: [HomeFormComponent],
})
export class PagesModule {}
