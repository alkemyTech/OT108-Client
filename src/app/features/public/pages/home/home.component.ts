import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { timer } from 'rxjs';
import { SlideService } from 'src/app/features/backoffice/services/slide.service';
import { Slides } from 'src/app/models/slides';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  welcomeText:string = `<H1>SOMOS MAS ONG</H1>`
  itemList:any; 
  load: boolean= true;
  slideEdit: Slides[] | null = null
  constructor(
    private service:SlideService
  ) { 
    if(localStorage.getItem("homeEdit")){
      const homeEdited = JSON.parse(localStorage.getItem("homeEdit") as string);
      this.welcomeText = homeEdited.description;
      this.slideEdit = homeEdited.slides;
      console.log(homeEdited);
    }
     
    

  }

  ngOnInit(): void {
    this.service.getAllSlides().subscribe((res:any) =>{
this.itemList = res.data

  this.load=false 


    })
  }

  updateWelcome(edit:any){
    if(edit != null){
    this.welcomeText = edit
    console.log("no es null")
    }
    console.log("public home")
    
  }
}
