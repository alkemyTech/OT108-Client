import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { OrganizationFormComponent } from './organization-form/organization-form.component';


const routes: Routes = [
//   {
//     path: "slides/form",
//     component: SlidesFormComponent
//   },
  {
    path: "backoffice/organization/edit/:id",
    component: OrganizationFormComponent
  },
];