import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidation } from 'src/app/directives/password-validation.directive';
import { Auth } from 'src/app/models/auth';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';






@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})




export class LoginFormComponent implements OnInit {


  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 

  
  

  public user: Auth;
  public imagenPerfil:string='';

  constructor(
    private router:Router,
    private formB:FormBuilder,
    private authService:AuthService,
    private alert :AlertService
    ) {
      this.user=new Auth();
      
    }
    
  get email(){
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password')
  }

   loginForm=this.formB.group({
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required,Validators.minLength(6),passwordValidation()]],

  });

   

   onLogin(){
    const{email,password}=this.loginForm.value;
    this.user.email=email;
    this.user.pass=password;
    try {
      this.authService.login(email,password)?.subscribe(user=>{
        if(user?.success){
          localStorage.clear();
          localStorage.setItem('token',user.data.token);
          //ir al menu de problema 
          //this.router.navigate(['/home'])
        }else{
          this.alert.mensajeError("Error Usted no esta logeado");
          this.loginForm.reset();
        }
      })
    } catch (error) {
      this.alert.mensajeError("Error en el logeado");
      this.loginForm.reset();
    }
  }

  ngOnInit(): void {
  }
}
