import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "src/app/models/news";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private https: PrivateApiService) {}

  createNews(novedad: News): Observable<any> {
    return this.https.post("news", novedad);
  }

  editNews(id: string, novedad: News): Observable<any> {
    return this.https.put("news/" + id, novedad);
  }

  getNews(id: string): Observable<any> {
    return this.https.get("news" + id);
  }

  getAllNews(): Observable<any> {
    return this.https.get("news");
  }

  getCategories() {
    return this.https.get("categories");
  }
}
