import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Members } from 'src/app/models/members'; 


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private url:string = "http://ongapi.alkemy.org/api/members";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  create(members:Members): Observable<Members>{
    return this.http.post<Members>(this.url,members,{headers:this.httpHeaders})
  }
  editarMembers(members:Members,id:number): Observable<Members>{
    return this.http.put<Members>(this.url+"/"+id,members,{headers:this.httpHeaders})
  }


  getMember(id:number):Observable<Members>{
    return this.http.get<Members>(this.url+"/"+id)
  }
}