import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { SlideService } from '../../../services/slide.service';

@Component({
  selector: 'app-slide-search',
  templateUrl: './slide-search.component.html',
  styleUrls: ['./slide-search.component.scss']
})
export class SlideSearchComponent implements OnInit {

  @Output() slideAdded = new EventEmitter<any>();
  close:boolean = false;
  slideArray:any[] = [];
  slideStore:any[] = [];


  constructor(private service:SlideService) { }

  ngOnInit(): void {
    
  }

  slideSearch(){
    this.service.getAllSlides().subscribe(res =>{
      this.slideArray = res.data 
      console.log(this.slideArray)
     })
     this.close = true;

  }

  closeSearch(){
    this.slideArray = []
    this.close = false
  }

  addSlide(slide:any){
    
    this.slideAdded.emit(slide)
    this.slideArray = []
    this.close = false
  }

}
