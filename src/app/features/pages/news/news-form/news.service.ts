import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Modelo } from "./Modelo/modelo";


@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}


  creacionNovedad(novedad:Modelo): Observable<any> {
    return this.http.post(this.url + "/api/" + "news", novedad, {
      headers: this.httpHeaders,
    });
  }

  editarNovedad(id: string, novedad: Modelo): Observable<any> {
    return this.http.put(this.url + "/api/" + "news/" + id, novedad, {
      headers: this.httpHeaders,
    });
  }

  obtenerNovedad(id: string): Observable<any> {
    return this.http.get(this.url + "/api/news/" + id);
  }

  obtenerCategorias(){
    return this.http.get(this.url + "/api/categories");
  }


}
