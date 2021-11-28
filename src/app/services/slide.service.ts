import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Slides } from '../models/slides'
import { Observable  } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  slidesArr?:Slides[]

  private urlEndPoint:string = "http://ongapi.alkemy.org/api/slides";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  create(slides:Slides): Observable<Slides>{
    return this.http.post<Slides>(this.urlEndPoint,slides,{headers:this.httpHeaders})
  }

  update(slides:Slides,id:number): Observable<Slides>{
    return this.http.put<Slides>(`${this.urlEndPoint}/${id}`,slides,{headers:this.httpHeaders})
  }

  getAllSlides():Observable<any>{
    return this.http.get<any>(this.urlEndPoint,{headers:this.httpHeaders})
  }

  getSlide(id:any):Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}`)
  }


  
}