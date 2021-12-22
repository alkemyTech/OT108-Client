import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Slides } from "../models/slides";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AbstractControl } from "@angular/forms";
import { PublicApiService } from "./public-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SlideService {
  constructor(private http: PublicApiService) {}
  url = environment.slides;
  create(slides: Slides): Observable<any> {
    return this.http.post(this.url, slides);
  }
  getAllSlides(): Observable<any> {
    return this.http.get(this.url);
  }

  getSlide(id: any) {
    return this.http.get(this.url, id);
  }
}
