import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { environment } from "../pages/users/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  environment = environment.users;
  constructor(private http: PrivateApiService) {}

  createUser(user: User): Observable<any> {
    return this.http.post(this.environment, user);
  }

  editUser(id: string, usuario: User): Observable<any> {
    return this.http.put(this.environment, usuario, id);
  }

  getUser(id?: string): Observable<any> {
    return this.http.get(this.environment, id);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.environment);
  }
}
