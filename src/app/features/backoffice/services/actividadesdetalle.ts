
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiService } from "src/app/features/backoffice/services/private-api.service";

@Injectable({
  providedIn: "root",
})
export class ActividadesdetalleService {
  constructor(private https: PrivateApiService) {}

  obtenerActividad(id: number): Observable<any> {
    return this.https.get("activities/" + id);
  }
}
