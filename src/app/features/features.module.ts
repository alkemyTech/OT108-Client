import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CKEditorModule } from "ng2-ckeditor";
import { PublicModule } from "./public/public.module";
import { BackofficeModule } from "./backoffice/backoffice.module";

@NgModule({
  declarations: [],
  exports: [RouterModule],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    BackofficeModule,
    PublicModule,
  ],
})
export class FeaturesModule {}
