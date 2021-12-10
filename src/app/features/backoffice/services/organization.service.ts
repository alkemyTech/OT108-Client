import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Organization } from "src/app/models/organization";
import { environment } from "../pages/organization-edit/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  environment=environment.organization;
  constructor(private http: PrivateApiService) {}

  update(organization: Organization, id: number): Observable<any> {
    return this.http.put(this.environment, organization, id.toString());
  }
  getOrganization(id: number): Observable<any> {
    return this.http.get(this.environment, id.toString());
  }
  deleteOrganization(id: number): Observable<any>{
    return this.http.delete(this.environment, id.toString());
  }
}
