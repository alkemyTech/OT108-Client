import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Activity } from "src/app/models/activities";
import { ActividadesdetalleService } from "src/app/features/backoffice/services/actividadesdetalle";

@Component({
  selector: "app-actividades-detalle",
  templateUrl: "./actividades-detalle.component.html",
  styleUrls: ["./actividades-detalle.component.scss"],
})
export class ActividadesDetalleComponent implements OnInit {
  id: number | null;
  actividad: Activity | null;

  constructor(
    private aRouter: ActivatedRoute,
    private servicio: ActividadesdetalleService
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get("id"));
    this.actividad = null;
  }

  ngOnInit(): void {
    this.obtenerActividad();
  }

  obtenerActividad() {
    if (this.id !== null) {
      this.servicio.obtenerActividad(this.id).subscribe((data) => {
        this.actividad = data.data;
      });
    }
  }
}
