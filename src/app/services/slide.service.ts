import { Injectable } from "@angular/core";
import { Slides } from "../models/slides";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "./private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class SlideService {



  constructor(
    private service: PrivateApiServiceService
  ) {}

  create(slides: Slides): Observable<Slides> {
    return this.service.post("slides", slides);
  }

  update(slides: Slides, id: number): Observable<Slides> {
    return this.service.put("slides", slides, id.toString());
  }

  getAllSlides(): Observable<any> {
    return this.service.get("slides");
  }

  getSlide(id: any): Observable<any> {
    return this.service.get("slides", id);
  }
}
