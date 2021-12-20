import { Component, OnInit,Input } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "src/app/services/slide.service";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"],
})
export class SlidesComponent implements OnInit {
  @Input()slideList:Slides[] | null = null
  
  

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    if(!this.slideList){
    this.slideService.getAllSlides().subscribe((slide) => {
      if (slide.success) {
        (this.slideList = slide.data);
      }
    });
  }
  

}
}
