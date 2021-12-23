import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  token: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if (token) {
      this.token = true;
    }
  }
}
