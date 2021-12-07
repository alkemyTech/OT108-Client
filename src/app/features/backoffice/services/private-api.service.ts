import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertService } from "src/app/services/alert.service";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PrivateApiService {
  private url: string = "http://ongapi.alkemy.org/api";

  constructor(private http: HttpClient, private alert: AlertService) {}

  patch(rutter: string, body: object, id?: string, auth?: boolean) {
    const httpHeaders = this.headers(auth);
    const urls = this.router(rutter, id);
    return this.http.patch(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
  }

  delate(rutter: string, id: string) {
    const httpHeaders = this.headers(false);
    const urls = this.router(rutter, id);
    return this.http.delete(urls, { headers: httpHeaders });
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

  post(rutter: string, body: object, auth?: boolean) {
    const httpHeaders = this.headers(auth);
    const urls = this.router(rutter);
    return this.http.post(urls, JSON.stringify(body), { headers: httpHeaders });
  }

  router(rutter: string, id?: string) {
    let route = this.url + "/" + rutter;
    if (id) {
      route = this.url + "/" + rutter + "/" + id;
    }
    return route;
  }

  headers(auth?: boolean) {
    let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    if (auth) {
      const token = localStorage.getItem("token");
      if (token) {
        const authenticator = "Bearer " + token;
        httpHeaders = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: authenticator,
        });
      } else {
        this.alert.messageError("no exite el token");
      }
    }
    return httpHeaders;
  }
}
