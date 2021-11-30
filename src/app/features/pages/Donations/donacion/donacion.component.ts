import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Donacion } from "../Modelo/donacion";

@Component({
  selector: "app-donacion",
  templateUrl: "./donacion.component.html",
  styleUrls: ["./donacion.component.scss"],
})
export class DonacionComponent implements OnInit {
  public formulario: FormGroup;
  texto: String = "Donacion a realizar";

  constructor(private frB: FormBuilder) {
    this.formulario = this.frB.group({
      donacion: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  donar() {
    const DONACION: Donacion = {
      donacion: "$" + this.formulario.get("donacion")?.value,
    };
    console.log(DONACION);
  }
}
