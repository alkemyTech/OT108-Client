import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/services/private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class ActividadesdetalleService {
  constructor(private https: PrivateApiServiceService) {}

  obtenerActividad(id: number): Observable<any> {
    return this.https.get("activities/" + id);
  }
}
