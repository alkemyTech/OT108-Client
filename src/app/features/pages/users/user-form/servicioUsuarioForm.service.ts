import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./Modelo/usuario";

@Injectable({
  providedIn: "root",
})
export class ServicioUsuarioFormService {
  url = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  creacionNuevoUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url + "/api/" + "users", usuario, {
      headers: this.httpHeaders,
    });
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this.url + "/api/" + "users/" + id, usuario, {
      headers: this.httpHeaders,
    });
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + "/api/users/" + id);
  }
}
