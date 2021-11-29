import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
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
  image: string = "";
  tituloImage: string = "Profile Photo (formato .jpg o .png)";
  edit: boolean = false;

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private servicio: ServicioUsuarioFormService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      profile_image: ["", [Validators.required]],
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
      password: this.formulario.get("password")?.value,
      profile_image: this.formulario.get("profile_image")?.value,
    };

    if (this.id !== null) {
      this.servicio.editarUsuario(this.id, USUARIO).subscribe((data) => {
        console.log("editado: ", data);
      });
    } else {
      this.servicio.creacionNuevoUsuario(USUARIO).subscribe((data) => {
        console.log("creado: ", data);
        console.log("profile: ", USUARIO.profile_image);
      });
    }
  }

  editar() {
    if (this.id !== null) {
      this.edit = true;
      this.tituloImage = "";
      this.titulo = "EDITAR USUARIO";
      this.servicio.obtenerUsuario(this.id).subscribe((data) => {
        console.log("profile: ", data.data.profile_image);
        console.log("description: ", data.data.description);
        console.log("editar: ", data);
        this.formulario.patchValue({
          name: data.data.name,
          email: data.data.email,
          password: data.data.password,
        });
        this.image = data.data.profile_image;
      });
    }
  }

  onChange($event: Event) {
    let files = ($event.target as HTMLInputElement).files?.item(0);

    if (files != null) {
      this.converToBase64(files);
    }
  }

  converToBase64(file: File) {
    let observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.formulario.patchValue({ profile_image: d });
    });
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete;
    };
  }
}
