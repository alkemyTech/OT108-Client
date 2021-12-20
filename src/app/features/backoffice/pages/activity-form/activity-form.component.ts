import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscriber } from "rxjs";
import { Activity } from "src/app/models/activities";
import { AlertService } from "src/app/services/alert.service";
import { DialogService } from "src/app/services/dialog.service";
import { ActivityService } from "../../services/activity.service";
@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  title = "base-ong-angular-client";
  titleForm = "AGREGAR ACTIVIDAD";
  images: string = "";
  imagetitle: string = "Imagen";
  edit: boolean = false;
  editImage: boolean = false;
  id: string | null = null;
  constructor(
    private frB: FormBuilder,
    private serchId: ActivatedRoute,
    private router: Router,
    private ActivityService: ActivityService,
    private alert: AlertService,
    private serviceDialog: DialogService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }
  activityForm = this.frB.group({
    name: [
      "",
      [
        Validators.required,
        Validators.pattern("[A-Za-z]*"),
        this.validatorName,
      ],
    ],
    image: ["", [Validators.required]],
    description: [""],
  });

  get name() {
    return this.activityForm.get("name");
  }

  validatorName(control: AbstractControl) {
    const name = <string>control.value;
    const space = name.includes(" ");
    if (space) {
      return { space: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.editActivity();
  }

  createAndEdit() {
    const { name, image, description } = this.activityForm.value;
    const activity: Activity = {
      id: Number(this.id),
      name,
      image,
      description,
    };
    if (this.id) {
      this.ActivityService.editActivity(this.id, activity).subscribe(
        (act) => {
          if (act.success) {
            this.serviceDialog.openConfirmDialog(
              "La actividad fue editada con exito!!!"
            );
          } else {
            this.serviceDialog.openErrorDialog(
              "Error en en la edicion del dato"
            );
          }
        },
        (error) => {
          this.serviceDialog.openErrorDialog(
            "Error en en la peticion de editar del dato"
          );
        }
      );
    } else {
      this.ActivityService.creationActivity(activity).subscribe(
        (data) => {
          if (data.success) {
            this.serviceDialog.openConfirmDialog(
              "La actividad fue creada con exito !!"
            );
          } else {
            this.serviceDialog.openErrorDialog("La actividad no fue creada");
          }
        },
        (error) => {
          this.serviceDialog.openErrorDialog(
            "Error en en la peticion de creacion  del dato"
          );
        }
      );
    }
  }

  editActivity() {
    if (this.id) {
      this.edit = true;
      this.imagetitle = "Quiere cambiar de imagen?";
      this.titleForm = "EDITAR ACTIVIDAD";
      this.ActivityService.getActivity(this.id).subscribe(
        (act: any) => {
          if (act.success) {
            this.activityForm.patchValue({
              name: act.data.name,
              description: act.data.description,
            });
            this.images = act.data.image;
          } else {
            this.serviceDialog.openErrorDialog("Error en en la carga del dato");
          }
        },
        (error) => {
          this.serviceDialog.openErrorDialog(
            "Error en la busqueda de esta actidad"
          );
        }
      );
    }
  }

  onChange($event: Event) {
    let files = ($event.target as HTMLInputElement).files?.item(0);
    if (files != null) {
      this.editImage = true;
      this.converToBase64(files);
    }
  }

  converToBase64(file: File) {
    let observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.activityForm.patchValue({
        image: d,
      });
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
