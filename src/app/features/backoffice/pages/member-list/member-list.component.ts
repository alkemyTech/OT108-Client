import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Members } from "src/app/models/members";
import { MembersService } from "../../services/members.service";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent implements OnInit {
  control: boolean = false;
  list: any[] = [];
  listCopy: any[] = [];
  search: string = "";

  constructor(private service: MembersService, private router: Router) {}

  ngOnInit(): void {
    this.service.getMember().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
          this.listCopy = this.list;
        }
      });
    });
  }

  getDetail(id: string) {
    this.router.navigate(["/backoffice/member/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }

  filter() {
    this.listCopy = this.list;
    if (this.listCopy && this.search.length > 3) {
      const listFilter = this.listCopy?.filter((member: Members) => {
        return (
          member.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          member.description
            ?.toLocaleLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }
}
