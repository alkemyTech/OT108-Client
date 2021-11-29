import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SlidesFormComponent } from "./slides-form/slides-form.component";

const routes: Routes = [
  {
    path: "slides/form",
    component: SlidesFormComponent
  },
  {
    path: "slides/form/:id",
    component: SlidesFormComponent
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SlidesRoutingModule { }
