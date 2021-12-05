import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { User } from "src/app/models/user";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  public formulario: FormGroup;
  title = "AGREGAR USUARIO";
  id: string | null;
  image: string = "";
  titleImage: string = "Profile Photo (formato .jpg o .png)";
  edit: boolean = false;

  constructor(
    private frB: FormBuilder,
    private router: ActivatedRoute,
    private service: UsersService,
    private alert: AlertService
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
    this.edits();
  }

  creacionYEdicionUsuario() {
    const user: User = {
      name: this.formulario.get("name")?.value,
      email: this.formulario.get("email")?.value,
      password: this.formulario.get("password")?.value,
      profile_image: this.formulario.get("profile_image")?.value,
    };

    if (this.id) {
      this.service.editUser(this.id, user).subscribe((data) => {
        this.alert.messageGood("Usuario editado");
      });
    } else {
      this.service.createUser(user).subscribe((data) => {
        this.alert.messageGood("Usuario creado");
      });
    }
  }

  edits() {
    if (this.id !== null) {
      this.edit = true;
      this.titleImage = "";
      this.title = "EDITAR USUARIO";
      this.service.getUser(this.id).subscribe((data) => {
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
