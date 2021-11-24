import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlideService } from '../slide.service';
import Swal from 'sweetalert2'


@Component({
  
  selector: 'app-slides-form',
  
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {

  public formulario:FormGroup;
  constructor(
    private frB:FormBuilder,
    private slideService:SlideService
    ) {
    
    this.formulario = this.frB.group( {
      'id': [''],
      'name': ['', [Validators.required]],
      'description': ['', Validators.required],
      'image': [atob('')],
      'order': ['', [Validators.required]],
      'userId': [''],
      'created_at': [''],
      'updated_at': [''],
      'deleted_at': [''],
    });
   }

  ngOnInit(): void {
  }
  aceptar(){
    this.slideService.create(this.formulario.value).subscribe( res =>
      console.log(res))
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
