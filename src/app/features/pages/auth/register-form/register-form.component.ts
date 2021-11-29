import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

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

  get name(){
    return this.loginForm.get('name');
  }

  get passwordTwo(){
    return this.loginForm.get('passwordTwo');
  }

  get email(){
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password')
  }

   loginForm=this.formB.group({
    name:['',[Validators.required,Validators.pattern("[A-Za-z]*"),this.validatorName]],
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required,Validators.minLength(6) ,this.validatorPassword]],
    passwordTwo:['',[Validators.required,this.validatorPassword]]
  }
  );


  validatorName(control:AbstractControl){
    const name=<string>control.value
    const space=name.includes(' ')
    if(space){
      return {space:true}
    }
    return null;
  }

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
    const{name,email,password ,passwordTwo}=this.loginForm.value;
    this.user.email=email;
    this.user.pass=password;
    try {
      if(password===passwordTwo){
        this.authService.register(email,password,name)?.subscribe(user=>{
          if(user.success){
              this.alert.messageGood("se Registro perfectamente");
              //this.router.navigate(['home'])
              //y se registra?
          }else{
            this.alert.messageError("El email ya esta en la base de datos");
            this.loginForm.reset();
          }
        });1
      }else{
        this.loginForm.get('passwordTwo')?.setErrors({repeat:true});
        this.loginForm.get('password')?.setErrors({repeat:true});
        this.alert.messageError("Las contraseñas no coinciden");
      }
    } catch (error) {
      this.alert.messageError("Error en el logeado");
      this.loginForm.reset();
    }
  }

  ngOnInit(): void {
  }

}
