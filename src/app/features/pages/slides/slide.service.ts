import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private urlEndPoint:string = "http://ongapi.alkemy.org/api/slides";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  create(form:any): Observable<any>{
    return this.http.post<any>(this.urlEndPoint,JSON.stringify(form),{headers:this.httpHeaders})
  }
}
