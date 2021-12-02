import { Component, OnInit } from "@angular/core";
import { Card } from "./Modelo/card";
import { CardService } from "./Servicio/card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  novedades: Card[] = [];
  imagenNull: boolean = false;

  constructor(private servicio: CardService) {}

  ngOnInit(): void {
    this.obtenerNovedades();
  }

  obtenerNovedades() {
    this.servicio.obtenerNovedades().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.novedades.push(data.data[i]);
      }
    });
  }
}
