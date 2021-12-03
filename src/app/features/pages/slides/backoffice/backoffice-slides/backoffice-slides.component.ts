import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { BackofficeslidesService } from "../Servicio/backofficeslides";

@Component({
  selector: "app-backoffice-slides",
  templateUrl: "./backoffice-slides.component.html",
  styleUrls: ["./backoffice-slides.component.scss"],
})
export class BackofficeSlidesComponent implements OnInit {
  slides: Slides[] = [];
  imagenNull: boolean = false;

  constructor(private servicio: BackofficeslidesService) {}

  ngOnInit(): void {
    this.obtenerSlides();
  }
  obtenerSlides() {
    this.servicio.obtenerSlides().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.slides.push(data.data[i]);
      }
    });
  }
}
