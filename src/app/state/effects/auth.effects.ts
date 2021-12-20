import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from "rxjs/operators";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import {
  loginFail,
  loginGoogle,
  loginStart,
  loginSuccess,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  logOut,
  registerFail,
  registerStart,
  registerSuccess,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private loginService: AuthService,
    private router: Router,
    private alert: AlertService
  ) {}
  loginStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      mergeMap((action) =>
        this.loginService.login(action.email, action.password).pipe(
          map((data) => ({
            type: LOGIN_SUCCESS,
            token: data.data.token,
            email: action.email,
          })),
          catchError(() => of({ type: LOGIN_FAIL }))
        )
      )
    )
  );
  //-----login success-----
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          localStorage.setItem("token", action.token);
          this.router.navigate(["backoffice/Dashboard"]);
        })
      ),
    { dispatch: false }
  );
  //------ error en el login ----
  loginFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFail),
        tap((action) => {
          this.alert.messageError("Error en el correo y/o contraseña ");
          this.router.navigate(["public/login"]);
        })
      ),
    { dispatch: false }
  );
  // -------------registro------------------
  registerStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerStart),
      mergeMap((action) =>
        this.loginService
          .register(action.email, action.password, action.name)
          .pipe(
            map((data) => ({
              type: REGISTER_SUCCESS,
              token: data.data.token,
              email: action.email,
            })),
            catchError(() => of({ type: REGISTER_FAIL }))
          )
      )
    )
  );
  //-------------registro success--------------------
  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap((action) => {
          localStorage.setItem("token", action.token);
          this.alert.messageGood("se Registro perfectamente");
          this.router.navigate(["backoffice/Dashboard"]);
        })
      ),
    { dispatch: false }
  );
  //-------------- registro fail----------
  registerFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerFail),
        tap((action) => {
          this.alert.messageError("El email ya esta en la base de datos");
        })
      ),
    { dispatch: false }
  );
  // logout
  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        tap((action) => {
          localStorage.removeItem("token");
          this.router.navigate(["public/home"]);
        })
      ),
    { dispatch: false }
  );

  LoginGoogle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginGoogle),
        tap(() =>
          this.loginService
            .loginGoogle()
            .then((res) => {
              res?.user?.getIdTokenResult().then((ten) => {
                localStorage.clear();
                localStorage.setItem("token", ten.token);
                this.router.navigate(["backoffice/Dashboard"]);
              });
            })
            .catch(() => {
              this.alert.messageError("no sepudo logear con google con exito");
            })
        )
      ),
    { dispatch: false }
  );
}
