import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulariomodelo',
  templateUrl: './formulariomodelo.component.html',
  styleUrls: ['./formulariomodelo.component.scss']
})
export class FORMULARIOMODELOComponent implements OnInit {

  public formulario:FormGroup;
  constructor(private frB:FormBuilder) {
    
    this.formulario = this.frB.group( {
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'dni': ['', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.maxLength(9),Validators.minLength(8) ]],
      'foto': ['', [Validators.required]],
      'password': ['', [Validators.required,Validators.minLength(6)]],
      'email': ['', [Validators.required,Validators.email]],
     
    });
   }

  ngOnInit(): void {
  }
  aceptar(){
    console.log(this.formulario.value);
    this.mensajeError("un mensaje de error muy rapido");
  }

  mensajeError(texto: string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:texto,
    });
  }

}
