import { Injectable } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class SlideService {
 url= environment.slides
  constructor(private http: PrivateApiService) {}

  create(slides: Slides) {
    return this.http.post(this.url, slides);
  }

  update(slides: Slides, id: number){
    return this.http.put(this.url, slides, id.toString());
  }

  getAllSlides(){
    return this.http.get(this.url);
  }

  getSlide(id: any) {
    return this.http.get(this.url, id);
  }
}
