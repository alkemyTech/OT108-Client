import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "src/app/models/categories";
import { PrivateApiService } from "./private-api.service";
import { environment } from "src/app/features/backoffice/pages/categories/environment";


@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: PrivateApiService) {
    console.log("log: ",environment)
  }

  createCategory(categoria: Categories): Observable<any> {
    return this.http.post(environment.categories, categoria);
  }

  editCategory(id: string, category: Categories): Observable<any> {
    return this.http.put(environment.categories, category, id);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get(environment.categories, id);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(environment.categories, id);
  }
}
