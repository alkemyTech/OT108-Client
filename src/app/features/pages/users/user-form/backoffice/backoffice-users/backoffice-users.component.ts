import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../../Modelo/usuario";
import { BackofficeusersService } from "../Servicio/backofficeusers";

@Component({
  selector: "app-backoffice-users",
  templateUrl: "./backoffice-users.component.html",
  styleUrls: ["./backoffice-users.component.scss"],
})
export class BackofficeUsersComponent implements OnInit {
  users: Usuario[] = [];
  name: any;
  email: string = "";
  imagenNull: boolean = false;

  constructor(
    private servicio: BackofficeusersService,
    private actividadRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicio.obtenerUsuarios().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.users.push(data.data[i]);
      }
    });
  }
}
