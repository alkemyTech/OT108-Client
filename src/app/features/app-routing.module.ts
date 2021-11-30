import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { DashboardScreenComponent } from "./pages/dashboard-screen/dashboard-screen.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  
  {
    path: "actividades/:id",
    component: ActivityFormComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  /*{
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },*/
  {
    path: "slides/form",
    component: SlidesFormComponent
  },
  {
    path: "slides/form/:id",
    component: SlidesFormComponent
  },
  {
    path: "backoffice/members/edit",
    component: MembersFormComponent
  },
  {
    path: "backoffice/members/edit/:id",
    component: MembersFormComponent
  },
  
  {path:"backoffice",component:DashboardScreenComponent},
  {path:'register',component:RegisterFormComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
