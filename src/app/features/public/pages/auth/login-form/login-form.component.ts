import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { Auth } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/state/app.state";
import { Store } from "@ngrx/store";
import { loginGoogle, loginStart } from "src/app/state/actions/auth.actions";
import { Observable } from "rxjs";
import { selectAuth, selectUser } from "src/app/state/selectors/auth.selector";
import { Route } from "@angular/compiler/src/core";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  animations: [
    trigger("enterState", [
      state(
        "void",
        style({
          transform: "translateY(-100%)",
          opacity: 0,
        })
      ),
      transition(":enter", [
        animate(
          1000,
          style({
            transform: "translateY(0)",
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class LoginFormComponent implements OnInit {
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  auth$: Observable<any> = new Observable();
  user$: Observable<any> = new Observable();
  public user: Auth;
  public imagenPerfil: string = "";

  constructor(
    private formB: FormBuilder,
    public store: Store<AppState>,
    private router: Router
  ) {
    this.auth$ = this.store.select(selectAuth);
    this.user$ = this.store.select(selectUser);
    this.user = new Auth();
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  loginForm = this.formB.group({
    email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
    password: [
      "",
      [Validators.required, Validators.minLength(6), this.validatorPassword],
    ],
  });

  validatorPassword(control: AbstractControl) {
    const pass = <string>control.value;
    const regExp = ["_", "@", "%", "$", "&", "#", "*"];
    let simbol = true;
    if (pass === pass.toLowerCase()) {
      return { letter: true };
    }
    if (pass === pass.toUpperCase()) {
      return { lower: true };
    }
    if (!/\d/.test(pass)) {
      return { num: true };
    }

    regExp.forEach((simb) => {
      if (pass.includes(simb)) {
        simbol = false;
      }
    });
    if (simbol) {
      return { simbol: true };
    }

    return null;
  }

  loginWhithGoogle() {
    this.store.dispatch(loginGoogle());
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.user.email = email;
    this.user.pass = password;
    console.log(this.user);
    this.store.dispatch(loginStart({ email: email, password: password }));
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if (token) {
      this.router.navigate(["/"]);
    }
  }
}
