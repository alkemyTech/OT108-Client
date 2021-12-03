import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/services/private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class BackofficeusersService {
  constructor(private https: PrivateApiServiceService) {}

  obtenerUsuario(id: string): Observable<any> {
    return this.https.get("users/" + id);
  }

  obtenerUsuarios(): Observable<any> {
    return this.https.get("users");
  }
}
