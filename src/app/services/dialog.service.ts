import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../components/dialog/dialog.component";
import { DialogErrorComponent } from "../components/dialog-error/dialog-error.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private dialog: MatDialog) {}
  openConfirmDialog(text?: string) {
    this.dialog.open(DialogComponent, {
      width: "250px",
      data: text ? text : "guardado con exito",
      panelClass: "content-container",
      disableClose: true,
    });
  }

  openErrorDialog(text?: string) {
    this.dialog.open(DialogErrorComponent, {
      width: "250px",
      data: text ? text : "Error Intente de nuevo",
      panelClass: "content-container",
      disableClose: true,
    });
  }
}
