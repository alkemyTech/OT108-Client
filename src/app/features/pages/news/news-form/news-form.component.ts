import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, Subscriber } from "rxjs";
import { Modelo } from "./Modelo/modelo";
import { NewsService } from "./news.service";
import { CKEditorComponent } from "ng2-ckeditor";

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
  image: string = "";
  tituloImage: string = "Imagen";
  edit: boolean = false;

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
      this.edit = true;
      this.titulo = "EDITAR NOVEDAD";
      this.tituloImage = "";
      this.servicio.obtenerNovedad(this.id).subscribe((data) => {
        this.formulario.patchValue({
          name: data.data.name,
          content: data.data.content,
          category_id: data.data.category_id,
        });
        this.image = data.data.image;
      });
    }
  }

  obtenerCategorias() {
    this.servicio.obtenerCategorias().subscribe((data) => {
      this.categoria = data;
      console.log(data);
    });
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
