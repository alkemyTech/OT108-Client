import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/services/private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class BackofficeslidesService {
  constructor(private https: PrivateApiServiceService) {}

  obtenerSlide(id: string): Observable<any> {
    return this.https.get("slides/" + id);
  }

  obtenerSlides(): Observable<any> {
    return this.https.get("slides");
  }
}
