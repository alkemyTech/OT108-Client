import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {
  private url: string = "http://ongapi.alkemy.org/api";

  constructor(private http: HttpClient) {}

  get(rutter: string, id?: string) {
    let route = this.url + "/" + rutter;
    if (id) {
      route = this.url + "/" + rutter + "/" + id;
    }
    return this.http.get(route);
  }
}
