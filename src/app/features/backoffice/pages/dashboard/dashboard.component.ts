import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [
    trigger("left", [
      state("void", style({ transform: "translateX(400%)", opacity: 0 })),
      transition(":enter", [
        animate(2500, style({ transform: "translateX(0)", opacity: 1 })),
      ]),
    ]),
    trigger("up", [
      state("void", style({ transform: "translateY(400%)", opacity: 0 })),
      transition(":enter", [
        animate(2500, style({ transform: "translateY(0)", opacity: 1 })),
      ]),
    ]),
    trigger("down", [
      state("void", style({ transform: "translateY(-400%)", opacity: 0 })),
      transition(":enter", [
        animate(2500, style({ transform: "translateY(0)", opacity: 1 })),
      ]),
    ]),
    trigger("right", [
      state("void", style({ transform: "translateX(-400%)", opacity: 0 })),
      transition(":enter", [
        animate(2500, style({ transform: "translateX0)", opacity: 1 })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  control:boolean = false

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

  addItem() {
   if(this.control == true){
     this.control = false
   }else{
    this.control = true
   }
  }
}
