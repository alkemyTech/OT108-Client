import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { observable, Observable } from "rxjs";
import { logOut } from "src/app/state/actions/auth.actions";
import { AppState } from "src/app/state/app.state";
import { selectAuth, selectUser } from "src/app/state/selectors/auth.selector";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  token: string | null = localStorage.getItem("token");

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  logOut() {
    this.store.dispatch(logOut());
  }
  addNewItem() {
    this.newItemEvent.emit();
  }
}
