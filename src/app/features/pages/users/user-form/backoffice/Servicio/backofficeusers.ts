import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackofficeusersService {
  private Url: string = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.Url + "/api/users/" + id, {
      headers: this.httpHeaders,
    });
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get(this.Url + "/api/users", {
      headers: this.httpHeaders,
    });
  }
}
