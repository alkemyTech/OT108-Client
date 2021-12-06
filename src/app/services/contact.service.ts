import { Injectable } from "@angular/core";
import { Contact } from "../models/conctact";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: PublicApiService) {}

  creationContact(contacts: Contact) {
    return this.http.post("contacts", contacts);
  }
}
