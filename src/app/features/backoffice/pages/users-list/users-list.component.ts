import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
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
  loader: boolean = true;
  control: boolean = false;
  search: string = "";
  list: User[] | null = null;
  listCopy: User[] | null = null;

  constructor(
    private store: Store<{ retrievedUsersList: any }>,
    private router: Router
  ) {
    this.users$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsersList());
    if (!this.list) {
      this.users$.subscribe((list: any) => {
        this.list = null;
        this.listCopy = [];
        this.list = list;
        this.listCopy = list;
      });
    }
  }

  getDetail(id?: number) {
    this.router.navigate(["/backoffice/user/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }

  filter() {
    this.listCopy = null;
    this.listCopy = this.list;
    if (this.listCopy && this.search.length > 3) {
      const listFilter = this.listCopy?.filter((user: User) => {
        return (
          user.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          user.description
            ?.toLocaleLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }

  id(numer?: number) {
    return numer?.toString();
  }
}
