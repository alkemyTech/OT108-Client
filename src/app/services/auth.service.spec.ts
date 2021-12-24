import { HttpClientModule } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { PrivateApiService } from "../features/backoffice/services/private-api.service";
import { FirebaseModule } from "../firebase/firebase.module";
import { Auth } from "../models/auth";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FirebaseModule],
      declarations: [],
    });
    service = TestBed.inject(AuthService);
  });

  it("Creado correctamente", () => {
    expect(service).toBeTruthy();
  });

  it("peticion de autenticidad correctamente", () => {
    service
      .login("sss@gmail.com", "angularA@1")
      .subscribe((data) => expect(data.success).toBeTruthy());
  });

  it("peticion de autenticidad incorrectamente", () => {
    service
      .login("ssasdsads@gmail.com", "angularA@1")
      .subscribe((data) => expect(data.success).toBeTrue());
  });
});
