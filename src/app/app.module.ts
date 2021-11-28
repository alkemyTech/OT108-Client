import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordValidationDirective } from './directives/password-validation.directive';


@NgModule({
  declarations: [
    AppComponent,
    PasswordValidationDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
