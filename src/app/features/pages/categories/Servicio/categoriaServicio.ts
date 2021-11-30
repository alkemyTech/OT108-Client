import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../Modelo/categoria";

@Injectable({
  providedIn: "root",
})
export class CategoriaServicioService {
  url = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  crearCategoria(categoria: Categoria): Observable<any> {
    return this.http.post(this.url + "/api/" + "categories", categoria, {
      headers: this.httpHeaders,
    });
  }

  editarCategoria(id: string, categoria: Categoria): Observable<any> {
    return this.http.put(this.url + "/api/" + "categories/" + id, categoria, {
      headers: this.httpHeaders,
    });
  }

  obtenerCategoria(id: string): Observable<any> {
    return this.http.get(this.url + "/api/categories/" + id);
  }
}
