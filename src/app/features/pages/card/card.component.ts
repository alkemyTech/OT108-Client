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
  a: any = {
    id: 1054,
    name: "Ut sem nulla pharetra diam sit.",
    slug: null,
    content:
      "<p>Consectetur adipiscing elit pellentesque habitant morbi tristique. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pretium viverra suspendisse potenti nullam ac tortor. Nibh tellus molestie nunc non. Est ultricies integer quis auctor elit sed. Nisl nunc mi ipsum faucibus vitae aliquet. Viverra orci sagittis eu volutpat odio.</p>",
    image: null,
    user_id: null,
    category_id: 1194,
    created_at: "2021-11-28T03:44:51.000000Z",
    updated_at: "2021-11-28T03:44:51.000000Z",
    deleted_at: null,
  };
  obtenerNovedades() {
    this.servicio.obtenerNovedades().subscribe((data) => {
      console.log("toda la data: ", data);
      for (let i = 0; i < data.data.length; i++) {
        this.novedades.push(data.data[i]);
      }
      this.novedades.push(this.a);

      console.log("novedades: ", this.novedades);
    });
  }
}
