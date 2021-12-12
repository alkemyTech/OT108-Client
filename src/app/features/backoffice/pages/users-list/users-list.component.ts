import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { retrievedUsersList } from "src/app/state/actions/users.actions";
import { selectUsers } from "src/app/state/selectors/users.selector";
import { UsersService } from "../../services/users.service";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users$: Observable<any> = new Observable()
  name: any;
  email: string = "";
  imagenNull: boolean = false;

  constructor(
    private service: UsersService,
    private actividadRouter: ActivatedRoute,
    private store: Store
  ) {
    this.users$ = this.store.select(selectUsers)
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.service.getUser().subscribe((res) => {
      this.store.dispatch(retrievedUsersList({users:res.data}));

    });
  }
}
