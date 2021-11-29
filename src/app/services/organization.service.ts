import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Organization } from '../models/organization';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  private Url: string = "http://ongapi.alkemy.org";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  update(organization:Organization,id:number): Observable<Organization>{
    return this.http.put<Organization>(this.Url+"/api/organization?id=1",organization,{
      headers:this.httpHeaders})
  }
  getOrganization(id: number): Observable<Organization> {
    return this.http.get<any>(this.Url +"/api/organization?id=1");
  }
}
