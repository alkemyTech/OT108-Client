import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  go(route: string) {
    switch (route) {
      case "members":
        this.router.navigate(["backoffice/member-list"]);
        break;
      case "user":
        this.router.navigate(["backoffice/user-list"]);
        break;
      case "slides":
        this.router.navigate(["backoffice/slides"]);
        break;
      case "community":
        this.router.navigate(["backoffice/home-form"]);
        break;
      case "testimony":
        this.router.navigate(["backoffice/organization"]);
        break;
      case "categories":
        this.router.navigate(["backoffice/categories-list"]);
        break;
      case "activities":
        this.router.navigate(["backoffice/activities-list"]);
        break;
      case "novelties":
        this.router.navigate(["backoffice/news-list"]);
        break;
    }
  }
}
