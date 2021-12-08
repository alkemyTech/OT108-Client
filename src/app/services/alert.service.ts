import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  messageError(texto: string) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: texto,
    });
  }

  messageGood(texto: string) {
    Swal.fire({
      icon: "success",
      title: "Excelente!!",
      text: texto,
    });
  }
}
