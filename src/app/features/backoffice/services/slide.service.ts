import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { Slides } from "src/app/models/slides";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class SlideService {
 url= environment.slides
  constructor(private http: PrivateApiService) {}

  create(slides: Slides): Observable<any> {
    return this.http.post(this.url, slides);
  }

  update(slides: Slides, id: number): Observable<any> {
    return this.http.put(this.url, slides, id.toString());
  }

  getAllSlides(): Observable<any> {
    return this.http.get(this.url);
  }

  getSlide(id: any): Observable<any> {
    return this.http.get(this.url, id);
  }
}
