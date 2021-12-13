import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Slides } from "src/app/models/slides";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class SlideService {
  constructor(private http: PrivateApiService) {}

  create(slides: Slides): Observable<any> {
    return this.http.post("slides", slides);
  }

  update(slides: Slides, id: number): Observable<any> {
    return this.http.put("slides", slides, id.toString());
  }

  getAllSlides(): Observable<any> {
    return this.http.get("slides");
  }

  getSlide(id: any): Observable<any> {
    return this.http.get("slides", id);
  }
}
