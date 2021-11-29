import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from "ng2-ckeditor";



@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
