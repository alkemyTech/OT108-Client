import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertService } from "./alert.service";
@Injectable({
  providedIn: "root",
})
export class PublicApiService {
  

  constructor(private http: HttpClient, private alert: AlertService) {}

  get(rutter: string, id?: string) {
    const urls = this.router(rutter, id);
    return this.http.get(urls);
  }

  post(rutter: string, body: object, auth?: boolean) {
    const httpHeaders = this.headers(auth);
    const urls = this.router(rutter);
    return this.http.post(urls, JSON.stringify(body), { headers: httpHeaders });
  }

  router(rutter: string, id?: string) {
    let route = rutter;
    if (id) {
      route =  rutter + "/" + id;
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
