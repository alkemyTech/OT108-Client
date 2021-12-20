import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CKEditorComponent } from "ng2-ckeditor";
import { ToastrService } from "ngx-toastr";
import { Observable, Subscriber } from "rxjs";
import { News } from "src/app/models/news";
import { AlertService } from "src/app/services/alert.service";
import { NewsService } from "../../services/news.service";
import { DialogService } from "src/app/services/dialog.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  public formulario: FormGroup;
  id: string | null;
  title: string = "AGREGAR NOVEDAD";
  categoria: any;
  image: string = "";
  titleImage: string = "Imagen";
  edit: boolean = false;

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private service: NewsService,
    private toastr: ToastrService,
    private alert: AlertService,
    private serviceDialog: DialogService
  ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      content: ["", [Validators.required]],
      image: ["", Validators.required],
    });

    this.id = this.router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.edits();
    this.getCategories();
  }
  createAndEditNews() {
    let categoriaCorrecta = false;
    const NOVEDAD: News = {
      name: this.formulario.get("name")?.value,
      content: this.formulario.get("content")?.value,
      category_id: this.formulario.get("category_id")?.value,
      image: this.formulario.get("image")?.value,
    };

    if (this.id) {
      this.service.editNews(this.id, NOVEDAD).subscribe(
        (data) => {
          this.alert.messageGood("Novedad editada");
        },
        (error) => {
          this.serviceDialog.openErrorDialog();
        }
      );
    } else {
      this.service.createNews(NOVEDAD).subscribe(
        (data) => {
          this.alert.messageGood("Novedad creada");
        },
        (error) => {
          this.serviceDialog.openErrorDialog();
        }
      );
    }
  }

  edits() {
    if (this.id !== null) {
      this.edit = true;
      this.title = "EDITAR NOVEDAD";
      this.titleImage = "";
      this.service.getNews(this.id).subscribe((data) => {
        this.formulario.patchValue({
          name: data.data.name,
          content: data.data.content,
          category_id: data.data.category_id,
        });
        this.image = data.data.image;
      });
    }
  }

  getCategories() {
    this.service.getCategories().subscribe((data: any) => {
      this.categoria = data.data;
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
