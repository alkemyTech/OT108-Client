import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Modelo } from "./Modelo/modelo";
import { NewsService } from "./news.service";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  public formulario: FormGroup;
  id: string | null;
  titulo: string = "AGREGAR NOVEDAD";
  categoria: any;

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private servicio: NewsService,
    private toastr: ToastrService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      content: ["", [Validators.required]],
      category_id: ["", [Validators.required]],
      image: ["", Validators.required],
    });

    this.id = this.router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.editar();
    this.obtenerCategorias();
  }
  creacionYEdicionDeNovedad() {
    let categoriaCorrecta = false;
    const NOVEDAD: Modelo = {
      name: this.formulario.get("name")?.value,
      content: this.formulario.get("content")?.value,
      category_id: this.formulario.get("category_id")?.value,
      image: this.formulario.get("image")?.value,
    };

    if (this.id !== null) {
      this.servicio.editarNovedad(this.id, NOVEDAD).subscribe((data) => {
        console.log("editado: ", data);
      });
    } else {
      for (let i = 0; i < this.categoria.data.length; i++) {
        if (this.categoria.data[i].id == NOVEDAD.category_id) {
          categoriaCorrecta = true;
          this.servicio.creacionNovedad(NOVEDAD).subscribe((data) => {
            console.log("creado: ", data);
          });
        }
      }
      if (!categoriaCorrecta) {
        this.toastr.error(
          "Ingresa una categoria valida",
          "Categoria inexistente"
        );
      }
    }
  }

  editar() {
    if (this.id !== null) {
      this.titulo = "EDITAR NOVEDAD";
      this.servicio.obtenerNovedad(this.id).subscribe((data) => {
        this.formulario.patchValue({
          name: data.data.name,
          content: data.data.content,
          category_id: data.data.category_id,
          image: data.data.image,
        });
      });
    }
  }

  obtenerCategorias() {
    this.servicio.obtenerCategorias().subscribe((data) => {
      this.categoria = data;
      console.log(data);
    });
  }
}
