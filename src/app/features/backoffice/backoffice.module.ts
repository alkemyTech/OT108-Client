import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { BackofficeRoutingModule } from "./backoffice-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    ComponentsModule,
    BackofficeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class BackofficeModule {}
