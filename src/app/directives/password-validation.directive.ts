import { Directive } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';


export function passwordValidation():ValidatorFn{
  return (control:AbstractControl)=>{
    const passwordValidationDirective= new PasswordValidationDirective();
    return passwordValidationDirective.validate(control);  
  }
}
@Directive({
  selector: '[PasswordValidation]',
  providers:[ {provide:NG_VALIDATORS,useExisting:PasswordValidationDirective,multi:true}]
})
export class PasswordValidationDirective implements Validators{
  

  validate(control:import("@angular/forms").AbstractControl): { [key: string]: any }  |null {
    const password=<string>control.value;

    if(password===password.toLowerCase()){
      return {'passwordValidation':{'message':'Tu Password debe contener al menos una mayusculas'}}
    }
    if(password===password.toUpperCase()){
      return {'passwordValidation':{'message':'Tu Password debe contener al menos una minuscula'}}
    }
    if(!/\d/.test(password)){
      return {'passwordValidation':{'message':'Tu Password debe incluir  al menos un caracter numerico'}}
    }
    return null
  };

  constructor() { }

}
