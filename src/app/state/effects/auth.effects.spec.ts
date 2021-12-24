import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { FirebaseModule } from "src/app/firebase/firebase.module";
import { AuthEffects } from "./auth.effects";

describe("AuthEffects", () => {
  let service: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FirebaseModule, RouterModule],
      declarations: [],
    });
    service = TestBed.inject(AuthEffects);
  });

  it("Creado correctamente", () => {
    expect(service).toBeTruthy();
  });
});
