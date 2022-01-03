import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { logOut } from "src/app/state/actions/auth.actions";
import { AppState } from "src/app/state/app.state";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  token: boolean = false;

  @Input() slogan: string = "";
  @Input() campLogo: string = "";
  email: string | null = "";
  constructor(private store: Store<AppState>) {}
  logOut() {
    this.store.dispatch(logOut());
  }
  ngOnInit(): void {
    let token = localStorage.getItem("token");
    this.email = localStorage.getItem("email");
    if (token) {
      this.token = true;
    }
  }
}
