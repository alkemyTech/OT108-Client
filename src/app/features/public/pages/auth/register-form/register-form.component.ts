import { Component, OnInit, ViewChild } from "@angular/core";
import { Auth } from "src/app/models/auth";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { State, Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { registerStart } from "src/app/state/actions/auth.actions";
import { Observable, timer } from "rxjs";
import { selectAuth } from "src/app/state/selectors/auth.selector";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { Address } from "ngx-google-places-autocomplete/objects/address";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { DialogconfirmationComponent } from "../../../components/dialogconfirmation/dialogconfirmation.component";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
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
export class RegisterFormComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective | null = null;
  directions: string = "";

  label = {
    text: "Usted Esta Aqui",
  };
  center = {
    lat: -34.681,
    lng: -58.371,
  };

  show: boolean = false;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public user: Auth;
  public imagenPerfil: string = "";
  auth$: Observable<any> = new Observable();
  constructor(
    private router: Router,
    private formB: FormBuilder,
    private authService: AuthService,
    private alert: AlertService,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {
    this.auth$ = this.store.select(selectAuth);
    this.user = new Auth();
  }
  public handleAddressChange(address: any) {
    this.show = false;
    if (!address.geometry) {
      this.alert.messageError("Direccion no Valida");
      this.loginForm.get("direction")?.setErrors({ require: true });
      this.show = false;
      this.loginForm.get("direction")?.setValue("");
    } else {
      this.directions = address.formatted_address;
      this.center.lat = address.geometry.location.lat();
      this.center.lng = address.geometry.location.lng();
      timer(500).subscribe(() => {
        this.show = true;
      });
    }
  }

  get direction() {
    return this.loginForm.get("direction");
  }

  get name() {
    return this.loginForm.get("name");
  }

  get passwordTwo() {
    return this.loginForm.get("passwordTwo");
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
  get checkConfi() {
    return this.loginForm.get("checkConfi");
  }

  loginForm = this.formB.group({
    name: [
      "",
      [
        Validators.required,
        Validators.pattern("[A-Za-z]*"),
        this.validatorName,
      ],
    ],
    email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
    password: [
      "",
      [Validators.required, Validators.minLength(6), this.validatorPassword],
    ],
    passwordTwo: ["", [Validators.required, this.validatorPassword]],
    direction: ["", [Validators.required]],
    checkConfi: [false, [Validators.required, Validators.pattern("true")]],
  });

  validatorName(control: AbstractControl) {
    const name = <string>control.value;
    const space = name.includes(" ");
    if (space) {
      return { space: true };
    }
    return null;
  }

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

  onLogin() {
    const { name, email, password, passwordTwo } = this.loginForm.value;
    this.user.email = email;
    this.user.pass = password;
    try {
      if (password === passwordTwo) {
        this.store.dispatch(
          registerStart({ email: email, password: password, name: name })
        );
      } else {
        this.loginForm.get("passwordTwo")?.setErrors({ repeat: true });
        this.loginForm.get("password")?.setErrors({ repeat: true });
        this.alert.messageError("Las contraseñas no coinciden");
      }
    } catch (error) {
      this.alert.messageError("Error en el registro");
      this.loginForm.reset();
    }
  }

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogconfirmationComponent, {
      width: "500px",
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
