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
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { DialogComponent } from "./components/dialog/dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component'; 
import { LoaderspinnerModule } from "./components/loaderspinner/loaderspinner.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "src/app/state/app.state";
import { EffectsModule } from "@ngrx/effects";
import { Usersffects } from "./state/effects/users.effects";


@NgModule({
  declarations: [AppComponent, DialogComponent, DialogErrorComponent, SkeletonComponent],
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
    //NgxSkeletonLoaderModule.forRoot(),
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    LoaderspinnerModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([Usersffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, DialogErrorComponent,SkeletonComponent],
})
export class AppModule {}
