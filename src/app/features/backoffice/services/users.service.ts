import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: PrivateApiService) {}

  createUser(user: User): Observable<any> {
    return this.http.post("users", user);
  }

  editUser(id: string, usuario: User): Observable<any> {
    return this.http.put("users", usuario, id);
  }

  getUser(id?: string): Observable<any> {
    return this.http.get("users", id);
  }
}
