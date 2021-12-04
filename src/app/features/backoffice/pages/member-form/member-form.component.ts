import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CKEditorComponent } from "ng2-ckeditor";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
import { Members } from "src/app/models/members";
import { MembersService } from "../../services/members.service";
import { AlertService } from "src/app/services/alert.service";
@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})
export class MemberFormComponent implements OnInit {
  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;
  title: string = "AGREGAR MIEMBROS";
  id: string | null;
  image: string = "";

  ngAfterViewChecked() {
    let editor = this.ckEditor.instance;
    //Arreglo de los botones de nuestro CkEditor
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

  members?: Members = new Members();

  public formulario: FormGroup;
  constructor(
    private frB: FormBuilder,
    private membersService: MembersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    const reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"; //para las url
    this.formulario = this.frB.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      image: ["", [Validators.required]],
      description: ["", [Validators.required]],
      facebookUrl: ["", [Validators.required, Validators.pattern(reg)]],
      linkedinUrl: ["", [Validators.required, Validators.pattern(reg)]],
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }
  aceptar() {
    if (this.members?.id != null) {
      this.membersService
        .editMembers(this.formulario.value, this.members.id.toString())
        .subscribe((res) =>
          this.alert.messageGood("Los Datos fueron actualizados exitosamente!")
        );
    } else if (this.members?.id == null) {
      this.membersService
        .create(this.formulario.value)
        .subscribe((res) =>
          this.alert.messageGood(" Los Datos fueron creado exitosamente!")
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

    fileReader.onerror = (error) => {
      subscriber.error(console.error);
      subscriber.complete;
    };
  }

  loadMember(): void {
    if (this.id) {
      this.title = "EDITAR MIEMBROS";
      this.membersService.getMember(this.id).subscribe((members: any) => {
        this.formulario.patchValue({
          name: members.data.name,

          description: members.data.description,
          facebookUrl: members.data.facebookUrl,
          linkedinUrl: members.data.linkedinUrl,
        });
        this.image = members.data.image;
      });
    }
  }
}
