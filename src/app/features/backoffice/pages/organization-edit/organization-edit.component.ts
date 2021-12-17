import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { CKEditorComponent } from "ng2-ckeditor";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
import { Organization } from "src/app/models/organization";
import { OrganizationService } from "../../services/organization.service";
import { AlertService } from "src/app/services/alert.service";
import { DialogService } from "src/app/services/dialog.service";
@Component({
  selector: "app-organization-edit",
  templateUrl: "./organization-edit.component.html",
  styleUrls: ["./organization-edit.component.scss"],
})
export class OrganizationEditComponent implements OnInit {
  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;
  id!: string | null;
  organization!: Organization;
  logo?: string = "";
  tituloImage: string = "Profile Photo (formato .jpg o .png)";
  edit: boolean = false;

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

  public formulario!: FormGroup;
  constructor(
    private frB: FormBuilder,
    private organizationService: OrganizationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService,
    private dialogService: DialogService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      short_description: ["", [Validators.required]],
      long_description: ["", [Validators.required]],
      facebook_url: ["", [Validators.required]],
      linkedin_url: ["", [Validators.required]],
      instagram_url: ["", [Validators.required]],
      twitter_url: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.editar();
  }
  accept() {
    this.organizationService
      .update(this.formulario.value, 1)
      .subscribe((res) => {
        //aqui llamamos el servicio de dialogo q me muestra e mensaje de guardado con exito
        this.dialogService.openConfirmDialog();
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

    fileReader.onerror = (error) => {
      subscriber.error(console.error);
      subscriber.complete;
    };
  }

  editar() {
    this.edit = true;
    this.tituloImage = "";
    this.organizationService.getOrganization(1).subscribe(
      (data: any) => {
        if (data.success) {
          this.formulario.patchValue({
            name: data.data?.name,
            short_description: data.data?.short_description,
            long_description: data.data?.long_description,
            facebook_url: data.data?.facebook_url,
            linkedin_url: data.data?.linkedin_url,
            instagram_url: data.data?.instagram_url,
            twitter_url: data.data?.twitter_url,
          });
          this.logo = data.data?.logo;
        } else {
          this.dialogService.openErrorDialog();
        }
      },
      (error) => {
        this.dialogService.openErrorDialog();
      }
    );
  }
}
