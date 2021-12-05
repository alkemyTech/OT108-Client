import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../../services/slide.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcomeText:string = `<H1>TEXTO DE BIENVENIDA ONG</H1>`
  itemList:any 

  constructor(
    private service:SlideService
  ) { }

  ngOnInit(): void {
    this.service.getAllSlides().subscribe(res =>{
this.itemList = res.data
console.log(this.itemList)
    })
  }

}
