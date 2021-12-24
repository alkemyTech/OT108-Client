import { TestBed } from "@angular/core/testing";
import { PrivateApiService } from "./private-api.service";
import { HttpClientModule } from "@angular/common/http";
describe("Probanndo el servicio base", () => {
  let service: PrivateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PrivateApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
