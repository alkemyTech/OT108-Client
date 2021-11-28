import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable, Subscriber } from 'rxjs';
import { MembersService } from '../members.service';
import { CKEditorComponent } from 'ng2-ckeditor';
import { Members } from 'src/app/features/pages/members/models/members'; 
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-members-form',
  templateUrl: './members-form.component.html',
  styleUrls: ['./members-form.component.scss']
})
export class MembersFormComponent implements OnInit {
 // ckeditorContent: string ="<b>probando contenido</b>";
   
 @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;
 titulo: string = "AGREGAR MIEMBROS";

 ngAfterViewChecked() {
   let editor = this.ckEditor.instance;

   editor.config.toolbarGroups = [
     { name: 'document', groups: ['mode', 'document', 'doctools'] },
     { name: 'clipboard', groups: ['clipboard', 'undo'] },
     { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
     { name: 'forms' },
     '/',
     { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
     { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
     { name: 'links' },
     { name: 'insert' },
     '/',
     { name: 'styles' },
     { name: 'colors' },
     { name: 'tools' },
     { name: 'others' },
     { name: 'about' }
   ]

   editor.config.removeButtons = 'Source,Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio';
 }

 members?: Members = new Members()


  public formulario:FormGroup;
  constructor(
    private frB:FormBuilder,
    private membersService:MembersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';//para las url
    this.formulario = this.frB.group( {
      'name': ['', [Validators.required, Validators.minLength(4)]],
      'image': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'facebookUrl': ['', [Validators.required, Validators.pattern(reg)]],
      'linkedinUrl': ['', [Validators.required, Validators.pattern(reg)]],
     
    });
    // this.id = this.router.snapshot.paramMap.get("id");
   }


  ngOnInit(): void {
    this.loadMember();
  }
  aceptar(){
   

    if (this.members?.id != null) {
       this.membersService.editarMembers(this.formulario.value, this.members.id).subscribe(res =>
        console.log(res))
    } else if (this.members?.id == null) {
      this.membersService.create(this.formulario.value).subscribe(res =>
        console.log(res))
    }

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
  onChange($event: Event) {

    let files = ($event.target as HTMLInputElement).files?.item(0)

    if (files != null) {

      this.converToBase64(files)
    }
  }

  converToBase64(file: File) {

    let observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })

    observable.subscribe((d) => {
      this.formulario.patchValue({ image: d })
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {

      subscriber.next(fileReader.result)
      subscriber.complete
    }

    fileReader.onerror = (error) => {
      subscriber.error(console.error)
      subscriber.complete
    }

  }



loadMember(): void {
  this.activatedRoute.params.subscribe(params => {
    let id = params['id']
    if (id) {
      this.titulo="EDITAR MIEMBROS";
      this.membersService.getMember(id).subscribe((members) => this.members = members.data)
    }
  })
}


}

