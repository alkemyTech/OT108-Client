import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadUsersList } from "src/app/state/actions/users.actions";
import { selectUsers } from "src/app/state/selectors/users.selector";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users$: Observable<any> = new Observable();
  name: any;
  email: string = "";
  imagenNull: boolean = false;
  loader:boolean =  true;
  totalCount =5;

  constructor(private store: Store<{ retrievedUsersList: any }>) {
    this.users$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsersList());
  }
}
