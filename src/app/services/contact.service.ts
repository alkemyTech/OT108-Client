import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Contact } from "../models/conctact";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  url= environment.contacts
  constructor(private http: PublicApiService) {}

  creationContact(contacts: Contact): Observable<any> { 
    return this.http.post(this.url, contacts);
  }
}
