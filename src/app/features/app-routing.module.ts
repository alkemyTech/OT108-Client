import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
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
  {path:"login",component:LoginFormComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
