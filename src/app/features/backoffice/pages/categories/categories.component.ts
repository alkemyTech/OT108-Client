import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
import { CKEditorComponent } from "ng2-ckeditor";
import { CategoriesService } from "../../services/categories.service";
import { Categories } from "src/app/models/categories";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  public formulario: FormGroup;
  title = "AGREGAR CATEGORIA";
  id: string | null;
  image: string = "";
  edit: boolean = false;
  tituloImage: string = "Imagen (formato .jpg o .png)";

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private services: CategoriesService,
    private alert: AlertService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
    this.id = this.router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.edits();
  }
  createAndEditCategory() {
    const category: Categories = {
      name: this.formulario.get("name")?.value,
      description: this.formulario.get("description")?.value,
      image: this.formulario.get("image")?.value,
    };
    if (this.id) {
      this.services.editCategory(this.id, category).subscribe((data) => {
        if (data.success) {
          this.alert.messageGood("La Categoria fue editada con exito!!!");
        } else {
          this.alert.messageError("Error en en la edicion del dato");
        }
      });
    } else {
      this.services.createCategory(category).subscribe((data) => {
        this.alert.messageGood("Categoria creada");
      });
    }
  }

  edits() {
    if (this.id !== null) {
      this.edit = true;
      this.title = "EDITAR CATEGORIA";
      this.tituloImage = "";
      this.services.getCategory(this.id).subscribe(
        (data) => {
          if (data.success) {
            this.formulario.patchValue({
              name: data.data.name,
              description: data.data.description,
            });
            this.image = data.data.image;
          } else {
            this.alert.messageError("Error en en la carga del dato");
          }
        },
        (error) => {
          this.alert.messageError("Error en en la carga de este id del dato");
        }
      );
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
