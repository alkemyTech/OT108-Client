import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardScreenComponent } from './dashboard-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboardScreenComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule 
  ]
})
export class DashboardScreenModule { }
