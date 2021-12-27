import { FeaturesModule } from "./features/features.module";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from "ng2-ckeditor";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { DialogComponent } from "./components/dialog/dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogErrorComponent } from "./components/dialog-error/dialog-error.component";
import { LoaderspinnerModule } from "./components/loaderspinner/loaderspinner.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "src/app/state/app.state";
import { EffectsModule } from "@ngrx/effects";
import { Usersffects } from "./state/effects/users.effects";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { SlideEffects } from "./state/effects/slide.effects";
import { ActivitiesEffects } from "./state/effects/activites.effects";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GoogleMapsModule } from "@angular/google-maps";
import { FirebaseModule } from "./firebase/firebase.module";
import { AuthEffects } from "./state/effects/auth.effects";
import { CategoriesEffects } from "./state/effects/categories.effects";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer'

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
    NgxSkeletonLoaderModule.forRoot(),
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    LoaderspinnerModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    FirebaseModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      Usersffects,
      SlideEffects,
      ActivitiesEffects,
      AuthEffects,
      CategoriesEffects,
    ]),
    LeafletModule,
    GooglePlaceModule,
    GoogleMapsModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, DialogErrorComponent],
})
export class AppModule {}
