import { Injectable } from "@angular/core";
import { PrivateApiService } from "../features/backoffice/services/private-api.service";
import { environment } from "src/environments/environment";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat/app";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private urlLogin: string = environment.Login;
  private urlRegister: string = environment.Register;
  constructor(private http: PrivateApiService, public auth: AngularFireAuth) {}

  login(email: string, contraseña: string) {
    const body = {
      email: email,
      password: contraseña,
    };

    return this.http.post(this.urlLogin, body);
  }
  async loginGoogle() {
    try {
      let provider = new firebase.default.auth.GoogleAuthProvider();
      const result = await this.auth.signInWithPopup(provider);
      return result;
    } catch (error) {
      return null;
    }
  }

  register(email: string, contraseña: string, name: string) {
    const body = {
      name: name,
      email: email,
      password: contraseña,
    };

    return this.http.post(this.urlRegister, body);
  }
}
