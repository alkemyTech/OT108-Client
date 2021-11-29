import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder, FormGroup, Validators,AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CKEditorComponent } from 'ng2-ckeditor';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { OrganizationService } from 'src/app/services/organization.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {
  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent
  id!: number | null;
  
  organization: any;
  logo?: string = "";
  tituloImage: string = "Profile Photo (formato .jpg o .png)";
  edit: boolean = false;

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

  public formulario!: FormGroup;
  constructor(
    private frB: FormBuilder,
    private organizationService:OrganizationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.formulario = this.frB.group({
      'name': [this.organization?.name, [Validators.required]],
      'logo': [this.organization?.logo,[Validators.required]],
      'short_description': [this.organization?.short_description, [Validators.required]],
      'long_description': [this.organization?.long_description,[Validators.required]],
      'facebook_url': [this.organization?.facebook_url,[Validators.required]],
      'linkedin_url': [this.organization?.linkedin_url,[Validators.required]],
      'instagram_url': [this.organization?.instagram_url,[Validators.required]],
      'twitter_url': [this.organization?.twitter_url,[Validators.required]],
      
    });
  }

  ngOnInit(): void {

    
    this.editar();

  }
  aceptar() {
       
      this.organizationService.update(this.formulario.value, this.organization.id).subscribe(res => 
        
        this.mensajeCreado(" La organizacion fue actualizado exitosamente!")) 
  }

  mensajeCreado(texto: string) {
    Swal.fire({
      icon: 'success',
      title: 'Exito!',
      text: texto,
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

  // loadOrganizational(): void {
  //   this.edit = true;
  //   this.tituloImage = "";
  //   this.activatedRoute.params.subscribe( => {
  //     let id = 1
  //     if (id) {
  //       this.organizationService.getOrganization(id).subscribe((organizacion) => this.organization = organizacion.data)
  //     }
  //   })
  // }
  editar() {
    if (this.id !== null) {
      this.edit = true;
      this.tituloImage = "";
      this.organizationService.getOrganization(this.id).subscribe((data) => {
        console.log("editar: ", data);
        this.formulario.patchValue({
          name: data.data?.name,
          logo: data.data?.logo,
          short_description: data.data?.short_description,
          long_description: data.data?.long_description,
          facebook_url: data.data?.facebook_url,
          linkedin_url: data.data?.linkedin_url,
          instagram_url: data.data?.instagram_url,
          twitter_url: data.data?.twitter_url
        });
        this.logo = data.data?.logo;
      });
    }
  }
  
}
