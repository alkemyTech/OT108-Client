import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public formulario:FormGroup;
  constructor(private frB:FormBuilder) {
    
    this.formulario = this.frB.group( {
      'name': ['', [Validators.required]],
      'image': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'facebook': ['', [Validators.required]],
      'linkending': ['', [Validators.required]],
     
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

