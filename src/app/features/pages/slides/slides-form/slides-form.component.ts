import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder, FormGroup, Validators,AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SlideService } from '../../../../services/slide.service';
import Swal from 'sweetalert2'
import { Observable, Subscriber } from 'rxjs';
import { Slides } from '../../../../models/slides'
import { Router, ActivatedRoute } from '@angular/router'
import { CKEditorComponent } from 'ng2-ckeditor';


@Component({

  selector: 'app-slides-form',

  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {


  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;

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

  slides?: Slides = new Slides()
  slidesArray?:Slides[]
  orderChk?:any = []
  ordPres:any


  public formulario: FormGroup;
  constructor(
    private frB: FormBuilder,
    private slideService: SlideService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formulario = this.frB.group({
      'name': ["", [Validators.required]],
      'order': ["",[Validators.required,this.orderPresent()]],
      'description': ["", [Validators.required]],
      'image': ["",[Validators.required]],
      
    });
  }

  ngOnInit(): void {
     this.slideService.getAllSlides().subscribe((slide) => {
       if(slide.success){
      this.slidesArray = slide.data;
       this.checkOrder();
      }}
      )
    
    
    this.loadSlide()

  }

  

  aceptar() {
    const {name,description,image,order} = this.formulario.value;
    if (this.slides?.id != null) {

      this.slideService.update(this.formulario.value, this.slides.id)
    } else if (this.slides?.id == null) {
      this.slideService.create(this.formulario.value)
    }

    
    this.mensajeError(`
    El slide:
    "${this.formulario.controls["name"].value}"
    fue creado exitosamente!
    `);
  }

  mensajeError(texto: string) {
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

  loadSlide(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.slideService.getSlide(id).subscribe((slide) => this.slides = slide.data)
      }
    })
  }


  checkOrder(){
    if(this.slidesArray !=null){
   for(let i = 0; i < this.slidesArray?.length;i++){
     this.orderChk?.push(this.slidesArray[i].order)
   }
  }

  }

  orderPresent():ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      

      this.ordPres = this.orderChk.includes(Number(value))


      return this.ordPres ? {orderTaken :true} : null
    }
  }
  

  
  
    
  }



