import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Slides } from "../models/slides";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AbstractControl } from "@angular/forms";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class SlideService {
  constructor(private http: PublicApiService) {}

  create(slides: Slides): Observable<Slides> {
    return this.http.post("slides", slides);
  }
  getAllSlides() {
    return this.http.get("slides");
  }

  getSlide(id: any) {
    return this.http.get("slides", id);
  }
}
