import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
import { Categoria } from "../Modelo/categoria";
import { CategoriaServicioService } from "../Servicio/categoriaServicio";
import { CKEditorComponent } from "ng2-ckeditor";

@Component({
  selector: "app-categories-form",
  templateUrl: "./categories-form.component.html",
  styleUrls: ["./categories-form.component.scss"],
})
export class CategoriesFormComponent implements OnInit {
  public formulario: FormGroup;
  titulo = "AGREGAR CATEGORIA";
  id: string | null;
  image: string = "";
  edit: boolean = false;
  tituloImage: string = "Imagen (formato .jpg o .png)";

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private servicio: CategoriaServicioService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
    this.id = this.router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.editar();
  }
  creacionYEdicionCategoria() {
    const CATEGORIA: Categoria = {
      name: this.formulario.get("name")?.value,
      description: this.formulario.get("description")?.value,
      image: this.formulario.get("image")?.value,
    };

    if (this.id !== null) {
      this.servicio.editarCategoria(this.id, CATEGORIA).subscribe((data) => {
        console.log("editado: ", data);
      });
    } else {
      this.servicio.crearCategoria(CATEGORIA).subscribe((data) => {
        console.log("creado: ", data);
      });
    }
  }

  editar() {
    if (this.id !== null) {
      this.edit = true;
      this.titulo = "EDITAR CATEGORIA";
      this.tituloImage = "";
      this.servicio.obtenerCategoria(this.id).subscribe((data) => {
        console.log("editar: ", data);
        this.formulario.patchValue({
          name: data.data.name,
          description: data.data.description,
        });
        this.image = data.data.image;
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
      this.formulario.patchValue({ image: d });
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

  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;

  ngAfterViewChecked() {
    let editor = this.ckEditor.instance;

    editor.config.toolbarGroups = [
      { name: "document", groups: ["mode", "document", "doctools"] },
      { name: "clipboard", groups: ["clipboard", "undo"] },
      { name: "editing", groups: ["find", "selection", "spellchecker"] },
      { name: "forms" },
      "/",
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
      },
      { name: "links" },
      { name: "insert" },
      "/",
      { name: "styles" },
      { name: "colors" },
      { name: "tools" },
      { name: "others" },
      { name: "about" },
    ];

    editor.config.removeButtons =
      "Source,Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio";
  }
}
