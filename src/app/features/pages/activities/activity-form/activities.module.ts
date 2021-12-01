import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivityFormComponent } from "./activity-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "ng2-ckeditor";

@NgModule({
  declarations: [ActivityFormComponent],
  imports: [CommonModule, ReactiveFormsModule, CKEditorModule],
})
export class ActivitiesModule {}
