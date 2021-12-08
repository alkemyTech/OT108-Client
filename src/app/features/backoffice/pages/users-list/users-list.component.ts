import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user";
import { UsersService } from "../../services/users.service";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  name: any;
  email: string = "";
  imagenNull: boolean = false;
  loader:boolean =  true;
  totalCount =5;

  constructor(
    private service: UsersService,
    private actividadRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getUser();
    }, 5000);
    
  }

  getUser() {
    this.service.getUser().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.users.push(data.data[i]);
      }
    });
  }
}
