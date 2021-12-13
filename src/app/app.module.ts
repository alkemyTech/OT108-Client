import { FeaturesModule } from "./features/features.module";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CKEditorModule } from "ng2-ckeditor";
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component'; 
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AppComponent, DialogComponent, DialogErrorComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    NgbModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({})
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,DialogErrorComponent]
})
export class AppModule {}
