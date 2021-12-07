import { Injectable } from "@angular/core";

import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  constructor(private http: PublicApiService) {}

  getOrganization(id: string) {
    return this.http.get("organization", id);
  }
}
