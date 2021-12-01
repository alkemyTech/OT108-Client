import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardService {
  url = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}


  obtenerNovedades(): Observable<any> {
    return this.http.get(this.url + "/api/news");
  }
}
