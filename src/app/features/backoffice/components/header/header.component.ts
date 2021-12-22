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
  auth$: Observable<boolean> = new Observable();
  user$: Observable<any> = new Observable();
  auth: boolean = false;
  email: string | null = null;
  constructor(private store: Store<AppState>) {
    this.auth$ = this.store.select(selectAuth);
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.auth$.subscribe((auth) => {
      this.auth = auth;
    });
    this.user$.subscribe((user) => {
      this.email = user;
    });
  }
  logOut() {
    this.store.dispatch(logOut());
  }
  addNewItem() {
    this.newItemEvent.emit();
  }
}
