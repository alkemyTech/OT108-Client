import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { Activity } from '../models/activities';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url:string = "http://ongapi.alkemy.org/api/activities";
 
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http:HttpClient ) { }

  creationActivity(activity:Activity): Observable<any> {
  
    return this.http.post(this.url ,JSON.stringify(activity), {
      headers: this.httpHeaders,
    });
  }

  editActivity(id: string, activity:Activity): Observable<any> {
    return this.http.put(this.url+'/'+id, JSON.stringify(activity), {
      headers: this.httpHeaders,
    });
  }

  getActivity(id:number){
    return this.http.get(this.url+'/'+id);
  }

}
