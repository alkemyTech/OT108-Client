import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Organization } from "src/app/models/organization";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  Url = environment.organization;
  constructor(private http: PrivateApiService) {}

  update(organization: Organization, id: number){
    return this.http.put(this.Url, organization, id.toString());
  }
  getOrganization(id: number):Observable<any>{
    return this.http.get(this.Url, id.toString());
  }
  deleteOrganization(id: number){
    return this.http.delete(this.Url, id.toString());
  }
}
