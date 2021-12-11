import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contact } from "src/app/models/conctact";
import { ContactService } from "src/app/services/contact.service";
import { DialogService } from "src/app/services/dialog.service";

@Component({
  selector: "app-contacto-form",
  templateUrl: "./contacto-form.component.html",
  styleUrls: ["./contacto-form.component.scss"],
})
export class ContactoFormComponent implements OnInit {
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Validar que solo acepte numeros;
  private numPattern = /[0-9\+\-\ ]/;
  formulario: FormGroup;
  constructor(
    private frB: FormBuilder,
    private contactService: ContactService,
    private dialogService: DialogService
    ) {
    this.formulario = this.frB.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.numPattern),
        ],
      ],
      message: ["", [Validators.required]],
    });
  }
  get name() {
    return this.formulario.get("name");
  }
  get email() {
    return this.formulario.get("email");
  }

  get phone() {
    return this.formulario.get("phone");
  }
  get message() {
    return this.formulario.get("message");
  }

  ngOnInit(): void {}

  crearContact() {
    const contact: Contact = {
      name: this.formulario.get("name")?.value,
      email: this.formulario.get("email")?.value,
      phone: this.formulario.get("phone")?.value,
      message: this.formulario.get("message")?.value,
    };
    this.contactService.creationContact(contact).subscribe((data:any) => {
      if (data.success) {
        this.dialogService.openConfirmDialog();
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
