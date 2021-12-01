import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {
  private url: string = "http://ongapi.alkemy.org/api";

  constructor(private http: HttpClient) {}

  router(rutter: string, id?: string) {
    let route = this.url + "/" + rutter;
    if (id) {
      route = this.url + "/" + rutter + "/" + id;
    }
    return route;
  }

  get(rutter: string, id?: string) {
    const urls = this.router(rutter, id);
    return this.http.get(urls);
  }

  put(rutter: string, body: object, id?: string) {
    const httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const urls = this.router(rutter, id);
    return this.http.put(urls, JSON.stringify(body), { headers: httpHeaders });
  }
}
