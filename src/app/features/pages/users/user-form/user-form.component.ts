import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from "./Modelo/usuario";
import { ServicioUsuarioFormService } from "./servicioUsuarioForm.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  public formulario: FormGroup;
  titulo = "AGREGAR USUARIO";
  id: string | null;

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private servicio: ServicioUsuarioFormService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      //'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      foto: ["", [Validators.required]],
      //'password': ['', [Validators.required,Validators.minLength(6)]],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[^@]+@[^@]+.[a-zA-Z]{2,}$"),
        ],
      ],
      password: ["", [Validators.required]],
    });
    this.id = this.router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.editar();
  }

  creacionYEdicionUsuario() {
    const USUARIO: Usuario = {
      name: this.formulario.get("name")?.value,
      email: this.formulario.get("email")?.value,
      description: this.formulario.get("description")?.value,
      password: this.formulario.get("password")?.value,
    };

    if (this.id !== null) {
      this.servicio.editarUsuario(this.id, USUARIO).subscribe((data) => {
        console.log("editado: ", data);
      });
    } else {
      this.servicio.creacionNuevoUsuario(USUARIO).subscribe((data) => {
        console.log("creado: ", data);
      });
    }
  }

  editar() {
    if (this.id !== null) {
      this.titulo = "EDITAR USUARIO";
      this.servicio.obtenerUsuario(this.id).subscribe((data) => {
        console.log("editar: ", data);
        this.formulario.patchValue({
          name: data.data.name,
          email: data.data.email,
          description: data.data.description,
          password: data.data.password,
        });
      });
    }
  }
}
