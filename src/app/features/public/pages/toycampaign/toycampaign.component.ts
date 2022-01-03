import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toycampaign',
  templateUrl: './toycampaign.component.html',
  styleUrls: ['./toycampaign.component.scss']
})
export class ToycampaignComponent implements OnInit {

  imagenbanner:string ="../../../../../assets/images/nino-abraza-juguete-p.jpg";
  title: string = "CAMPAÑA DE JUGUETES";
  imagen1: string ="../../../../assets/images/Mejores-Juguetes.jpg";
  descriptionCampa: string= "Regalemos sonrisa a un niño, Ayuda y apoya en donar un juquete a los niños que pertenecen a comunidades vunerables.  Únete en este mes a la campaña de juguetes, si todos nos unimos dando un granito de arena cambiaremos la vida de un niño que en medio de sus quehaceres y rutina será sorprendido con todo un show y regalos.";
  daysCampa:string= "Apartir del  Viernes 24 de enero de 10:00 a 15:00 Hrs. El lugar sera en nuestras Intalaciones de la de SOMOS TODOS";
  slogan:string = '"Esta navidad regalemos felicidad para los niños."';
  logo:string = "../../../../../assets/images/Logotipocampañajuguetes.png";
  load:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.load = false;
  }

}
