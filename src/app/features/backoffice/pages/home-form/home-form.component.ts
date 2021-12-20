import { Component, OnInit,Output, EventEmitter, ViewChild } from '@angular/core';
import { CKEditorComponent } from "ng2-ckeditor";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Home } from 'src/app/models/home';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideService } from '../../services/slide.service';
import { Slides } from 'src/app/models/slides';
import { AlertService } from 'src/app/services/alert.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;
  desc: String = ""
  itemList:any[] = [];
  slideArray:any[] = [];

  

  ngAfterViewChecked() {
    let editor = this.ckEditor.instance;
    //Arreglo de los botones de nuestro CkEditor
    editor.config.toolbarGroups = [
      { name: "document", groups: ["mode", "document", "doctools"] },
      { name: "clipboard", groups: ["clipboard", "undo"] },
      { name: "editing", groups: ["find", "selection", "spellchecker"] },
      { name: "forms" },
      "/",
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
      },
      { name: "links" },
      { name: "insert" },
      "/",
      { name: "styles" },
      { name: "colors" },
      { name: "tools" },
      { name: "others" },
      { name: "about" },
    ];

    editor.config.removeButtons =
      "Source,Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio";
  }

  public formulario: FormGroup;
  constructor(
    private frB: FormBuilder,
     private router: Router,
     private service:SlideService,
    private alert: AlertService
  ) {

    this.formulario = this.frB.group({
      slide1: ["", ],
      slide2: ["", ],
      slide3: ["", ],
      description: ["",Validators.required],

    });
  }

  

  ngOnInit(): void {
       this.service.getAllSlides().subscribe((res:any) =>{
         this.itemList = res.data
      
         })
  }

  
  getEditSlide(id:number){

    console.log(this.itemList)
    if(this.itemList){
    for(let i=0; i<this.itemList.length;i++){
      if(this.itemList[i].id == id){
        console.log(this.itemList[i])
        return this.itemList[i]
      }
    }
  }
    
  }

  slideAdd(slide:any){
    this.slideArray.push(slide);
    console.log(this.slideArray)
  }


  editWelcomeText() {
   const homeEdit:any = {
     description: this.formulario.get("description")?.value,
     slides: [
       this.slideArray[0],
       this.slideArray[1],
       this.slideArray[2],
       
      ]
   } 
  
  
  localStorage.setItem("homeEdit",JSON.stringify(homeEdit));
  this.alert.messageGood("EXITO!")
  this.router.navigate(['/public/home']);
  

  }

}
