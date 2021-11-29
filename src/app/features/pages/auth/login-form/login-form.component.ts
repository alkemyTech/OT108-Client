import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform:'translateY(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(1000,style({
          transform:'translateY(0)',
          opacity:1
        }))
      ])
    ])
  ]
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
    password:['',[Validators.required,Validators.minLength(6) ,this.validatorPassword]],

  });


  validatorPassword(control:AbstractControl){
    const pass=<string>control.value;
    const regExp=["_","@","%","$","&","#","*"];
    let simbol=true;
    if(pass===pass.toLowerCase()){
      return {letter:true}
    }
    if(pass===pass.toUpperCase()){
      return{lower:true}
    }
    if(!/\d/.test(pass)){
      return{num:true}
    }

    regExp.forEach( simb =>{
      if(pass.includes(simb)){
        simbol=false;
        }
      })
      if(simbol){
        return{simbol:true}
      }
      
    
    return null;
  }


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
          this.alert.messageError("Error Usted no esta logeado");
          this.loginForm.reset();
        }
      })
    } catch (error) {
      this.alert.messageError("Error en el logeado");
      this.loginForm.reset();
    }
  }

  ngOnInit(): void {
  }
}
