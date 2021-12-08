import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "src/app/models/categories";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: PrivateApiService) {}

  createCategory(categoria: Categories): Observable<any> {
    return this.http.post("categories", categoria);
  }

  editCategory(id: string, category: Categories): Observable<any> {
    return this.http.put("categories", category, id);
  }

  getCategory(id?: string): Observable<any> {
    return this.http.get("categories", id);
  }
}
