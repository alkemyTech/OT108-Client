import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/models/activities";
import { BackoffiactivitiesService } from "../Servicio/backofficeactivities";

@Component({
  selector: "app-backoffice-activities",
  templateUrl: "./backoffice-activities.component.html",
  styleUrls: ["./backoffice-activities.component.scss"],
})
export class BackofficeActivitiesComponent implements OnInit {
  actividades: Activity[] = [];
  imagenNull: boolean = false;

  constructor(private servicio: BackoffiactivitiesService) {}

  ngOnInit(): void {
    this.obtenerActividades();
  }

  obtenerActividades() {
    this.servicio.obtenerActividades().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.actividades.push(data.data[i]);
      }
    });
  }
}
