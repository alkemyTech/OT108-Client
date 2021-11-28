import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin:string = "http://ongapi.alkemy.org/api/login";
  private urlRegister:string="http://ongapi.alkemy.org/api/register"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient ,
     private alert: AlertService) { }

  login(email:string,contraseña:string){
    const body={
      email:email,
      password:contraseña
    }
    
    return this.http.post<any>(this.urlLogin,JSON.stringify(body),{headers:this.httpHeaders});

  }

  

}
