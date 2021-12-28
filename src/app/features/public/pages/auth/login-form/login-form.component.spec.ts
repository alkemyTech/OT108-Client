import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router, RouterModule } from "@angular/router";
import { EffectsModule, EffectsRootModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { observable, Observable } from "rxjs";
import { AppModule } from "src/app/app.module";
import { FirebaseModule } from "src/app/firebase/firebase.module";
import {
  loginFail,
  loginStart,
  loginSuccess,
} from "src/app/state/actions/auth.actions";
import { AppState, ROOT_REDUCERS } from "src/app/state/app.state";
import { AuthEffects } from "src/app/state/effects/auth.effects";

import { LoginFormComponent } from "./login-form.component";

describe("LoginFormComponent", () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let submitEl: any;
  let store: MockStore<AppState>;
  const initialState = {
    authState: {
      errorMessage: null,
      user: null,
      isAuthenticated: false,
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(ROOT_REDUCERS),
        HttpClientTestingModule,
        FirebaseModule,
        EffectsModule.forRoot([AuthEffects]),
      ],
      providers: [provideMockStore({ initialState })],
      declarations: [LoginFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css("button"));
  });

  it("Se creo correctamente el componente", () => {
    expect(component).toBeTruthy();
  });

  it("Debe retornar formulario invalido", () => {
    const email = component.loginForm.controls["email"];
    const password = component.loginForm.controls["password"];
    email.setValue(" ");
    password.setValue(" ");
    //TODO:true
    expect(component.loginForm.invalid).toBeTrue();
  });
  /**
   * test del formulario validando si tiene mayuscula , signo , un numero y 6 caracteres
   */
  it("Debe retornar formulario valido pero no logeado", () => {
    const email = component.loginForm.controls["email"];
    const password = component.loginForm.controls["password"];
    email.setValue("sss@gmail.com");
    password.setValue("sss@gmai1Al.com");

    expect(component.loginForm.valid).toBeTrue();
  });

  it("boton invalidado correctamente", () => {
    const email = component.loginForm.controls["email"];
    const password = component.loginForm.controls["password"];
    email.setValue("sss@gmail.com");
    password.setValue("sss@m");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTrue();
  });
  it("boton validado correctamente", () => {
    const email = component.loginForm.controls["email"];
    const password = component.loginForm.controls["password"];
    email.setValue("sss@gmail.com");
    password.setValue("sss@gmai1Al.com");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it("Se dispara correctamente la accion de login ", () => {
    const email = component.loginForm.controls["email"];
    const password = component.loginForm.controls["password"];
    email.setValue("sss@gmail.com");
    password.setValue("sss@gmai1Al.com");
    const storeSpy = spyOn(component.store, "dispatch").and.callThrough();
    component.onLogin();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(
      loginStart({ email: email.value, password: password.value })
    );
  });
});
