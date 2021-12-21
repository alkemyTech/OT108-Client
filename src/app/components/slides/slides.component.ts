import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"],
})
export class SlidesComponent implements OnInit {
  images?: Slides[];
  loader = true;

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slideService.getAllSlides().subscribe((slide) => {
      if (slide.success) {
        (this.images = slide.data), (this.loader = false);
      }
    });
  }
}
