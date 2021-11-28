import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public formulario:FormGroup;
  constructor(
    private frB:FormBuilder,
  //  private membersService:MembersService
    ) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';//para las url
    this.formulario = this.frB.group( {
      'name': ['', [Validators.required, Validators.minLength(4)]],
      'image': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'facebookUrl': ['', [Validators.required, Validators.pattern(reg)]],
      'linkedinUrl': ['', [Validators.required, Validators.pattern(reg)]],
     
    });
   }


  ngOnInit(

  ): void {
    
  }
  aceptar(){
    // this.membersService.create(this.formulario.value).subscribe( res =>
    //   console.log(res))
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
  getEnviarDatos(){
    console.log(this.formulario.value);
    //
  }

}

