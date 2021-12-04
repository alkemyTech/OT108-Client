import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Organization } from "src/app/models/organization";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  constructor(private http: PrivateApiService) {}

  update(organization: Organization, id: number): Observable<any> {
    return this.http.put("organization", organization, id.toString());
  }
  getOrganization(id: number): Observable<any> {
    return this.http.get("organization", id.toString());
  }
}
