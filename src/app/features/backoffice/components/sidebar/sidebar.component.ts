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
        this.router.navigate(["member"]);
        break;
      case "user":
        break;
      case "slides":
        this.router.navigate(["backoffice/slides"]);
        break;
      case "community":
        break;
      case "testimony":
        break;
      case "categories":
        this.router.navigate(["backoffice/categories-list"]);
        break;
      case "activities":
        this.router.navigate(["backoffice/activities-list"]);
        break;
      case "novelties":
        break;
    }
  }
}
