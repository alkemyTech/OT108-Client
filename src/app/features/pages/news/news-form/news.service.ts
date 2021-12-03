import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/services/private-api-service.service";
import { Modelo } from "./Modelo/modelo";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private https: PrivateApiServiceService) {}

  creacionNovedad(novedad: Modelo): Observable<any> {
    return this.https.post("news", novedad);
  }

  editarNovedad(id: string, novedad: Modelo): Observable<any> {
    return this.https.put("news/" + id, novedad);
  }

  obtenerNovedad(id: string): Observable<any> {
    return this.https.get("news" + id);
  }

  obtenerCategorias() {
    return this.https.get("categories");
  }
}
