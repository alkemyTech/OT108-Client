import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  token: boolean = false;

  @Input() slogan:string = "";
  @Input() campLogo:string = "";

  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if (token) {
      this.token = true;
    }
  }
}
