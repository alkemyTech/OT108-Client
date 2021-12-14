import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";
@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"],
})
export class SlideComponent implements OnInit {
  slides: Slides[] = [];
  imagenNull: boolean = false;

  constructor(private service: SlideService) {}

  ngOnInit(): void {
    this.obtenerSlides();
  }
  obtenerSlides() {
    this.service.getAllSlides().subscribe((data:any) => {
      for (let i = 0; i < data.data.length; i++) {
        this.slides.push(data.data[i]);
      }
    });
  }
}
