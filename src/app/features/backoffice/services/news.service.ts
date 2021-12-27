import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "src/app/models/news";
import { PrivateApiService } from "./private-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = environment.news;
  constructor(private https: PrivateApiService) {}

  createNews(novedad: News): Observable<any> {
    return this.https.post(this.url, novedad);
  }

  editNews(id: string, novedad: News): Observable<any> {
    return this.https.put(this.url + id, novedad);
  }

  getNews(id: string): Observable<any> {
    return this.https.get(this.url + id);
  }

  getAllNews(): Observable<any> {
    return this.https.get(this.url);
  }

  getCategories() {
    return this.https.get(this.url);
  }
}
