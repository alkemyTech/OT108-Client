import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/services/private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class BackoffiactivitiesService {
  constructor(private https: PrivateApiServiceService) {}

  obtenerActividad(id: string): Observable<any> {
    return this.https.get("activities/" + id);
  }

  obtenerActividades(): Observable<any> {
    return this.https.get("activities");
  }
}
