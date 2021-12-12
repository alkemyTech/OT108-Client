import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "src/app/models/categories";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  environment = environment.categories;

  constructor(private http: PrivateApiService) {}

  createCategory(categoria: Categories): Observable<any> {
    return this.http.post(this.environment, categoria);
  }

  editCategory(id: string, category: Categories): Observable<any> {
    return this.http.put(this.environment, category, id);
  }

  getCategory(id?: string): Observable<any> {
    return this.http.get(this.environment, id);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.environment, id);
  }
}
