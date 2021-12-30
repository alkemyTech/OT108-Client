import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schoolcampaign",
  templateUrl: "./schoolcampaign.component.html",
  styleUrls: ["./schoolcampaign.component.scss"],
})
export class SchoolcampaignComponent implements OnInit {
  imagenbanner: string = "../../../../../assets/images/schoolUne.jpg";
  title: string = "CAMPAÑA ESCOLAR";
  imagen1: string =
    "../../../../assets/images/vuelta-al-cole-utiles-escolares.webp";
  descriptionCampa: string =
    "Regalemos sonrisa a un niño, Ayuda y apoya en donar utiles escolares a los niños que pertenecen a comunidades vunerables.  Con estas donaciones podemos hacer que más alumnos  de todo el país puedan empezar las clases con los útiles que necesitan, si todos nos unimos dando un granito de arena cambiaremos la vida de un niño que en medio de sus rutina diaria";
  daysCampa: string =
    "Apartir del  Viernes 24 de enero de 10:00 a 15:00 Hrs. El lugar sera en nuestras Intalaciones de la de SOMOS TODOS";
  slogan: string = "";
  logo: string = "../../../../../assets/images/materiales-escolares.png";
  load: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.load = false;
  }
}
